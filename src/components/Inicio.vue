<template>
  <div>
    <toolbar/>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-img :src="fondo"></v-img>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm12 md12 class="centrado">
          <!-- <v-avatar :size="35">
          <v-img :src="logoToolkit" alt="Logo de Toolkit IA"></v-img>
        </v-avatar> -->
        <v-btn to="/modoDeUso" color="black" class="accent--text">Iniciar</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row align-center justify-center>
      <v-flex d-flex xs6 sm6 md12 column>
        <p class="text-xs-center">
          <span>Contáctenos:</span><br/>
          <a href="mailto:centrodeinnovacion@mintic.gov.co">centrodeinnovacion@mintic.gov.co</a><br/>
          <a href="mailto:carina@correo.unicordoba.edu.co">carina@correo.unicordoba.edu.co</a>
        </p>
      </v-flex>
      <v-flex d-flex xs6 sm6 md12 column>
        <p class="text-xs-center">
          <span>Sobre ToolKits:</span><br/>
          <router-link to="/quienesSomos">¿Quiénes somos?</router-link><br/>
          <a href="http://centrodeinnovacion.gov.co">centrodeinnovacion.gov.co</a><br/>
          <a href="http://cien.net.co">cien.net.co</a>
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
import logoToolkit from '@/assets/logoToolkit.svg'
import fondo from '@/assets/Fondo2.png'
import toolbar from '@/components/toolBar'

export default {
  name: 'Inicio',
  data () {
    return {
      logoToolkit,
      fondo
    }
  },
  components: { toolbar }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centrado {
  text-align: center;
}
</style>
