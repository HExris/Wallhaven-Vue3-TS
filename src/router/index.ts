import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Layout from "@/Layout/index.vue";
import Home from "@/views/Home/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
