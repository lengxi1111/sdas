import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/", // 默认hash值路径
    redirect: "/login", // 重定向到/login
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
