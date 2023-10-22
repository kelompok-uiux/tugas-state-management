<template>

  <div>
    <button class="button-1" role="button"
      v-on:click="changeColor" 
      >  Color Switcher
    </button>
<!--     :style="color" -->

        <div className="flex mt-14">
          <div className='flex-1 w-64 '
    
          >
            Color  nih bos
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
      this.$store.dispatch('changeColor');
    }
  }
}

</script>