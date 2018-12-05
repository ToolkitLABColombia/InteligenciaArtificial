<template>
  <v-layout row wrap>
    <v-flex xs6 sm6 md3>
      <v-card color="black" height="553px">
        <v-card-title class="py-0">
          <v-container fill-height fluid>
            <v-layout row wrap>
              <v-flex column xs4 sm2 md4 align-end flexbox v-for="(item, key, index) in this.$store.state.app.application.usingCM.steps" :key="key">
                <v-icon :color="item.active" @click="changeStep(key)">{{item.icon}}</v-icon>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-title>
        <v-timeline dark dense>
          <v-timeline-item class="neon" v-for="(el, i) in steps" :color="el.color" small :icon="el.icon" :key="i">
            <span @click="routeTo(el.to)" :class="`${el.color}--text px-1`" :style="`text-shadow: ${el.shadow};`">{{el.text}}</span>
          </v-timeline-item>
        </v-timeline>
      </v-card>
    </v-flex>
    <v-flex xs6 sm6 md8>
      <router-view/>
      <router-view name="PrepararDatos"/>
    </v-flex>
    <!-- <v-flex sm2 md2 class="hidden-xs-only">
      y aca otra
    </v-flex> -->
  </v-layout>
</template>

<script>
import toolbar from '@/components/toolBar'
export default {
  data: () => ({
    init: 'C'
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
    font-size: 14px;
    cursor: pointer
  }
  .neon:hover {
    text-shadow: 0px 0px 40px;
    font-size: 15px;
    font-weight: bold;
    -webkit-transition: font-weight .25s;
    transition: font-weight .25s;
  }
</style>
