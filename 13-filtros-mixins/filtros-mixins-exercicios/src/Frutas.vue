<template>
  <div>
      <ul>
          <li v-for="fruta, i in frutas" :key="i">{{ fruta }}</li>
      </ul>
      <input type="text" v-model="fruta" @keydown.enter="add">
  </div>
</template>

<script>
import frutasMixin from '@/frutasMixin'
import usuarioMixin from '@/usuarioMixin'

export default {
    mixins: [
		frutasMixin, 
        usuarioMixin
	],
    created() {
        console.log('Criado em Frutas.vue')
    }
}
</script>

<style>

</style>