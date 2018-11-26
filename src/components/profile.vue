<template>
  <div>
		<toolbar/>
		<v-container>
			<v-layout row wrap>
		    <v-flex xs12 sm8 md8 offset-sm2>
		      <v-card>
						<v-hover>
							<v-card slot-scope="{ hover }">
								<v-btn fab right absolute top flat color="transparent" class="pa-5 mr-5 mt-4">
									<v-avatar size="120px">
										<img :aspect-ratio="16/9" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" alt="Avatar">
										<v-icon color="accent"></v-icon>
									</v-avatar>
								</v-btn>
								<v-img src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" aspect-ratio="2.75">
									<v-expand-transition>
					          <div v-if="hover" class="pa-2 transition-fast-in-fast-out grey darken-3 v-card--reveal white--text" style="height: 100%;">
					            <div style="font-size: 24px; font-weight: bold">Jorge Narváez</div>
											<div style="font-size: 14px; font-weight: bold">Unicor</div>
											<div style="font-size: 14px; font-weight: bold">Montería - Colombia</div>
					          </div>
				        	</v-expand-transition>
								</v-img>
							</v-card>
						</v-hover>
						<div class="headline pl-4 pt-4">Datos del Usuario</div>
			      <v-card-text>
							<v-card light hover style="border-color: black">
			          <!-- Usuario-->
			          <v-card-text>
			            <v-text-field label="Usuario" hint="usuarioejemplo"
			            v-model="$store.state.app.application.user.name" placeholder color="accent"
			            :rules="[v => !!v || 'Campo requerido']"></v-text-field>
			            <!-- correo -->
			            <v-text-field label="Correo electrónico" v-model="$store.state.app.application.user.email"
			            hint="correoejemplo@..." :rules="emailRules" color="accent"></v-text-field>
			            <!-- password -->
			            <v-text-field label="Contraseña" @keyup.enter="" :append-icon="show ? 'visibility_off' : 'visibility'" v-model="$store.state.app.application.user.password" @click:append="show = !show" :type="show ? 'text' : 'password'"
			            placeholder color="accent" hint="text xample" :rules="[v => !!v || 'Campo requerido']"></v-text-field>
			          </v-card-text>
			          <v-card-actions>
			            <v-btn block outline color="black" @click="">Guardar Cambios</v-btn>
			          </v-card-actions>
			        </v-card>
			      </v-card-text>
						<div class="headline pl-4 pt-4">Modelos Cognitivos Cargados</div>
						<v-card-text>
							<v-card light hover style="border-color: black">
			          <v-card-text>
			            <v-layout row v-for="(cm, index) in this.$store.state.app.application.user.cms" :key="index">
										<v-flex xs7 sm7 md7>
											<v-subheader>{{cm.name}}</v-subheader>
										</v-flex>
										<v-flex xs5 sm5 md5>
											<v-btn small outline color="info">cargar</v-btn>
											<v-btn small outline color="error" @click="deleteCM()">eliminar</v-btn>
										</v-flex>
			            </v-layout>
			          </v-card-text>
			        </v-card>
		        </v-card-text>
		      </v-card>
		    </v-flex>
	  	</v-layout>
		</v-container>
  </div>
</template>

<script>
import toolbar from '@/components/toolBar'
// agregé esta linea en profile para probar el repositorio colaborativo
export default {
  name: 'profile',
  data: () => ({
    hover: true,
    show: false,
    emailRules: [
      v => !!v || 'Se necesita una cuenta de correo electrónico',
      v => /.+@.+/.test(v) || 'Correo electrónico invalido'
    ]
  }),
  methods: {
    deleteCM (idCM) {
      let deleteCognitiveModel = confirm(`¿Estás seguro que desea eliminar el modelo cognitivo <nameCM>`)
      if (deleteCognitiveModel === true) {
        console.log('deleting cognitive model')
      }
    }
  },
  components: { toolbar }
}
</script>

<style lang="css">
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: left;
  opacity: .8;
  position: absolute;
  width: 100%;
}
</style>
