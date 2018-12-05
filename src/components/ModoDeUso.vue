<template>
  <div>
    <toolbar/>
    <v-container grid-list-md fill-height>
      <v-layout row align-center>
        <v-flex xs6 md6 v-for="(mode, index) in this.$store.state.app.application.modes" :key="index" offset-md0>
          <v-flex row class="text-xs-center">
            <v-avatar slot="activator" size="200px">
              <img :src="mode.img">
            </v-avatar>
          </v-flex>
          <v-flex row>
            <span style="font-size: 24px">{{mode.text}}</span>
          </v-flex>
          <v-flex row>
            <router-link to=""><a class="error--text" style="font-style: italic; font-size: 24px">Haz click aqui</a></router-link to="">
          </v-flex>
          <v-flex row>
            <v-btn block to="/demo" large outline color="black" style="font-size: 28px">{{mode.textButton}}</v-btn>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import logoToolkit from '@/assets/logoToolkit.svg'
import colors from 'vuetify/es5/util/colors'
import toolbar from '@/components/toolBar'

export default {
  data () {
    return {
      logoToolkit,
      colors
    }
  },
  components: { toolbar }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centrado {
  align-self: center
}
</style>
