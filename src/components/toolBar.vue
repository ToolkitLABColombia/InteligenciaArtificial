<template>
	<div>
		<v-navigation-drawer :right="right" absolute overflow temporary v-model="drawer" class='mt-5' style='top: 16px;'>
			<v-list>
				<v-list-tile v-for="item in this.$store.state.app.application.toolBarItems" :key="item.title" :to="item.link">
					<v-list-tile-action>
						<v-icon color="black">{{ item.icon }}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content color="black">{{ item.title }}</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
		<v-toolbar dark color="black">
			<v-toolbar-title>
				<router-link to="/" tag="span" style="cursor: pointer">
					<img src="../assets/logoToolkitCompleto.png" width="150px" height="45px">
				</router-link>
			</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items class="hidden-xs-only">
				<v-btn flat v-for="item in this.$store.state.app.application.toolBarItems" v-if="$store.state.app.application.user.authenticated === true && item.title === 'Perfil' || item.title !== 'Perfil' && $store.state.app.application.user.authenticated !== true" :key="item.title" :to="item.link">
					<v-icon left>{{ item.icon }}</v-icon>
					<span>{{ item.title }}</span>
				</v-btn>
			</v-toolbar-items>
			<v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-toolbar-side-icon>
		</v-toolbar>
	</div>
</template>

<script>
export default {
  name: 'toolbar',
  data () {
    return {
      sideNav: false,
      drawer: false,
      right: true,
      clipped: true,
      menuItems: [
        { icon: 'exit_to_app', title: 'Ingresar', link: '/login' },
        { icon: 'how_to_reg', title: 'Registro', link: '/registro' }
        // { icon: 'person', title: 'Perfil', link: '/xample' }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
