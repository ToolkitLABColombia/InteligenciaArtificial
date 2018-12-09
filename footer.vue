<template>
	<v-footer height="auto">
    <v-card class="flex" flat tile>
			<v-card-actions class="black darken-3 justify-center">
					<router-link to="/quienesSomos"><a class="white--text">Quienes Somos?</a></router-link>
					<v-spacer></v-spacer>
					<router-link to="/quienesSomos"><a class="white--text">Contáctenos</a></router-link>
					<v-spacer></v-spacer>
					<router-link to="/quienesSomos"><a class="white--text">Términos y Condiciones</a></router-link>
				<v-spacer></v-spacer>
        &copy;2018 — <strong>CI&CC</strong>
      </v-card-actions>
      <v-card-title class="black py-2">
				<v-img max-width max-height contain :src="logoCompleto"></v-img>
				<!-- <v-img max-width max-height contain aspect-ratio="2" :src="logoPNUD"></v-img> -->
				<!-- <v-spacer></v-spacer>
				<v-img max-width max-height contain aspect-ratio="2" :src="logoGobierno"></v-img>
				<v-spacer></v-spacer>
				<v-spacer></v-spacer>
				<v-spacer></v-spacer>
				<v-spacer></v-spacer>
				<v-img max-width max-height contain aspect-ratio="2" :src="logoCentroInnovacion"></v-img> -->
				<!-- <img max-height max-width aspect-ratio="2" src="../assets/centroInnovacion.png" width="130px" height="35px"> -->
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
import logoPNUD from '../assets/LOGOpnud.png'
import logoGobierno from '../assets/logoMINTIC.png'
import logoCentroInnovacion from '../assets/centroInnovacion.png'
import logoCompleto from '../assets/sinfondo.png'

export default {
  name: 'footerToolkit',
  data () {
    return {
      fixed: false,
      logoPNUD,
      logoGobierno,
      logoCentroInnovacion,
      logoCompleto
    }
  }
}
</script>

<style lang="css">
</style>
