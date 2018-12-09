<template>
	<v-container>
		<dialogo :addWord="addWord"/>
    <h1 class="pb-2" style="font-size: 35px">Cuales son tus palabras de Interés?</h1>
		<v-divider></v-divider>
		<v-layout row wrap>
      <v-flex column xs12 sm6 md6>
				<div class="headline pa-2">Palabras Descartadas</div>
				<div class="elevation-7">
					<v-alert v-model="alert" dismissible color="error">Aqui se encuentran las palabras que has decartado de la bolsa de palabras que carina te ha propuesto.</v-alert>
				</div>
				<v-card class="pa-3 elevation-7">
					<div v-for="(val, index) in this.$store.state.app.contexto.palabrasDescartadas" :key="index">
						<v-chip @input="check(val, 'palabrasDescartadas', 'palabrasClave')" close color="primary" text-color="white">{{val}}</v-chip>
					</div>
				</v-card>
			</v-flex>
			<v-flex column xs12 sm6 md6>
				<div class="headline pa-2">Palabras Clave</div>
				<div class="elevation-7">
					<v-alert v-model="alert" dismissible color="error">Aqi estan las palabras que has considerado relevantes de la bolsa de palabras que carina te ha propuesto.</v-alert>
				</div>
				<v-card class="pa-3 elevation-7">
					<div v-for="(val, index) in this.$store.state.app.contexto.palabrasClave" :key="index">
						<v-chip @input="check(val, 'palabrasClave', 'palabrasDescartadas')" close color="accent" text-color="white">{{val}}</v-chip>
					</div>
					<div class="pb-5">
						<v-btn absolute dark fab right color="info" @click="addWord = !addWord">
							<v-icon>add</v-icon>
						</v-btn>
					</div>
				</v-card>
			</v-flex>
		</v-layout>
    <div class="text-xs-center">
      <v-btn color="black" outline @click="createRelations">Siguiente</v-btn>
    </div>
  </v-container>
</template>

<script>
import dialogo from '@/components/dialog.vue'
import EventBus from '@/components/EventBus'

export default {
  name: 'palabrasClave',
  mounted () {
    EventBus.$on('addWord', val => {
      this.addWord = val
    })
  },
  data: () => ({
    alert: true,
    addWord: false
  }),
  methods: {
    check (value, key1, key2) {
      this.$store.commit('app/discardWord', { value: value, key1: key1, key2: key2 })
    },
    createRelations () {
      EventBus.$emit('loading', true)
      this.$store.dispatch('app/createRelations')
    }
  },
  components: { dialogo }
}
</script>

<style lang="css">
</style>
