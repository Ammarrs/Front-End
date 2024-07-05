<template>
  <products />
</template>

<script>
import products from './components/Products.vue'

export default {
  name: 'App',
  components: {
    products,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background: #E6B9A6; */
  /* margin-top: 60px; */
}
</style>
