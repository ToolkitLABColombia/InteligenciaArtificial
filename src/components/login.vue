<template>
	<div>
		<toolbar/>
		<v-container grid-list-md text-xs-center>
			<v-layout justify-center>
				<v-flex xs12 sm6 md6>
					<!-- <v-card> -->
					<v-card-title class="gray">
						<span class="headline black--text">Bienvenido!</span>
					</v-card-title>
					<v-form ref="form" v-model="valid" lazy-validation>
						<v-flex xs12 sm10 md10>
							<v-text-field label="Usuario" :rules="usuarioRules" required ></v-text-field>
						</v-flex>
						<v-flex xs12 sm10 md10>
							<v-text-field :type="show ? 'text' : 'password'" :append-icon="show ? 'visibility_off' : 'visibility'" :rules="passwordRules" label="Contraseña" @click:append="show = !show" required ></v-text-field>
						</v-flex>
						<v-btn :disabled="!valid" @click="">Entrar</v-btn>
						<v-btn @click="clear">Limpiar Datos</v-btn>
					</v-form>
					<br>
					<span>No tienes una cuenta?, </span><router-link to="/registro">Registrate Ahora</router-link>
					<!-- </v-card> -->
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
import toolbar from '@/components/toolBar'
export default {
  name: 'login',
  data () {
    return {
      valid: true,
      show: false,
      usuarioRules: [v => !!v || 'Usuario requerido'],
      passwordRules: [v => !!v || 'Contraseña requerida']
    }
  },
  methods: {
    clear () {
      this.$refs.form.reset()
    }
  },
  components: { toolbar }
}
</script>

<style lang="css">
</style>
