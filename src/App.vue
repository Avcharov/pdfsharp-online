<template>
  <div class="welcome-page">
    <Header></Header>
    <WelcomePage></WelcomePage>
    <div class="welcome-page-footer"></div>
  </div>
</template>

<script>
import Header from "@/core/components/_Header.vue";
import WelcomePage from "@/features/welcome/pages/_WelcomePage.vue";
export default {
  name: "App",
  components: {
    Header,
    WelcomePage,
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
  min-width: 1140px;
  margin: 0 auto;
}
.welcome-page {
  background-color: #1a1a1a;
  min-height: 100vh;
}
</style>
