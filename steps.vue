<template>
	<div>
    <toolbar/>
    <v-container grid-list-md>
			<div class="text-xs-center mt-5 pt-5">
				<v-btn @click="router('/UsingIA/PrepararDatos')" flat color="transparent"><v-progress-circular :size="250" :width="20" value="Cargar Datos" color="accent">Cargar Datos
				</v-progress-circular></v-btn>
				<v-btn @click="router('/UsingIA/DefinirModelo')" flat color="transparent"><v-progress-circular :size="250" :width="20" value="Entrenar Modelo" color="primary">Entrenar Modelo
				</v-progress-circular></v-btn>
				<v-btn @click="" flat color="transparent"><v-progress-circular :size="250" :width="20" value="Probar Modelo" color="secondary">Probar Modelo
				</v-progress-circular></v-btn>
			</div>
		</v-container>
  </div>
</template>

<script>
import toolbar from '@/components/toolBar'

export default {
  name: 'steps',
  mounted () {
    if (this.$store.state.app.application.mode === 'DIY' && this.$store.state.app.application.authenticated === false) {
      this.$router.push('/login')
    }
  },
  methods: {
    router (rute) {
      this.$router.push(rute)
    }
  },
  components: { toolbar }
}
</script>

<style>
.v-progress-circular
  margin: 1rem
</style>
