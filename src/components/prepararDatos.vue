<template>
  <!-- <h1>Preparar Datos</h1> -->
  <v-container>
    <v-layout row wrap>
      <v-flex xs4 sm6 md6>
        <!-- <input type="file" @change="loadCsv"> -->
        <v-img :src="previewData" contain aspect-ratio="2"></v-img>
        <pre>{{$store.state.app.application.csv}}</pre>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import previewData from '../assets/previewData.png'

export default {
  name: 'PrepararDatos',
  data: () => ({
    previewData
  }),
  methods: {}
}
</script>

<style lang="css">
</style>
