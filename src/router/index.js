import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      isPublic: false,
    },
  },

  {
    path: "/login",
    name: "Login",

    component: () => import("../views/Login.vue"),
    meta: {
      isPublic: true,
    },
  },
  {
    path: "/register",
    name: "Register",

    component: () => import("../views/Register.vue"),
    meta: {
      isPublic: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("userApp");
  if (to.matched.some((record) => !record.meta.isPublic)) {
    if (!token) {
      next({
        path: "/login",
      });
    }
    next();
  }
  next();
});

export default router;