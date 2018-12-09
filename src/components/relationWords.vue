<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12 sm12 md12>
				<v-dialog v-model="addWord" max-width="500px" persistent>
					<v-card>
						<v-card-title class="headline">Agregar Categoria</v-card-title>
						<v-card-text>
							<v-text-field @keyup.enter="addWordInArray()" label="Palabra a agregar" v-model="word"
							placeholder color="accent" :persistent-hint="true"></v-text-field>
						</v-card-text>
						<v-card-actions>
							<v-btn color="primary" flat @click="closeDialog()">Cerrar</v-btn>
						</v-card-actions>
					</v-card>
				</v-dialog>

				<v-card>
					<v-toolbar card color="grey lighten-3">
						<v-flex xs12 sm4 md3 class="text-xs-center">
							<v-toolbar-title>Temas</v-toolbar-title>
						</v-flex>
						<v-flex xs12 sm4 md3 class="text-xs-center">
							<v-toolbar-title>Categorias</v-toolbar-title>
						</v-flex>
						<v-flex xs12 sm4 md6 class="text-xs-center">
							<v-toolbar-title>Palabras</v-toolbar-title>
						</v-flex>
					</v-toolbar>

					<v-layout>
						<v-flex xs12 sm4 md3>
							<v-card-text>
								<v-list v-for="(value, index) in this.$store.state.app.relaciones" :key="index">
									<v-list-tile class="activo">{{value.palabraClave}}<v-btn class="activo" icon @click="showChild(index), child = index, category = ''"><v-icon>keyboard_arrow_right</v-icon></v-btn></v-list-tile>
								</v-list>
							</v-card-text>
						</v-flex>

						<v-divider vertical></v-divider>

						<v-flex xs12 sm4 md3>
							<div class="pr-1">
								<v-btn small fixed dark fab right bottom color="info" @click="addWord = !addWord"><v-icon>add</v-icon></v-btn>
							</div>

							<v-card-text v-if="child !== '' && this.$store.state.app.relaciones[this.child].temasDeInteres.length !== 0">
								<v-chip v-for="(value, index) in this.$store.state.app.relaciones[this.child].temasDeInteres" :key="index" color="grey" dark small @click="relation(index)">
									<span class="pr-2" style="font-size: 20px; font-weight: bold">#</span>{{value.temaDeInteres}}
								</v-chip>
							</v-card-text>
						</v-flex>

						<v-divider vertical></v-divider>

						<v-flex xs12 sm4 md6>
							<v-card-text>
								<div key="title" v-if="category === ''" class="title font-weight-light grey--text pa-3 text-xs-center">Selecciona las palabras a relacionar con la categoria</div>
								<div v-else>
									<v-scroll-x-transition group hide-on-leave>
										<v-chip color="grey" dark small v-for="(value, i) in commonElements" :key="i" @click="asignWord(value.word)">{{value.word}}<v-icon v-if="value.val">check_circle</v-icon>
										</v-chip>
									</v-scroll-x-transition>
								</div>
						</v-card-text>
					</v-flex>
				</v-layout>
			</v-card>
			<div class="text-xs-center">
				<v-btn @click="sendWords()">Enviar Relaciones</v-btn>
			</div>
		</v-flex>
	</v-layout>
</v-container>
</template>

<script>
import EventBus from '@/components/EventBus'

export default {
  name: 'relationWords',
  data: () => ({
    child: '',
    child2: '',
    addWord: false,
    word: '',
    category: '',
    category2: '',
    url: 'http://192.168.1.10:3000'
  }),
  methods: {
    showChild (index) {
      // console.log(index)
      this.child = index
      // this.child2 = index
    },
    addWordInArray () {
      // console.log(this.word)
      if (this.child !== '') {
        if (this.word !== '') {
          // this.child2 = this.child
          this.$store.commit('app/addCategory', { word: this.word, child: this.child })
          this.word = ''
          // this.child = ''
        } else {
          alert('Por favor ingresa una palabra.')
        }
      } else {
        alert('Por favor selecciona un tema.')
      }
    },
    closeDialog () {
      this.addWord = false
      this.word = ''
    },
    relation (index) {
      // console.log(index)
      this.category = index
    },
    asignWord (word) {
      if (this.category !== '') {
      //   this.category2 = this.category
        this.$store.commit('app/asignWord', { word: word, child: this.child, category: this.category })
        // this.category = ''
      } else {
        alert('Por favor selecciona una categoria.')
      }
    },
    sendWords () {
      EventBus.$emit('loading', true)
      this.$store.dispatch('app/relationedWords', this.url)
    }
  },
  computed: {
    getChild () {
      // return this.$store.state.app.relaciones[this.child]
    },
    commonElements () {
      let array = []
      // console.log(this.$store.state.app.relaciones[this.child].temasDeInteres[this.category].palabrasRelevantes)
      this.$store.state.app.contexto.palabrasCandidatas.map(word => {
        let index = this.$store.state.app.relaciones[this.child].temasDeInteres[this.category].palabrasRelevantes.indexOf(word)
        if (index !== -1) {
          array.push({ word: word, val: true })
        } else {
          array.push({ word: word, val: false })
        }
      })
      // console.log(array)
      return array
    }
  },
  components: { EventBus }
}
</script>

<style lang="css">
.activo:hover {
	color: orange;
	font-weight: bold;
	-webkit-transition: .01s;
	transition: .01s;
}
</style>
