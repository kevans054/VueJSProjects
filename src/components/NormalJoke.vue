<template>
  <div id="NormalJoke">
      <button id="normal" type="submit" @click="getJoke">New Normal Joke</button>
      </div>  
</template>

<script>
export default {
    name: 'NormalJoke',

    computed: {

        joke() {
            return this.$store.state.joke;
        }
    },
    methods: {
        showJoke() {
            this.$store.commit('showJoke', this.joke);
        }
    }
}
</script>
<style scoped>

</style>