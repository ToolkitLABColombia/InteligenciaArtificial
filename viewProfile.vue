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
		<div class="headline pl-4 pt-4">Modelos Cognitivos Cargados</div>
		<v-card-text>
			<v-card light hover style="border-color: black">
				<v-card-text>
					<div class="text-xs-center">
						<v-layout row v-for="(cm, index) in this.$store.state.app.application.user.cms" :key="index" align-center>
							<v-flex xs7 sm7 md7>
								<v-subheader>{{cm.name}}</v-subheader>
							</v-flex>
							<v-flex xs5 sm5 md5 align-self-center>
								<v-btn small outline color="info">cargar</v-btn>
								<!-- <v-btn small outline color="error" @click="deleteCM()">eliminar</v-btn> -->
							</v-flex>
						</v-layout>
					</div>
				</v-card-text>
			</v-card>
		</v-card-text>
	</v-card>
</template>

<script>
import banner from '@/assets/bannerRegistro.png'

export default {
  name: 'viewProfile',
  data: () => ({
    banner
  })
}
</script>

<style lang="css">
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: left;
  opacity: .9;
  position: absolute;
  width: 100%;
}
</style>
