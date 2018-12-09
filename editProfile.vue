<template>
	<v-card>
		<v-hover>
			<v-card slot-scope="{ hover }">
				<v-btn fab right absolute top flat color="transparent" class="pa-5 mr-5 mt-5">
					<v-avatar size="120px">
						<img :aspect-ratio="16/9" :src="$store.state.app.application.user.photo" alt="Avatar">
						<v-icon color="accent"></v-icon>
					</v-avatar>
				</v-btn>
				<v-img :src="banner" aspect-ratio="2.75">
					<v-expand-transition>
						<div v-if="hover" class="pa-2 transition-fast-in-fast-out grey darken-3 v-card--reveal white--text" style="height: 100%;">
							<div style="font-size: 18px; font-weight: bold">{{$store.state.app.application.user.email}}</div>
							<div style="font-size: 14px; font-weight: bold">{{$store.state.app.application.user.entity}}</div>
							<div style="font-size: 14px; font-weight: bold">{{$store.state.app.application.user.location}}</div>
						</div>
					</v-expand-transition>
				</v-img>
			</v-card>
		</v-hover>
		<div class="headline pl-4 pt-4">Datos del Usuario</div>
		<v-card-text>
			<v-card light hover style="border-color: black">
				<v-card-text>
					<!-- correo -->
					<v-text-field label="Correo electrónico" v-model="$store.state.app.application.user.email"
					hint="correoejemplo@..." :rules="emailRules" color="accent"></v-text-field>
					<!-- password -->
					<v-text-field label="Contraseña" @keyup.enter="" :append-icon="show ? 'visibility_off' : 'visibility'" v-model="$store.state.app.application.user.password" @click:append="show = !show" :type="show ? 'text' : 'password'"
					placeholder color="accent" hint="text xample" :rules="[v => !!v || 'Campo requerido']"></v-text-field>
					<!-- entidad -->
					<v-text-field label="Entiad" hint="Ej: MINTIC"
					v-model="$store.state.app.application.user.entity" placeholder color="accent"
					:rules="[v => !!v || 'Campo requerido']"></v-text-field>
					<!-- localizacion -->
					<v-text-field label="localización" hint="Montería - Colombia"
					v-model="$store.state.app.application.user.location" placeholder color="accent"
					:rules="[v => !!v || 'Campo requerido']"></v-text-field>
				</v-card-text>
				<v-card-actions>
					<v-btn block outline color="black" @click="done">Guardar Cambios</v-btn>
				</v-card-actions>
			</v-card>
		</v-card-text>
		<div class="headline pl-4 pt-4">Modelos Cognitivos Cargados</div>
		<v-card-text>
			<v-card light hover style="border-color: black">
				<v-card-text>
					<div class="text-xs-center">
						<v-layout row v-for="(cm, index) in this.$store.state.app.application.currentsCms" :key="index">
							<v-flex xs7 sm7 md7>
								<v-subheader>{{cm.name}}</v-subheader>
							</v-flex>
							<v-flex xs5 sm5 md5>
								<!-- <v-btn small outline color="info">cargar</v-btn> -->
								<v-btn small outline color="error" @click="deleteCM()">eliminar</v-btn>
							</v-flex>
						</v-layout>
					</div>
				</v-card-text>
			</v-card>
		</v-card-text>
	</v-card>
</template>

<script>
import fondo from '@/assets/Fondo3.png'
import icon from '@/assets/noun_brainstorming.svg'
import banner from '@/assets/bannerRegistro.png'

export default {
  name: 'editProfile',
  data () {
    return {
      hover: true,
      fondo,
      icon,
      banner,
      edit: false,
      show: false,
      emailRules: [
        v => !!v || 'Se necesita una cuenta de correo electrónico',
        v => /.+@.+/.test(v) || 'Correo electrónico invalido'
      ]
    }
  },
  methods: {
    done () {
      this.$emit('done')
    },
    deleteCM (idCM) {
      let deleteCognitiveModel = confirm(`¿Estás seguro que desea eliminar el modelo cognitivo <nameCM>`)
      if (deleteCognitiveModel === true) {
        console.log('deleting cognitive model')
      }
    }
  }
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
