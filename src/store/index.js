import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    joke: '',
  },
  getters: {
    getJoke (state) {
      return state.joke;
    }
  },

  actions: {
    showJoke(context) {
      axios
      .request({
        type: "get",
        url: " https://geek-jokes.sameerkumar.website/api?format=json",
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          format: "text",
        },
      })
      .then((response) => {
        context.commit("SET_Joke", response.data.joke);
      })
      .catch((error) => {
        this.errorMessage = error;
        console.log(error);
      });
  },
},

  mutations: {
    SET_Joke(state, payload) {
      state.joke = payload;
    }
  },

 
})


