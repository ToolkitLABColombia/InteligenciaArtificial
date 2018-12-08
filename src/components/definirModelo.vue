<template>
  <v-container>
    <v-layout row wrap>
      <v-flex column xs12 sm12 md12>
        <h1 class="pb-2" style="font-size: 35px">Define el Modelo Cognitivo</h1>
        <v-divider></v-divider>
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
            <v-text-field label="Dale un nombre a tu Modelo" hint="Ejemplo: Modelo de peticiones acerca de rubros presupuestales"
            v-model="$store.state.app.contexto.nombre" placeholder color="accent"
            :rules="[v => !!v || 'Campo requerido']"></v-text-field>
            <!-- descripción -->
            <v-textarea rows="2" label="Cuéntanos para que sirve tu Modelo" v-model="$store.state.app.contexto.descripcion"
            hint="Ejemplo: Mi modelo permite obtener respuestas acerca de rubros presupuestales,procesos de rubros, adición
            presupuestal, etc." color="accent"></v-textarea>
            <!-- palabras clave -->
            <v-text-field label="Palabra Clave" @keyup.enter="addPalabraClave" v-model="palabraClave"
            placeholder color="accent" :hint="addedWords" :persistent-hint="perH"></v-text-field>
          </v-card-text>
          <div class="text-xs-center">
            <v-btn v-if="$store.state.app.application.createModel" :disabled="enableSaveModel" color="black" class="accent--text" @click="sendModel">Crear Modelo</v-btn>
            <v-btn v-else :disabled="enableSaveModel" color="black" class="error--text" @click="UpdateModel">Actualizar Modelo</v-btn>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
import EventBus from '@/components/EventBus'

export default {
  name: 'DefinirModelo',
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
    sendModel () {
      EventBus.$emit('loading', true)
      this.$store.dispatch('app/addingCognitiveModel', this.url)
    },
    UpdateModel () {
      EventBus.$emit('loading', true)
      this.$store.dispatch('app/updatingCognitiveModel')
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
  components: { EventBus }
}
</script>

<style lang="css">
</style>
