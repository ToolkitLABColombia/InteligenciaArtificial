<template>
	<div>
		<toolbar/>
		<v-container grid-list-md text-xs-center>
			<v-layout justify-center>
				<v-flex xs12 sm6 md6>
					<v-card-title class="gray">
						<span class="headline black--text">Registrarme</span>
					</v-card-title>
					<v-form ref="form" v-model="valid" lazy-validation>
						<v-flex xs12 sm10 md10>
							<v-text-field label="Correo Electrónico" v-model="$store.state.app.application.user.email" :rules="emailRules" required ></v-text-field>
						</v-flex>
						<v-flex xs12 sm10 md10>
							<v-text-field :type="'password'" v-model="$store.state.app.application.user.password" :rules="passwordRules" label="Contraseña" required ></v-text-field>
						</v-flex>
						<v-flex xs12 sm10 md10>
							<v-text-field label="Entidad" v-model="$store.state.app.application.user.entity" :rules="usuarioRules" required ></v-text-field>
						</v-flex>
						<v-flex xs12 sm10 md10>
							<v-text-field label="Localización" v-model="$store.state.app.application.user.location" :rules="usuarioRules" required ></v-text-field>
						</v-flex>
						<v-btn :disabled="!valid" @click="registerme">Registrarme</v-btn>
						<v-btn @click="clear">Limpiar Datos</v-btn>
					</v-form>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
import toolbar from '@/components/toolBar'
import { db } from '../main'

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
    },
    registerme () {
      db.collection('users').add(this.$store.state.app.application.user)
      .then((docRef) => {
        // console.log('Document written with ID: ', docRef.id, docRef)
        try {
          this.$store.dispatch('app/auth', docRef.id)
        } catch (error) {
          console.log(error)
        } finally {
          this.$router.push('/')
        }
      })
      .catch((error) => {
        console.error('Error adding document: ', error)
      })
    }
  },
  components: { toolbar }
}
</script>

<style lang="css">
</style>
