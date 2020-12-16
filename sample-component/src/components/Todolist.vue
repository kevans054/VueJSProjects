<template>
    <div>
        <h1 v-html="title"></h1>
        <input type="text" v-model="newItem" @keypress.enter="addItem" />

        <ul>
            <li v-if="newItem" newItem>{{ newItem }}</li>
            <li
                v-for="(item, index) in items"
                @click="removeItem(index)"
                v-bind:class="['item', { even: isEven(index) }]"
                v-bind:key="index"
            >
                <input v-bind:name="'item[${index}'" type="checkbox" />
                <strong v-if="item == 'Coffee'">{{ item }}</strong>
                <em v-else-if="item == 'Frosted Flakes'">{{ item }}</em>
                <span v-else>{{ item }}</span>
            </li>
        </ul>
        <h4>You have {{ itemCount }} items to complete.</h4>
        <button @click="clearItems">Clear Items</button>
    </div>
</template>

<script>
export default {
    name: "TodoList",
    props: {
        items: Array,
    },
    data() {
        return {
            title: "<em>My Grocery List</em>",
            newItem: "",
        };
    },

    computed: {
        itemCount() {
            return this.items.length;
        },
    },

    methods: {
        addItem() {
            this.$emit('add', this.newItem);
            this.newItem = "";
        },

        clearItems() {
            this.$emit('clear');
        },

        isEven(n) {
            if ((n + 2) % 2 == 0) {
                return true;
            }
            return false;
        },

        removeItem(index) {
            console.log("Target", index);
            this.items.splice(index, 1);
        },
    },
};
</script>

<style scoped>
.even {
    background-color: rgb(243, 143, 143);
}
</style>