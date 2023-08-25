<template>
  <div class="welcome-page">
    <app-header></app-header>
    <router-view></router-view>
    <div class="welcome-page-footer"></div>
  </div>
</template>

<script>
import AppHeader from "@/core/components/AppHeader.vue";
import AppWelcomePage from "@/features/welcome/pages/AppWelcomePage.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    AppWelcomePage,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;600;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter";
}
.container {
  max-width: 1140px;
  margin: 0 auto;
}

.container_s {
  max-width: 800px;
  margin: 0 auto;
}

.welcome-page {
  background-color: #1a1a1a;
  min-height: 100vh;
}

.hidden {
  display: none;
}

.text-underline {
  text-decoration: underline;
}

.cursor-pointer {
  cursor: pointer;
}

*::-webkit-scrollbar-thumb {
  background-color: #1f1f1f;
  border: 4px solid transparent;
  border-radius: 8px;
  background-clip: padding-box;
}

*::-webkit-scrollbar {
  width: 16px;
}
</style>
