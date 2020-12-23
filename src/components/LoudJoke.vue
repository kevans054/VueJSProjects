<template>
    <div id="LoudJoke">
        <button type="submit" @click="getJokes">New Loud Joke</button>
        </div>
</template>

<script>
export default {
    LoudJoke,

    computed: {

        joke() {
            return this.$store.state.joke.toUpperCase();
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