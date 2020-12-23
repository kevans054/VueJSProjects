<template>
    <div id="JokeButton">
        <button id="NewJokes" type="submit" @click="getJoke">New Joke</button>
        
        <p>{{joke}}</p>
        
    </div>
</template>

<script>
    export default {
        name: "JokeButton",
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