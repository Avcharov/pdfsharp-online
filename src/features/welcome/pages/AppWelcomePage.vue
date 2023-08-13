<template>
  <div class="welcome-page-content">
    <div class="router">
      <div class="container">
        <h1 class="router__header">
          {{ $t("WELCOME.HEADER") }}
        </h1>
        <p class="router__subheader">
          {{ $t("WELCOME.SUBHEADER") }}
        </p>

        <div class="router__actions">
          <app-button class="button_mr15"> {{ $t("WELCOME.PREVIEW") }}
          </app-button>
          <app-button class="button_green button_mr15">{{ $t("WELCOME.GET_STARTED") }}</app-button>
          <app-button>{{ $t("WELCOME.ABOUT") }}</app-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-welcome-page",

};
</script>

<style scoped>
.router {
  min-height: 700px;
  padding: 70px 0px;
}
.router__header {
  margin-top: 30px;
  text-align: center;
  font-size: 76px;
  line-height: 1.25;
  background: -webkit-linear-gradient(315deg, #9742d3 25%, #64ff88);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.router__subheader {
  line-height: 1.5;
  margin-top: 10px;
  text-align: center;
  color: #979797;
  font-size: 18px;
}
.router__actions {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
