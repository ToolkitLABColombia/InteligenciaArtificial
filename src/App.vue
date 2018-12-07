<template>
  <v-app>
    <!-- <v-content height="auto"> -->
      <router-view/>
    <!-- </v-content> -->
    <!-- <footerToolkit/> -->
  </v-app>
</template>

<script>
import logoToolkit from '@/assets/logoToolkit.svg'
// import footerToolkit from '@/components/footer'
import './stylus/main.styl'

export default {
  data () {
    return {
      clipped: false,
      sideNav: false,
      drawer: true,
      logo: logoToolkit,
      socket: null,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      menuItems: [
        { icon: 'supervisor_account', title: 'Ingresar', link: '/login' },
        { icon: 'room', title: 'Registro', link: '/registro' },
        { icon: 'person', title: 'Perfil', link: '/xample' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'kit IA'
    }
  },
  name: 'App'
  // components: { footerToolkit }
}
</script>
