<template>
  <!-- <h1>Preparar Datos</h1> -->
  <v-container>
    <v-layout row wrap>
      <v-flex xs4 sm6 md12>
        <div class="headline">Prepara tus datos de la siguiente manera</div>
        <div>
          <v-alert v-model="alert" dismissible type="success"><strong>Recuerda...</strong><br>Tus datos deben estar organizados de la siguiente forma</v-alert>
        </div>
        <v-img :src="previewData" contain aspect-ratio="3"></v-img>
				<div>
          <v-alert :value="true" color="primary" icon="info" outline>
            Los datos que corresponden a la imagen ya se encuentran cargados en la versión <strong>DEMO</strong>.
          </v-alert>
        </div>
        <div class="text-xs-center">
          <v-btn color="black" outline to="/UsingIA/DefinirModelo">Siguiente</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import previewData from '../assets/previewData.png'

export default {
  name: 'PrepararDatos',
  data: () => ({
    previewData,
    alert: true
  }),
  methods: {},
  computed: {
    csv () {
      return JSON.stringify(this.$store.state.app.application.csv, null, 2)
    }
  }
}
</script>

<style lang="css">
</style>
