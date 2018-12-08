<template>
  <div>
		<toolbar/>
		<v-container>
			<v-layout row wrap>
		    <v-flex xs12 sm8 md8 offset-sm2>
          <viewProfile v-if="!edit"/>
          <input type="file" style="display: none" @change="updatingImg" ref="loadImg">
          <editProfile v-if="edit" v-on:done="done"/>
          <v-layout v-if="!edit">
            <v-speed-dial v-model="fab" :top="top" :bottom="bottom" :open-on-hover="hover" :transition="transition">
              <v-btn slot="activator" v-model="fab" color="primary" dark fab>
                <v-icon>account_circle</v-icon>
                <v-icon>close</v-icon>
              </v-btn>
              <v-btn fab dark small color="accent" @click="edit = !edit, fab = !fab">
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn fab dark small color="error" @click="">
                <v-icon @click="loadImg">add_a_photo</v-icon>
              </v-btn>
            </v-speed-dial>
          </v-layout>
		    </v-flex>
	  	</v-layout>
		</v-container>
  </div>
</template>

<script>
import toolbar from '@/components/toolBar'
import editProfile from '@/components/editProfile'
import viewProfile from '@/components/viewProfile'
import { storage } from '../main'

export default {
  name: 'profile',
  mounted () {
    if (!this.$store.state.app.application.authenticated) {
      this.$router.push('/login')
    }
  },
  data: () => ({
    img: null,
    file: null,
    blob: null,
    hover: true,
    edit: false,
    fab: false,
    top: false,
    bottom: true,
    estado: null,
    subidaValor: 0,
    foto: null,
    transition: 'slide-y-reverse-transition'
  }),
  methods: {
    done () {
      this.edit = !this.edit
    },
    loadImg () {
      this.$refs.loadImg.click()
    },
    updatingImg (event) {
      let file = event.target.files[0]
      let imgR = new Blob([file], { type: 'image/jpeg' })
      let upload = storage.ref(this.$store.state.app.application.user.email).child('photo')
      upload.put(imgR)
      this.$store.dispatch('app/updatePhoto', upload)
    }
  },
  components: { toolbar, editProfile, viewProfile }
}
</script>
