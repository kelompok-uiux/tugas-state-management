<template>
  <div>
    <div class="color-box green"
      v-on:click="changeColor" 
    >
    </div>
      <div class="color-box blue"
      v-on:click="changeColortoBlue"
      :style="{backgroundColor: color}"
      >  
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
      },
      changeColortoBlue: function(){
        this.$store.dispatch('changeColortoBlue');
      }
      
    }
  }
</script>


<style>
  .color-box {
    width: 100px;
    height: 100px;
    display: inline-block;
    margin: 10px;
  }

  .green {
    background-color: green;
  }

  .blue {
    background-color: blue;
  }

  .red {
    background-color: red;
  }
</style>