import { createRouter, createWebHistory } from "vue-router";
import AppWelcomePage from "@/features/welcome/pages/AppWelcomePage.vue";
import AppLoginPage from "@/features/login/pages/AppLoginPage.vue";

const routes = [
  {
    path: "/",
    component: AppWelcomePage,
  },
  {
    path: "/login",
    component: AppLoginPage
  }
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
