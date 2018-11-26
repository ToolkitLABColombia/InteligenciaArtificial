<template>
  <v-container fluid>
  
    <div
      id="e3"
      style="max-width: 600px; margin: auto;"
      class="grey lighten-3"
    >
      <v-toolbar
        color="primary"
        dark
      >
        <v-toolbar-title>Quienes Somos</v-toolbar-title>
      </v-toolbar>

      <v-card>
        <v-container
          fluid
          grid-list-lg
        >
          <v-layout row>
            <v-flex xs12 class="centrado">
              <v-avatar
                :size="100"
              >
                <v-img :src="logoToolkit" alt="Logo de Toolkit IA"></v-img>
              </v-avatar>
              <h1>Toolkit AI</h1>
            </v-flex>
          </v-layout>

          <v-layout row>
            <v-flex>
              <v-card color="info">
                <v-card-title primary-title>
                  <v-layout column centered>
                    <div class="headline">Centro de Innovación Digital</div>
                  </v-layout>
                </v-card-title>
              </v-card>
            </v-flex>

          </v-layout>
        </v-container>
      </v-card>
    </div>    
  </v-container>
</template>

<script>
import logoToolkit from '@/assets/logoToolkit.svg'

export default {
  data () {
    return {
      logoToolkit
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.centrado {
  text-align: center;
}
</style>
