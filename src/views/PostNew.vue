<template>
  <div>
    <form v-on:submit.prevent="submit()">
      <h1>New Post</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="createPost.title" />
      </div>
      <div>
        <label>Body:</label>
        <input type="text" v-model="createPost.body" />
      </div>
      <div>
        <label>Image Url:</label>
        <input type="text" v-model="createPost.image_url" />
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
      createPost: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        title: this.createPost.title,
        body: this.createPost.body,
        image_url: this.createPost.image_url,
      };
      axios
        .post("/posts", params)
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
