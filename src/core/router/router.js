import { createRouter, createWebHistory } from "vue-router";
import WelcomePage from "@/features/welcome/pages/_WelcomePage.vue";

const routes = [
  {
    path: "/",
    component: WelcomePage,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
