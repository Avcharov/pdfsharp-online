<template>
  <AppHeader>
    <div class="container">
      <div class="header__wrapper">
        <div class="header__logo">LOGOLOGOLOGO</div>
        <div class="header__box">
          <app-navbar></app-navbar>
          <div class="header__user">PROFILE</div>
        </div>
      </div>
    </div>
  </AppHeader>
</template>

<script>
import AppNavbar from "@/core/components/AppNavbar.vue";
import { AppHeader } from "@/styles/styles";
export default {
  name: "app-header",
  components: {
    AppNavbar,
    AppHeader
  },
};
</script>

<style scoped>

</style>
