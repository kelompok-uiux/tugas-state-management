<template>

  <div>
    <button class="button-1" role="button"
      v-on:click="changeColor" 
      >  Color Switcher
    </button>
<!--     :style="color" -->

        <div className="flex mt-20"  >
          <div className='flex-1 w-64 ' id="kotakmerah"
          :style="{backgroundColor: color} "
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
    }
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