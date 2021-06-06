import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Data from "../views/Data.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import PostsIndex from "../views/PostsIndex.vue";
import PostsNew from "../views/PostNew.vue";
import PostsShow from "../views/PostsShow.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/data",
    name: "Data",
    component: Data,
  },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/Posts", name: "Posts-Index", component: PostsIndex },
  { path: "/Posts/new", name: "Posts-New", component: PostsNew },
  { path: "/Posts/:id", name: "Posts-Show", component: PostsShow },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
