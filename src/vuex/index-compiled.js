import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

var store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: function increment(state) {
      console.log(this);
      state.count++;
    },

    decrement: function decrement(state) {
      return state.count--;
    }
  }
});

export default store;

//# sourceMappingURL=index-compiled.js.map