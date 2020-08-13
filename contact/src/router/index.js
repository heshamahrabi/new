import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Help from "../views/Help.vue"
import About from "../views/About.vue";
import ContactVue from "../views/contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },

  {
    path: "/help",
    name: "help",

    component: Help
  },

  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactVue
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
