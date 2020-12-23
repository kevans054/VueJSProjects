<template>
    <div id="JokeButton">
        <button id="NewJokes" type="submit" @click="getJoke">New Joke</button>
        <p>{{joke}}</p>
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
        data() {
            return{
                joke: ''
            }
        },
      
        methods:{
            getJoke()
            {
                this.$store.commit('showJoke', '');
                this.$store.dispatch.getJoke;
                
            }
        }
    }

</script>
                
<style scoped>
</style>