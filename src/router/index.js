import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Experience from "../views/Experience.vue";
import Blog from "../views/Blog.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/experiences",
    name: "Experience",
    component: Experience,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "experience" */ "../views/Experience.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    // component: () =>
    //   import(/* webpackChunkName: "experience" */ "../views/Experience.vue"),
  },
];

const router = createRouter({
  mode: 'hash',
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
