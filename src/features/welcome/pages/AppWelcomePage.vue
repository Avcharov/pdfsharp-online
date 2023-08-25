<template>
  <AppWelcomePage>
    <div class="container">
      <h1 class="welcome-page__header">
        {{ $t("WELCOME.HEADER") }}
      </h1>
      <p class="welcome-page__subheader">
        {{ $t("WELCOME.SUBHEADER") }}
      </p>
      <div class="welcome-page__actions">
        <app-button class="button_mr15"> {{ $t("WELCOME.PREVIEW") }}
        </app-button>
        <app-button class="button_green button_mr15">{{ $t("WELCOME.GET_STARTED") }}</app-button>
        <app-button>{{ $t("WELCOME.ABOUT") }}</app-button>
      </div>
    </div>
  </AppWelcomePage>
</template>

<script>
import { AppWelcomePage } from '@/styles/styles';
export default {
  name: "app-welcome-page",
  components: {
    AppWelcomePage
  }
};
</script>
