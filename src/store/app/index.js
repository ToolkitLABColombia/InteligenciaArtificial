import logoDemo from '../../assets/entrenar.svg'
const state = {
  application: {
    user: {
      name: '',
      email: '',
      password: '',
      entity: '',
      location: '',
      token: '',
      sokedId: '',
      authenticated: true,
      cms: [
        {name: 'modelo cognitivo ejemplo 1'},
        {name: 'modelo cognitivo ejemplo 2'}
      ]
    },
    toolBarItems: [
      { icon: 'exit_to_app', title: 'Ingresar', link: '/login' },
      { icon: 'how_to_reg', title: 'Registro', link: '/registro' },
      { icon: 'account_circle', title: 'Perfil', link: '/profile' }
    ],
    usingCM: {
      steps: {
        cargar: {
          active: 'accent',
          icon: 'data_usage',
          data: [
            { icon: 'account_circle', text: 'Preparar Datos', active: 'accent', color: 'accent', shadow: '#35CCCC', to: '/UsingIA/PrepararDatos' },
            { icon: 'account_circle', text: 'Definir Modelo', active: 'accent', color: 'accent', shadow: '#35CCCC', to: '/UsingIA/DefinirModelo' },
            { icon: 'account_circle', text: 'Enviale tus datos a Carina', active: 'accent', color: 'accent', shadow: '#35CCCC', to: '/UsingIA/DefinirModelo' }
          ]
        },
        entrenar: {
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
        probar: {
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
      { text: 'No tienes información y tienes poco tiempo?', textButton: 'DEMO', to: '', img: logoDemo },
      { text: 'Quieres volver a ingresar y seguir probando?', textButton: 'DIY', to: '', img: '' }
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
  // actions
}
