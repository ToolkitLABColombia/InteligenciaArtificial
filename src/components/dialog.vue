<template>
  <div>
		<v-dialog v-model="addWord" max-width="500px" persistent>
			<v-card>
				<v-card-title class="headline">Agregar Palabra</v-card-title>
				<v-card-text>
					<v-text-field @keyup.enter="addWordInArray()" label="Palabra a agregar" v-model="word"
					placeholder color="accent" :persistent-hint="true"></v-text-field>
				</v-card-text>
				<v-card-actions>
					<v-btn color="primary" flat @click="closeDialog()">Cerrar</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
  </div>
</template>

<script>
import EventBus from '@/components/EventBus'

export default {
  name: 'dialogo',
  data: () => ({
    word: ''
  }),
  methods: {
    addWordInArray () {
      if (this.word !== '') {
        this.$store.commit('app/addWord', this.word)
        this.word = ''
      } else {
        this.closeDialog()
      }
    },
    closeDialog () {
      EventBus.$emit('addWord', false)
      this.word = ''
    }
  },
  props: [ 'addWord' ]
}
</script>

<style lang="css">
</style>
