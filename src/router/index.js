import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/Inicio'
import QuienesSomos from '@/components/QuienesSomos'
import LineaDeTiempo from '@/components/LineaDeTiempo'
import ModoDeUso from '@/components/ModoDeUso'
import Login from '@/components/login'
import Registro from '@/components/registro'
import Profile from '@/components/profile'
import PrepararDatos from '@/components/PrepararDatos'
import DefinirModelo from '@/components/definirModelo'
import PalabrasClave from '@/components/palabrasClave'
import TemasDeInteres from '@/components/temasDeInteres'
import steps from '@/components/steps'

Vue.use(Router)

const routes = {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/quienesSomos',
      name: 'QuienesSomos',
      component: QuienesSomos
    },
    {
      path: '/modoDeUso',
      name: 'ModoDeUso',
      component: ModoDeUso
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registro',
      name: 'Registro',
      component: Registro
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/steps',
      name: 'Steps',
      component: steps
    },
    { path: '/UsingIA',
      component: LineaDeTiempo,
      children: [{
        path: 'PrepararDatos',
        component: PrepararDatos
      }, {
        path: 'DefinirModelo',
        component: DefinirModelo
      }, {
        path: 'palabraClave',
        component: PalabrasClave
      }, {
        path: 'temasDeInteres',
        component: TemasDeInteres
      }]
    }
  ]
}

export const router = new Router(routes)
