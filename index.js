import user from '../../assets/noun_User.svg'
import manager from '../../assets/noun_manager.svg'
import { db } from '../../main'
import { router } from '../../router'
import axios from 'axios'
import EventBus from '@/components/EventBus'

const state = {
  application: {
    response: null,
    createModel: true,
    currentCognitiveModel: '',
    user: {
      photo: 'https://firebasestorage.googleapis.com/v0/b/toolkit-1556a.appspot.com/o/sin_perfil.png?alt=media&token=58e7bbb1-2233-48c9-a301-0f0a1d2b422a',
      email: '',
      password: '',
      entity: '',
      location: '',
      carinaToken: '',
      token: '',
      cms: []
    },
    currentsCms: [],
    socketId: '',
    authenticated: false,
    toolBarItems: [
      { icon: 'exit_to_app', title: 'Ingresar', link: '/login' },
      { icon: 'how_to_reg', title: 'Registro', link: '/registro' },
      { icon: 'account_circle', title: 'Perfil', link: '/profile' }
    ],
    usingCM: {
      response: null,
      steps: {
        C: {
          active: 'accent',
          icon: 'data_usage',
          data: [
            { icon: 'account_circle', text: 'Preparar Datos', active: 'accent', color: 'accent', shadow: '#35CCCC', to: '/UsingIA/PrepararDatos' },
            { icon: 'account_circle', text: 'Definir Modelo', active: 'accent', color: 'accent', shadow: '#35CCCC', to: '/UsingIA/DefinirModelo' },
            { icon: 'account_circle', text: 'Enviale tus datos a Carina', active: 'accent', color: 'accent', shadow: '#35CCCC', to: '/UsingIA/DefinirModelo' }
          ]
        },
        E: {
          active: 'disable',
          icon: 'swap_horizontal_circle',
          data: [
            { icon: 'personal_video', text: 'Analizar Datos', active: 'disable', color: 'primary', shadow: '#CA0E69', to: '/UsingIA/PrepararDatos' },
            { icon: 'account_circle', text: 'Palabras Relevantes', active: 'accent', color: 'accent', shadow: '#35CCCC', to: '/UsingIA/palabraClave' },
            { icon: 'personal_video', text: 'Preguntas', active: 'disable', color: 'primary', shadow: '#CA0E69', to: '/UsingIA/PrepararDatos' }
          ]
        },
        P: {
          active: 'disable',
          icon: 'play_for_work',
          data: [
            { icon: 'account_circle', text: 'Cargar Modelo', active: 'accent', color: 'accent', shadow: '#35CCCC', to: '/UsingIA/PrepararDatos' },
            { icon: 'account_circle', text: 'Cargar Datos', active: 'accent', color: 'accent', shadow: '#35CCCC', to: '/UsingIA/PrepararDatos' },
            { icon: 'account_circle', text: 'Iniciar Prueba', active: 'accent', color: 'accent', shadow: '#35CCCC', to: '/UsingIA/PrepararDatos' }
          ]
        }
      }
    },
    mode: '',
    modes: [
      { text: 'No tienes información y tienes poco tiempo?', textButton: 'DEMO', img: user },
      { text: 'Quieres volver a ingresar y seguir probando?', textButton: 'DIY', img: manager }
    ],
    csv: [
      {
        'fecha': '10/02/2018',
        'peticion': 'por favor me pueden informar cuando es la fecha de cierre convocatoria de los proyectos de investigación',
        'respuesta': 'La fecha de cierre es el 5 de diciembre de 2018',
        'dependencia': ''
      },
      {
        'fecha': '11/02/2018',
        'peticion': 'Necesito saber que papeles debo de tener en cuenta para presentar un proyecto de investigación',
        'respuesta': 'Se deben presentar los siguientes formatos diligenciados: a. Formato de proyecto de investigación y extensión: F2080 y b. Formato F2081',
        'dependencia': ''
      },
      {
        'fecha': '10/03/2018',
        'peticion': 'Cuál es la fecha de inicio del proyecto FE-002',
        'respuesta': 'La fecha de inicio del proyecto es 3 de junio de 20018',
        'dependencia': ''
      },
      {
        'fecha': '10/03/2018',
        'peticion': 'Quien es el encargado de recepcionar los proyectos de extensión',
        'respuesta': 'Maria Perez es la persona encargada de recepcionar los proyectos de extensión',
        'dependencia': ''
      }
    ]
  },
  contexto: {
    nombre: '',
    descripcion: '',
    palabrasClave: [],
    palabrasRelevantes: [],
    palabrasCandidatas: [],
    palabrasDescartadas: [],
    categorias: []
  },
  registro: {
    fecha: '', // no va analisis
    hora: '', // no va analisis
    tipo: '', // no va analisis
    solicitud: '',
    dependencia: '', // no va analisis
    respuesta: '',
    observaciones: '', // no va analisis
    palabrasClave: [],
    palabrasCandidatas: [],
    palabrasRelevantes: [],
    categorias: []
  },
  registros: [],
  relaciones: [],
  temaInteres: {
    temaDeInteres: '',
    palabrasRelevantes: []
  }
}

