<template>
  <div class="wrapper">
    <div class="login-page__container">
      <h1 class="login-page__header">
        <em> {{ $t("LOGIN.HEADER") }}</em>
      </h1>
      <app-login-popup></app-login-popup>
    </div>
  </div>
</template>

<script>
import AppLoginPopup from "@/features/login/components/AppLoginPopup.vue";
export default {
  name: "app-login-page",
  components: {
    AppLoginPopup,
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
}
.login-page__container {
  max-width: 800px;
  margin: 0 auto;
}

.login-page__header {
  margin: 30px 0;
  text-align: start;

}

.login-page__header > em {
  font-size: 54px;
  line-height: 1.25;
  background: -webkit-linear-gradient(315deg, #9742d3 25%, #64ff88);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-style: normal;
}
</style>
