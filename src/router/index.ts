import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home page",
    },
  },
  {
    path: "/:path(.*)",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "404" */ "@/views/NotFound.vue"),
    meta: {
      title: "Not found4", // <-- Find how to insert :userId into page title
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta!.title}`;
  next();
});

export default router;
