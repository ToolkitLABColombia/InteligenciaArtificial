<template>
	<div>
		<toolbar/>
		<v-container grid-list-md text-xs-center>
			<v-layout justify-center>
				<v-flex xs12 sm6 md6>
					<v-card-title class="gray">
						<span class="headline black--text">Bienvenido!</span>
					</v-card-title>
					<v-form ref="form" v-model="valid" lazy-validation>
						<v-flex xs12 sm10 md10>
							<v-text-field label="Correo Electrónico" v-model="$store.state.app.application.user.email" :rules="emailRules" required ></v-text-field>
						</v-flex>
						<v-flex xs12 sm10 md10>
							<v-text-field :type="show ? 'text' : 'password'" v-model="$store.state.app.application.user.password" :append-icon="show ? 'visibility_off' : 'visibility'" :rules="passwordRules" label="Contraseña" @click:append="show = !show" required ></v-text-field>
						</v-flex>
						<v-btn :disabled="!valid" @click="login">Entrar</v-btn>
						<v-btn @click="clear">Limpiar Datos</v-btn>
					</v-form>
					<br>
					<span>No tienes una cuenta?, </span><router-link to="/registro">Registrate Ahora</router-link>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
import toolbar from '@/components/toolBar'
import {db} from '../main'
// import io from 'socket.io-client'

export default {
  name: 'login',
  mounted () {},
  data () {
    return {
      valid: true,
      show: false,
      url: 'http://localhost:3000',
      passwordRules: [v => !!v || 'Contraseña requerida'],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    clear () {
      this.$refs.form.reset()
    },
    login () {
      db.collection('users').where('email', '==', this.$store.state.app.application.user.email).where('password', '==', this.$store.state.app.application.user.password).get().then((doc) => {
        if (doc.docs[0]) {
          // verificar que esto funcione
          let user = doc.docs[0]
          try {
            this.$store.dispatch('app/login', {data: user.data(), id: user.id})
          } finally {
            this.$router.push('/')
          }
          // -----------------------------
        } else {
          console.log('No such document!')
        }
      }).catch((error) => {
        console.log('Error getting document:', error)
      })
    }
  },
  components: { toolbar }
}
</script>

<style lang="css">
</style>
