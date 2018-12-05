<template>
	<div>
    <toolbar/>
    <v-container>
			<div class="text-xs-center">
		    <v-btn to="/UsingIA/DefinirModelo"><v-progress-circular :size="250" :width="20" value="Cargar Datos" color="accent">Cargar Datos
				</v-progress-circular></v-btn>
				<v-progress-circular :size="250" :width="20" value="Entrenar Modelo" color="primary">Entrenar Modelo
				</v-progress-circular>
				<v-progress-circular :size="250" :width="20" value="Probar Modelo" color="secondary">Probar Modelo
				</v-progress-circular>
		  </div>
		</v-container>
  </div>
</template>

<script>
import toolbar from '@/components/toolBar'

export default {
  name: 'steps',
  components: { toolbar }
}
</script>

<style>
.v-progress-circular
  margin: 1rem
</style>
