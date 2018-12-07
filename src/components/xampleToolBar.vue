<template>
  <div id="app">
  <v-app id="inspire">
    <v-navigation-drawer :mini-variant.sync="mini" v-model="drawer" hide-overlay stateless dark>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>

            <!-- <v-list-tile-avatar> -->
              <v-btn icon @click.stop="mini = !mini">
              <v-icon color="white">menu</v-icon>
            </v-btn>
            <!-- </v-list-tile-avatar> -->

            <!-- <v-spacer></v-spacer> -->
            <v-list-tile-action v-for="(item, key, index) in this.$store.state.app.application.usingCM.steps" :key="key">
              <v-list-tile-content class="ml-4">
              <v-btn icon>
                <v-icon :color="item.active">{{item.icon}}</v-icon>
              </v-btn>
            </v-list-tile-content>
            </v-list-tile-action>

            <!-- <v-spacer></v-spacer>
            <v-spacer></v-spacer> -->
            <!-- <v-list-tile-action>
              <v-btn icon @click.stop="mini = !mini">
                <v-icon icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action> -->


          </v-list-tile>
        </v-list>
      </v-toolbar>
      <div class="py-5 pt-1">

        <v-list-tile>
          <v-timeline dark dense>
            <v-timeline-item class="neon" v-for="(el, i) in steps" :color="el.color" :icon="el.icon" :key="i">
              <!-- <span></span> -->
              <v-list-tile-content>
                <v-list-tile-title @click="routeTo(el.to)" :class="`${el.color}--text px-1`" :style="`text-shadow: ${el.shadow};`" >{{el.text}}</v-list-tile-title>
              </v-list-tile-content>
            </v-timeline-item>
          </v-timeline>
        </v-list-tile>
      </div>


    </v-navigation-drawer>
  </v-app>
</div>
</template>

<script>
  export default {
    name: 'xample',
    data () {
      return {
        init: 'C',
        drawer: true,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        mini: true,
        right: null
      }
    },
    computed: {
      steps () {
        return this.$store.state.app.application.usingCM.steps[this.init].data
      }
    }
  }
</script>
