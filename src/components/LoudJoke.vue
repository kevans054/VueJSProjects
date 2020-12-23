<template>
    <div id="LoudJoke">
        <button type="submit" @click="showJoke">New Loud Joke</button>
        </div>
</template>

<script>
export default {
    name: 'LoudJoke',

    computed: {

        joke() {
           return this.$store.getters.getJoke.toUpperCase();
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