const getters = {}

const mutations = {
  changeStep: (state, key) => {
    for (var k in state.application.usingCM.steps) {
      if (k === key) {
        state.application.usingCM.steps[k].active = 'accent'
      } else {
        state.application.usingCM.steps[k].active = 'disable'
      }
    }
  },
  addPalabraClave: (state, word) => {
    state.contexto.palabrasClave.push(word)
  },
  changePhoto: (state, photo) => {
    state.application.user.photo = photo
  },
  asignSocketId: (state, socketId) => {
    state.application.socketId = socketId
  },
  carinaToken: (state, token) => {
    state.application.user.carinaToken = token
  },
  response: (state, data) => {
    state.contexto = data.context
    state.application.csv = data.csv
  },
  addCognitiveModel: (state, CognitiveModel) => {
    let cognitiveModel = { name: CognitiveModel.data.nombre, id: CognitiveModel.id }
    state.application.user.cms.push(cognitiveModel)
    // state.application.currentsCms.push(cognitiveModel)
  },
  mode: (state, mode) => {
    state.mode = mode
    console.log(state.mode)
  },
  discardWord: (state, obj) => {
    state.contexto[obj.key2].push(obj.value)
    let index = state.contexto[obj.key1].indexOf(obj.value)
    state.contexto[obj.key1].splice(index, 1)
  },
  addWord: (state, word) => {
    state.contexto.palabrasClave.push(word)
    // EventBus.$emit('addWord', false)
  },
  addCategory: (state, obj) => {
    state.relaciones[obj.child].temasDeInteres.push({ temaDeInteres: obj.word, palabrasRelevantes: [] })
  },
  asignWord: (state, obj) => {
    state.relaciones[obj.child].temasDeInteres[obj.category].palabrasRelevantes.push(obj.word)
  }
}

const actions = {
  auth (context, token) {
    context.state.application.authenticated = true
    context.state.application.user.token = token
  },
  login (context, user) {
    state.application.user = user.data
    context.dispatch('auth', user.id)
  },
  updatePhoto (context, upload) {
    upload.getDownloadURL().then(url => {
      context.commit('changePhoto', url)
      db.collection('users').doc(context.state.application.user.token).update({
        photo: url
      })
    })
  },
  addingCognitiveModel (context, link) {
    db.collection('cognitiveModels').add(context.state.contexto).then(cognitiveModel => {
      try {
        db.collection('cognitiveModels').doc(cognitiveModel.id).get().then(CognitiveModel => {
          context.commit('addCognitiveModel', {id: CognitiveModel.id, data: CognitiveModel.data()})
          context.state.application.currentCognitiveModel = CognitiveModel.id
        }).then(e => context.dispatch('updateUser'))
      } catch (error) {
        console.error(error)
      } finally {
        context.dispatch('procesingCognitiveModel', link)
      }
    })
    .catch(error => console.error('Error al registrar el cognitiveModel: ', error))
  },
  procesingCognitiveModel (context, link) {
    let data = {context: context.state.contexto, csv: context.state.application.csv}
    axios.defaults.headers.common['Authorization'] = context.state.application.user.carinaToken
    axios.post(`${link}/c/postCognitiveModel`, data).then(response => console.log(response.data)).catch(err => console.error(err))
    EventBus.$emit('loading', false)
    context.state.application.createModel = false
    router.push('/UsingIA/palabraClave')
  },
  updateUser (context) {
    db.collection('users').doc(context.state.application.user.token).update(context.state.application.user)
  },
  updatingCognitiveModel (context) {
    db.collection('cognitiveModels').doc(context.state.application.currentCognitiveModel).update(context.state.contexto).then(updt => EventBus.$emit('loading', false))
  },
  relationedWords (context, link) {
    axios.defaults.headers.common['Authorization'] = context.state.application.user.carinaToken
    axios.post(`${link}/c/relationedWords`, context.state.relaciones).then(response => console.log(response.data)).catch(err => console.error(err))
    EventBus.$emit('loading', false)
  },
  createRelations (context) {
    try {
      context.state.contexto.palabrasCandidatas.map(word => {
        let a = {
          palabraClave: word,
          temasDeInteres: []
        }
        context.state.relaciones.push(a)
      })
      console.log(context.state.relaciones)
    } finally {
      EventBus.$emit('loading', false)
      router.push('/UsingIA/temasDeInteres')
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
