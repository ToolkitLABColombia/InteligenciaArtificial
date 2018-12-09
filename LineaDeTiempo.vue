<template>
  <v-container grid-list-xl>
    <v-layout row wrap align-center>
      <v-navigation-drawer absolute overflow temporary :mini-variant.sync="mini" v-model="drawer" hide-overlay stateless dark>
        <v-toolbar flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile avatar>
              <v-btn icon @click.stop="mini = !mini">
                <v-icon color="white">menu</v-icon>
              </v-btn>
              <v-list-tile-action v-for="(item, key, index) in this.$store.state.app.application.usingCM.steps" :key="key">
                <v-list-tile-content class="ml-4">
                  <v-btn icon @click="changeStep(key, index)">
                    <v-icon :color="item.active">{{item.icon}}</v-icon>
                  </v-btn>
                </v-list-tile-content>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-toolbar>
        <div class="py-5">
          <v-list-tile class="py-5">
            <v-timeline dark dense>
              <v-timeline-item class="neon" v-for="(el, i) in steps" :color="el.color" :icon="el.icon" :key="i">
                <v-list-tile @click="routeTo(el.to)" :class="`${el.color}--text`" :style="`text-shadow: ${el.shadow};`" >{{el.text}}</v-list-tile>
              </v-timeline-item>
            </v-timeline>
          </v-list-tile>
        </div>
      </v-navigation-drawer>
      <v-flex xs12 sm12 md12 align-self-center>
        <router-view/>
        <router-view name="PrepararDatos"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import toolbar from '@/components/toolBar'
export default {
  data: () => ({
    init: 'C',
    drawer: true,
    mini: true,
    right: null
  }),
  computed: {
    steps () {
      return this.$store.state.app.application.usingCM.steps[this.init].data
    }
  },
  methods: {
    changeStep (key, index) {
      this.$store.commit('app/changeStep', key)
      this.init = key
    },
    routeTo (to) {
      this.$router.push(to)
    }
  },
  components: { toolbar }
}
</script>
<style>
  .neon {
    font-size: 18px;
    cursor: pointer
  }
  .neon:hover {
    text-shadow: 0px 0px 40px;
    font-size: 20px;
    font-weight: bold;
    -webkit-transition: font-weight .25s;
    transition: font-weight .25s;
  }
</style>
