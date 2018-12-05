<template>
  <v-jumbotron height="100%" :src="fondo">
    <toolbar/>
    <v-container grid-list-md text-xs-center>
      <v-layout row>
        <v-flex xs12 sm12 md12 class="centrado">
        <div class="pt-5">
          <v-img :src="titulo" aspect-ratio="15" contain></v-img>
        </div>
          <div class="centrado ma-5" width="200px">
            <p class="white--text text-md-center" style="font-size: 18px">El kit de esta tecnología te permitirá aprovechar las capacidades de aprendizaje de tu ordenador, para facilitar tu trabajo. Deberás enseñar a realizar las tareas y a entender la información, como una persona lo haría :)</p>
          </div>
        <v-btn outline to="/modoDeUso" color="accent" style="font-size: 18px">Empezar</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</v-jumbotron>
</template>

<script>
import logoToolkit from '@/assets/logoToolkit.svg'
import fondo from '@/assets/fondoportada2.jpg'
import enlace from '@/assets/logoToolkitCompleto.png'
import titulo from '@/assets/titulo.png'
import toolbar from '@/components/toolBar'

export default {
  name: 'Inicio',
  data () {
    return {
      logoToolkit,
      fondo,
      enlace,
      titulo
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
.fondo {
  width: 100%;
  height: 100%;
  background-image: url('../assets/fondoportada.jpg');
	-webkit-background-size: cover;
	background-size: cover
}
</style>
