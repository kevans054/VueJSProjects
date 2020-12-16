<template>
    <div id="app">
        <vue-tweets></vue-tweets>
        <vue-container></vue-container>
    </div>
</template>
<script>
import VueTweets from "./components/Tweets.vue";
import VueContainer from "./components/Container.vue";
export default {
    name: "App",
    components: {
        VueTweets,
        VueContainer,
    },
    data() {
        return {
            switchState: true,
        };
    },
};
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

