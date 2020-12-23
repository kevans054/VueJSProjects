<template>
<div id="SnakeJoke">
    <button id="snake" type="submit" @click="showJoke">New Snake Joke</button>
    </div>
    
</template>

<script>
export default {
    name: 'SnakeJoke',

    computed: {

        joke() {
            return this.$store.getters.getJoke.toLowerCase();
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