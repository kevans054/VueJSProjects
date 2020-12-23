import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    joke: 'Did you hear the one about ...'
  },

  actions: {
    showJoke({ commit }) {
      axios.get('https://geek-jokes.sameerkumar.website/api?format=json/')
        .then(response => {
          commit('SET_Jokes', response.data);
        }).catch(error => {
          console.log(error);
        });
    }
  },

  mutations: {
    SET_Jokes(state, joke) {
      state.joke = joke
    }
  },

  getters: {
    joke: state => {
      return state.joke;
    }
  }
})


