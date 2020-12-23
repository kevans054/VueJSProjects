<template>
  <div id="NormalJoke">
      <button id="normal" type="submit" @click='showJoke'>New Normal Joke</button>
      </div>  
</template>

<script>
export default {
    name: 'NormalJoke',

    computed: {
        joke() {
            return this.$store.getters.getJoke;
        }
    },
    methods: {
        showJoke() {
            this.$store.commit('SET_Joke', this.joke);
        }
    }
}
</script>
<style scoped>

</style>