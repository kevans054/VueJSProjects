<template>
    <div id="JokeButton">
        <button id="NewJokes" type="submit" @click="showJoke">New Joke</button>
        <p>{{this.joke}}</p>
        <normal-joke></normal-joke>
        <loud-joke></loud-joke>
        <snake-joke></snake-joke>
        
    </div>
</template>

<script>
    import NormalJoke from './NormalJoke.vue';
    import LoudJoke from './LoudJoke.vue';
    import SnakeJoke from './SnakeJoke.vue';
    export default {
        name: "JokeButton",
        components: {
            NormalJoke ,
            LoudJoke,
            SnakeJoke,
        },
        computed: {
            joke() {
                return this.$store.getters.getJoke;
            }
        },
      
        methods:{
            showJoke()
            {
                this.$store.dispatch('showJoke');
            }
        }
    }

</script>
                
<style scoped>
</style>