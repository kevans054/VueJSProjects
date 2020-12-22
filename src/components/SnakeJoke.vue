<template>
<div id="SnakeJoke">
    <button id="snake" type="submit" @click="getJokes">New Snake Joke</button>
    </div>
    
</template>

<script>
export default {
    SnakeJoke,

    // computed: {

    //     joke() {
    //         return this.$store.state.joke;
    //     }
    // },
    // methods: {
    //     showJoke() {
    //         this.$store.commit('showJoke', this.joke);
    //     }
    // }
}
</script>
<style scoped>

</style>