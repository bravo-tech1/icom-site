import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/mobile",
    name: "Mobile",
    component: () => import("../views/Mobile.vue"),
  },
  {
    path: "/web",
    name: "Web",
    component: () => import("../views/Web.vue"),
  },
  {
    path: "/interior",
    name: "Interior",
    component: () => import("../views/Interior.vue"),
  },
  {
    path: "/branding",
    name: "Branding",
    component: () => import("../views/Branding.vue"),
  },
  {
    path: "/social",
    name: "Social",
    component: () => import("../views/Social.vue"),
  },
  {
    path: "/tech-support",
    name: "Support",
    component: () => import("../views/Support.vue"),
  },
  {
    path: "/seo",
    name: "SEO",
    component: () => import("../views/SEO.vue"),
  },
  {
    path: "/blog",
    name: "articles",
    component: () => import("../views/Articles/Articles.vue"),
  },
  {
    path: "/blog/:id",
    name: "view-article",
    component: () => import("../views/Articles/ViewArticle.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
