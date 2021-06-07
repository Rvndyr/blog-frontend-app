<template>
  <div>
    <form v-on:submit.prevent="postUpdate()">
      <h1>New Post</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="post.title" />
      </div>
      <div>
        <label>Body:</label>
        <input type="text" v-model="post.body" />
      </div>
      <div>
        <label>Image Url:</label>
        <input type="text" v-model="post.image_url" />
      </div>
      <button type="submit" value="submit">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      post: {},
      errors: [],
    };
  },
  created: {
    function() {
      this.showPosts();
    },
  },
  methods: {
    showPosts: function () {
      axios.get(`/posts/${this.$route.params.id}`).then((response) => {
        console.log("Show Posts", response.data);
        this.posts = response.data;
      });
    },
    postUpdate: function () {
      axios
        .patch(`/posts/${this.$router.params.id}`, this.post)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/posts");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
