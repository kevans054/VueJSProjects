<template>
    <div id="JokeButton">
        <button id="NewJokes" type="submit" @click="getJoke">New Joke</button>
        
        <p>{{joke}}</p>
        <!-- <loud-joke></loud-joke>
        <snake-joke></snake-joke>
        <normal-joke></normal-joke> -->
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    
    // import NormalJoke from './NormalJoke.vue'
    // import SnakeJoke from './SnakeJoke.vue'
    // import LoudJoke from './LoudJoke.vue'

    export default {
        name: "JokeButton",
        // data() {
        //     return{
        //         jokes: ''
        //     };
        // },
        // components: {
        //     LoudJoke,
        //     SnakeJoke,
        //     NormalJoke
        // },

        computed: mapState([
        'joke'
        ]),
        
            mounted() {
                
                this.$store.dispatch('SET_Joke')
            },
        methods:{
            getJoke()
            {
                this.$store.commit("getJoke");
                // console.log(jokes);
                return this.$store.state.jokes;
                
            }
        },

        
    }

</script>
                
<style scoped>
</style>