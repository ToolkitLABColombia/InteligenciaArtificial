<template>
	<div>
		<toolbar/>
		<v-container grid-list-md text-xs-center>
			<v-layout justify-center>
				<v-flex xs12 sm6 md6>
					<!-- <v-card> -->
					<v-card-title class="gray">
						<span class="headline black--text">Registrarme</span>
					</v-card-title>
					<v-form ref="form" v-model="valid" lazy-validation>
						<v-flex xs12 sm10 md10>
							<v-text-field label="Correo Electrónico" :rules="emailRules" required ></v-text-field>
						</v-flex>
						<v-flex xs12 sm10 md10>
							<v-text-field label="Usuario" :rules="usuarioRules" required ></v-text-field>
						</v-flex>
						<v-flex xs12 sm10 md10>
							<v-text-field :type="'password'" :rules="passwordRules" label="Contraseña" required ></v-text-field>
						</v-flex>
						<v-flex xs12 sm10 md10>
							<v-select
							:items="roles"
							:rules="[v => !!v || 'Item is required']"
							label="Rol"
							required
							></v-select>
						</v-flex>
						<v-btn :disabled="!valid" @click="">Registrarme</v-btn>
						<v-btn @click="clear">Limpiar Datos</v-btn>
					</v-form>
					<!-- </v-card> -->
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
import toolbar from '@/components/toolBar'
export default {
  name: 'Registro',
  data () {
    return {
      valid: true,
      usuarioRules: [v => !!v || 'Usuario requerido'],
      passwordRules: [v => !!v || 'Contraseña requerida'],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      roles: ['desarrollador', 'usuario', 'administrador']
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
