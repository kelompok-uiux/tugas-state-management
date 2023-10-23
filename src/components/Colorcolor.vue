<template>
  <div>
    <button class="button-1" role="button"
      v-on:click="changeColor" 
      >  Color Switcher
    </button>
    <div>
      <div id="kotakmerah"
      v-on:click="changeColor"
      :style="{backgroundColor: colorDivBlue === '#FF0000'? colorDivBlue : color} "
      >
        Color  
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      color(){
        return this.$store.getters.getColor;
      },

    },
    methods: {
      changeColor: function(){
        console.log("this: ", this)
      
        this.$store.dispatch('changeColor');
      }
      
    }
  }
</script>


<style>
  #kotakmerah {
    width: 300px;
    padding: 50px;
    margin: 20px;
  }
</style>