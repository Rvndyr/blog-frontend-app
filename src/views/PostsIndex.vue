<template>
  <div class="PostsIndex">
    <div v-for="post in posts" v-bind:key="post.id">
      <h2>{{ post.title }}</h2>
      <h4>{{ post.body }}</h4>
      <a v-bind:href="`/posts/${post.id}`">more info</a>
    </div>
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
      axios.get("/posts").then((response) => {
        console.log("Index Posts", response.data);
        this.posts = response.data;
      });
    },
  },
};
</script>
