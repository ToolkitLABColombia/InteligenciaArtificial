import user from '../../assets/noun_User.svg'
import manager from '../../assets/noun_manager.svg'
import { db } from '../../main'

const state = {
  application: {
    response: null,
    user: {
      photo: 'https://firebasestorage.googleapis.com/v0/b/toolkit-1556a.appspot.com/o/sin_perfil.png?alt=media&token=58e7bbb1-2233-48c9-a301-0f0a1d2b422a',
      email: '',
      password: '',
      entity: '',
      location: '',
      carinaToken: '',
      token: '',
      cms: [
        {name: 'modelo cognitivo ejemplo 1'},
        {name: 'modelo cognitivo ejemplo 2'}
      ]
    },
    socketId: '',
    authenticated: false,
    toolBarItems: [
      { icon: 'exit_to_app', title: 'Ingresar', link: '/login' },
      { icon: 'how_to_reg', title: 'Registro', link: '/registro' },
      { icon: 'account_circle', title: 'Perfil', link: '/profile' }
    ],
    usingCM: {
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
            { icon: 'linear_scale', text: 'Inicio Entrenamiento', active: 'disable', color: 'secondary', shadow: '#FFFD38', to: '/UsingIA/PrepararDatos' },
            { icon: 'personal_video', text: 'Analizar Datos', active: 'disable', color: 'primary', shadow: '#CA0E69', to: '/UsingIA/PrepararDatos' },
            { icon: 'account_circle', text: 'Palabras Relevantes', active: 'accent', color: 'accent', shadow: '#35CCCC', to: '/UsingIA/PrepararDatos' },
            { icon: 'personal_video', text: 'Preguntas', active: 'disable', color: 'primary', shadow: '#CA0E69', to: '/UsingIA/PrepararDatos' },
            // { icon: 'account_circle', text: 'ProbarE', active: 'disable', color: 'accent' },
            { icon: 'linear_scale', text: 'Modelo Entrenado', active: 'disable', color: 'secondary', shadow: '#FFFD38', to: '/UsingIA/PrepararDatos' }
          ]
        },
        P: {
          active: 'disable',
          icon: 'play_for_work',
          data: [
            { icon: 'account_circle', text: 'Cargar Modelo', active: 'accent', color: 'accent', shadow: '#35CCCC', to: '/UsingIA/PrepararDatos' },
            { icon: 'account_circle', text: 'Cargar Datos', active: 'accent', color: 'accent', shadow: '#35CCCC', to: '/UsingIA/PrepararDatos' },
            { icon: 'account_circle', text: 'Iniciar Prueba', active: 'accent', color: 'accent', shadow: '#35CCCC', to: '/UsingIA/PrepararDatos' },
            { icon: 'personal_video', text: 'Resultados', active: 'disable', color: 'primary', shadow: '#CA0E69', to: '/UsingIA/PrepararDatos' }
          ]
        }
      }
    },
    modes: [
      { text: 'No tienes información y tienes poco tiempo?', textButton: 'DEMO', to: '', img: user },
      { text: 'Quieres volver a ingresar y seguir probando?', textButton: 'DIY', to: '', img: manager }
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
    palabrasClave: []
  },
  registro: {
    fecha: '',
    hora: '',
    tipo: '',
    solicitud: '',
    dependencia: '',
    respuesta: '',
    observaciones: '',
    palabrasClave: [],
    palabrasRelevantes: [],
    categorias: []
  },
  registros: [],
  relaciones: [
    {
      palabraClave: '',
      temasDeInteres: [
        {
          temaDeInteres: '',
          palabrasRelevantes: []
        }
      ]
    }
  ]
}

const getters = {
  // iconosOds: ({ iconosOds }) => iconosOds
}

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
    state.application.response = data.data.keywords.objCsv
  }
}

const actions = {
  auth (context, token) {
    context.state.application.authenticated = true
    context.state.application.user.carinaToken = token
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
