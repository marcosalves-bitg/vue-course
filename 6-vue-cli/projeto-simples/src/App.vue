<template>
  <div id='app'>
    {{ titulo }}
    <button @click="titulo += '#'">alterar</button>
  </div>
  
</template>

<script>
  export default {
    data: function() {
      return {
        titulo: 'Olá Mundo Vue'
      }
    }
  }
</script>

<style>
  #app {
    background-color: #543764;
    color: #fff
  }
</style>