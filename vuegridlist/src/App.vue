<template>
  <div id="app">
    <vue-tweet></vue-tweet>
  </div>
</template>
<script>
import VueTweet from './components/Tweet.vue'
export default {
  name: 'App',
  components: {
    VueTweet
    }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

