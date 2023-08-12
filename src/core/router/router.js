import { createRouter, createWebHistory } from "vue-router";
import AppWelcomePage from "@/features/welcome/pages/AppWelcomePage.vue";

const routes = [
  {
    path: "/",
    component: AppWelcomePage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
