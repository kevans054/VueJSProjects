<template>
  <div>
    <button @click="toggleView">Toggle View</button>
    <div id="tweets" :class="{ 'list-view': listview }">
      <vue-container
        v-for="(tweet, index) in tweet"
        v-bind:key="index"
        v-bind:myAuthor="tweet.author"
        v-bimd:myDate="tweet.date"
        v-bind:myText="tweet.text"
      >
      </vue-container>
    </div>
  </div>
</template>
<script>

export default {
  name: "vue-container",
  props: 
    ['myAuthor',
    'myDate',
    'myText'],

  data() {
    return {
      listview: false,
      tweet: [
        {
          author: "Karen",
          date: "December 13, 2020",
          text: "Tweet, Tweet, Tweet",
        },
        {
          author: "Karen",
          date: "December 13, 2020",
          text: "Tweeter, Tweeter, Tweeter",
        },
        {
          author: "Karen",
          date: "December 13, 2020",
          text: "Twitter, Twitter, Twitter",
        },
      ],
    };
  },
  methods: {
    toggleView() {
      this.listview = !this.listview;
      alert('toggleview');
    },
  },
};
</script>
<style lang="scss" scoped>
#tweets {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: rgb(156, 157, 233);
  margin-top: 10px;
}
#tweets.list-view {
  grid-template-columns: 1fr;
}

</style>