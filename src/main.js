// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import store from './store/index'
import 'vuetify/dist/vuetify.min.css'
import icon from '@/assets/noun_brainstorming.svg'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/auth'
import 'firebase/firestore'

const tema = {
  icon: {
    ej: icon
  },
  theme: {
    primary: '#CA0E67',
    secondary: '#FFFD38',
    accent: '#35CCCC',
    error: '#FF7B00',
    info: '#60DD99',
    success: '#FFA726',
    warning: '#7269DB',
    black: '#000000',
    white: '#F1EFEB',
    disable: '#595F62'
  }
}

Vue.use(Vuetify, tema)
Vue.use(VueFire)

const config = {
  apiKey: 'AIzaSyALVtR9gL-zpCvxC-aowWFWcDqW71eHsEw',
  authDomain: 'toolkit-1556a.firebaseapp.com',
  databaseURL: 'https://toolkit-1556a.firebaseio.com',
  projectId: 'toolkit-1556a',
  storageBucket: 'toolkit-1556a.appspot.com',
  messagingSenderId: '146062994371'
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
// 'http://172.19.0.56:3000'

const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
db.settings({timestampsInSnapshots: true})
const storage = firebase.storage()

export {db, auth, storage}
