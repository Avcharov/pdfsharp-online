<template>
  <AppLoginPage>
    <div class="container_s">
      <h1 class="login-page__header">
        <em> {{ $t("LOGIN.HEADER") }}</em>
      </h1>
      <app-login-popup></app-login-popup>
    </div>
  </AppLoginPage>
</template>

<script>
import AppLoginPopup from "@/features/login/components/AppLoginPopup.vue";
import { AppLoginPage } from "@/styles/styles";
export default {
  name: "app-login-page",
  components: {
    AppLoginPopup,
    AppLoginPage
  },
};
</script>