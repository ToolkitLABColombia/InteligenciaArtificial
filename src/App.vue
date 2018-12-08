<template>
  <v-app>
    <loading v-if="loading"/>
    <!-- <v-content height="auto"> -->
      <router-view/>
    <!-- </v-content> -->
    <!-- <footerToolkit/> -->
  </v-app>
</template>

<script>
import logoToolkit from '@/assets/logoToolkit.svg'
// import footerToolkit from '@/components/footer'
import loading from '@/components/loading'
import EventBus from '@/components/EventBus'
import './stylus/main.styl'

export default {
  mounted () {
    EventBus.$on('loading', value => {
      this.loading = value
    })
  },
  data () {
    return {
      clipped: false,
      sideNav: false,
      drawer: true,
      logo: logoToolkit,
      socket: null,
      loading: false,
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
  name: 'App',
  components: { loading }
}
</script>
