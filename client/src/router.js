import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/work",
      name: "work",
      component: () => import("./views/Work.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("./views/Contact.vue")
    },
    {
      path: "/services",
      name: "services",
      component: () => import("./views/Services.vue")
    }
  ],
  mode: "history",
  linkActiveClass: "is-active"
});
