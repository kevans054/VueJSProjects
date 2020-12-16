<template>
  <div>
    <button class="button is-success" @click="toggleView">Toggle View</button>
    <div id="tweets" :class="{ 'list-view': listview }">
      <article
        class="tweet"
        v-for="(tweet, index) in tweets"
        v-bind:key="index"
      >
        <h4>{{ tweet.author }}</h4>
        <h6>{{ tweet.date }}</h6>
        <p>{{ tweet.text }}</p>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  name: "vue-tweets",
  data() {
    return {
      listview: false,
      tweets: [
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
    },
  },
};
</script>
<style lang="scss" scoped>
#tweets {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  padding: 10px;
  // background-color: rgb(156, 157, 233);
  margin-top: 10px;
}
#tweets.list-view {
  grid-template-columns: 1fr;
}
h4 {
  background-color: plum;
  // font-size: 30px;
}
h6 {
  background: green;
  // font-size: 30px;
}
p {
  // font-size: 30px;
}

@media only screen and (min-width: 991px) {
  #tweets {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>