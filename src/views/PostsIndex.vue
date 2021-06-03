<template>
  <div class="PostsIndex">
    <div v-for="post in posts" v-bind:key="post.id">{{ posts }}</div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      posts: [],
    };
  },
  created: function () {
    this.indexPosts();
  },
  methods: {
    indexPosts: function () {
      axios.get("http://localhost:3000/posts").then((response) => {
        console.log("Index Posts", response.data);
        this.posts = response.data;
      });
    },
  },
};
</script>
