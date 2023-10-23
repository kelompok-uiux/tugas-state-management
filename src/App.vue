<template>
  <div id="app">
    <colorcolor></colorcolor>
  </div>
</template>

<script>
  import Colorcolor from './components/Colorcolor.vue'
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      'colorcolor': Colorcolor
    }
  }
</script>
