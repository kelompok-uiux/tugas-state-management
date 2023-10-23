import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    color:  "#87CEFA	",
    colorDivBlue: "#87CEFA"
  },
  getters: {
    getColor: (state) => {
      return state.color
    },
    colorDivBlue: (state) => {
      return state.colorDivBlue
    }

  },
  mutations: {
    changeColor: (state) => {
      if (state.color=== '#87CEFA	' ){
        state.color = '#FF0000'
        state.colorDivBlue = '#FF0000'
        console.log(state.colorDivBlue)
      }
      if (state.colorDivBlue === "#FF0000"){
        state.colorDivBlue = '#87CEFA'
      }
      // else{
      //   state.color = "#87CEFA	"
      // }
      console.log("warna: ",state.color)
    }
  },
  actions: {
    changeColor: (context) => {
      context.commit('changeColor');
    }

  }
});