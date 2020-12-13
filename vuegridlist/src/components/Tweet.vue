<template>
  <vue-tweet>
      <article class="tweets">
        <vue-container>
        <h4>{{ myAuthor }}</h4>
        <h6>{{ myDate }}</h6>
        <p>{{ myText }}</p>
        </vue-container>
        </article>
      </vue-tweet>
</template>
<script>
import VueContainer from "./Container.vue"
export default {
  name: "vue-tweet",
  components: {
    VueContainer
  } 
}

</script>
<style lang="scss" scoped>
.tweets {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background-color: rgb(156, 157, 233);
  margin-top: 10px;
}
h4 {
  background-color: plum;
  font-size: 30px;
}
h6 {
  background: green;
  font-size: 30px;
}
p {
  font-size: 30px;
}
</style>