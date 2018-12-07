<template>
  <v-container>
    <v-layout row wrap>
      <v-flex column xs12 sm12 md12>
        <div class="headline">Define el Modelo Cognitivo</div>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex column xs12 sm12 md12 class="py-3">
        <v-card light hover style="border-color: black">
          <v-card-title primary-title>
            <!-- {{$store.state.app.application.user}} -->
            <div class="headline">Datos del Modelo</div>
          </v-card-title>
          <!-- nombre del modelo -->
          <v-card-text>
            <v-text-field label="Dale un nombre del Modelo" hint="Ejemplo: Modelo de peticiones acerca de rubros presupuestales"
            v-model="$store.state.app.contexto.nombre" placeholder color="accent"
            :rules="[v => !!v || 'Campo requerido']"></v-text-field>
            <!-- descripción -->
            <v-textarea rows="2" label="Cuéntanos para que sirve tu Modelo" v-model="$store.state.app.application.descripcion"
            hint="Ejemplo: Mi modelo permite obtener respuestas acerca de rubros presupuestales,procesos de rubros, adición
            presupuestal, etc." color="accent"></v-textarea>
            <!-- palabras clave -->
            <v-text-field label="Palabra Clave" @keyup.enter="addPalabraClave" v-model="palabraClave"
            placeholder color="accent" :hint="addedWords" :persistent-hint="perH"></v-text-field>
          </v-card-text>
          <div class="text-xs-center">
            <v-btn :disabled="enableSaveModel" color="black" class="accent--text" @click="sendData">Crear Modelo</v-btn>
          </div>
        </v-card>
      </v-flex>
      <v-flex>
        <loading v-if="loading"/>
      </v-flex>
      <!-- <xampleToolBar/> -->
    </v-layout>
  </v-container>

</template>

<script>
import loading from '@/components/loading'
import axios from 'axios'
import EventBus from '@/components/EventBus'
import xampleToolBar from '@/components/xampleToolBar'

export default {
  name: 'DefinirModelo',
  mounted () {
    EventBus.$on('loading', value => {
      this.loading = value
    })
  },
  data: () => ({
    palabraClave: '',
    loading: false,
    url: 'http://localhost:3000',
    text: 'Ejemplo: Rubro / Palabras agregadas: ',
    perH: false
  }),
  methods: {
    addPalabraClave () {
      this.$store.commit('app/addPalabraClave', this.palabraClave)
      this.palabraClave = ''
      this.perH = true
    },
    sendData () {
      EventBus.$emit('loading', true)
      let data = {context: this.$store.state.app.contexto, csv: this.$store.state.app.application.csv}
      axios.defaults.headers.common['Authorization'] = this.$store.state.app.application.user.carinaToken
      axios.post(`${this.url}/c/postCognitiveModel`, data).then(response => console.log(response.data)).catch(err => console.log(err))
    }
  },
  computed: {
    enableSaveModel () {
      if (this.$store.state.app.contexto.nombre !== '' && this.$store.state.app.contexto.palabrasClave.length !== 0) {
        return false
      } else {
        return true
      }
    },
    addedWords () {
      let words = ''
      this.$store.state.app.contexto.palabrasClave.forEach(word => {
        words += `${word}, `
      })
      return this.text + words.slice(0, -2)
    }
  },
  components: { loading, EventBus, xampleToolBar }
}
</script>

<style lang="css">
</style>
