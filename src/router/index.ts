import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Layout from "@/Layout/index.vue";
import Home from "@/views/Home/index.vue";
import Latest from "@/views/Latest/index.vue";
import Toplist from "@/views/Toplist/index.vue";
import Random from "@/views/Random/index.vue";
import Upload from "@/views/Upload/index.vue";
import Forums from "@/views/Forums/index.vue";

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
      },
      {
        path: "/latest",
        name: "Latest",
        component: Latest
      },
      {
        path: "/Toplist",
        name: "Toplist",
        component: Toplist
      },
      {
        path: "/random",
        name: "Random",
        component: Random
      },
      {
        path: "/upload",
        name: "Upload",
        component: Upload
      },
      {
        path: "/forums",
        name: "Forums",
        component: Forums
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
