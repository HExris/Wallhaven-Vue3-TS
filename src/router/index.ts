import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Layout from "@/Layout/index.vue";
import Home from "@/views/Home/index.vue";
import Latest from "@/views/Latest/index.vue";
import Toplist from "@/views/Toplist/index.vue";
import Random from "@/views/Random/index.vue";
import Upload from "@/views/Upload/index.vue";
import Forums from "@/views/Forums/index.vue";
import SearchResults from "@/views/SearchResults/index.vue";
import Tags from "@/views/Tags/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: "/home",
        name: "Home",
        component: Home
      },
      {
        path: "/search",
        name: "SearchResults",
        component: SearchResults
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
      },
      {
        path: "/tags",
        name: "Tags",
        component: Tags
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
