<template>
<div id="SnakeJoke">
    <button id="snake" type="submit" @click="getJokes">New Snake Joke</button>
    </div>
    
</template>

<script>
export default {
    SnakeJoke,

    computed: {

        joke() {
            let str = this.$store.state.joke;
            return str.replaceAll('', '').toLowerCase();
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