import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    joke: ''
  },
  getters: {
    joke: state => {
      return state.joke;
    }
  },
  mutations: {
    SET_Joke(state, joke) {
      state.joke = joke
    }
  },
  actions: {
    getJoke({ commit }) {
      axios
        .get('https://geek-jokes.sameerkumar.website/api?format=json/', {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        .then(response => response.data)
        .then(joke => {
          console.log(joke);
          commit('SET_Joke', joke)
        })

        .catch((error) => {
          console.log(error);
          this.errorMessage = error;
        })
    }
  },
});


