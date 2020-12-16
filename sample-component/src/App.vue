<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png"/>
        <todo-list 
        :items="itemList" 
        v-on:add="doAddItem"
        v-on:clear="doClearItems">
        </todo-list>
    </div>
</template>

<script>
import TodoList from "./components/Todolist.vue"

export default {
    name: "App",
    components: {
        TodoList
    },
    data () {

        return {
                
                itemList: [
                "Captain Crunch",
                "Frosted Flakes",
                "Coffee",
                "French Vanilla Creamer",
            ],
        }
    },
    methods: {
      doAddItem(item) {
        this.itemList.splice(0, 0, item);
      },
    doClearItems() {
        this.itemList = [];
    }
}
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
