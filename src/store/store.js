import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    color: "#0000ff	",
    colorDivBlue: "#0000ff",
  },
  getters: {
    getColor: (state) => {
      return state.color;
    },
    colorDivBlue: (state) => {
      return state.colorDivBlue;
    },
  },
  mutations: {
    changeColor: (state) => {

      if (state.color=== '#0000ff	' ){
        state.color = '#FF0000'
        console.log("atas: ",state.colorDivBlue)
      }
    },
    changeColortoBlue: (state) => {
      if (state.color == '#FF0000'){
        state.color = '#0000ff	'
        console.log("changeColortoBlue", state.color )
      }
    }
  },
  actions: {
    changeColor: (context) => {
      context.commit("changeColor");
    },
    changeColortoBlue: (context) => {
      context.commit("changeColortoBlue");
    }
  },
});
