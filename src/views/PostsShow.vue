<template>
  <div class="showPosts">
    <div>{{ posts }}</div>
    <div>
      <a v-bind:href="`/posts/${posts.id}/edit`">Edit</a>
    </div>
    <div>
      <a href="/posts">Back to all posts</a>
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
    this.showPosts();
  },
  methods: {
    showPosts: function () {
      axios.get(`http://localhost:3000/posts/${this.$route.params.id}`).then((response) => {
        console.log("Show Posts", response.data);
        this.posts = response.data;
      });
    },
  },
};
</script>
