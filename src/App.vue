<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link to="/posts">Posts</router-link>
      |
      <router-link to="/data">Data</router-link>
      |
      <router-link to="/signup">Signup</router-link>
      |
      <router-link to="/login">Login</router-link>
      |
      <router-link to="/logout">Logout</router-link>
      |
      <router-link to="/posts/new">New Post</router-link> -->
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/posts">Posts</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/data">Data</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/signup">Signup</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/logout">Logout</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/posts/new">New Post</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style></style>
