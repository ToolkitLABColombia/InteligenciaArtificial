// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import store from './store/index'
import 'vuetify/dist/vuetify.min.css'
// import colors from 'vuetify/es5/util/colors'

const tema = {
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

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
