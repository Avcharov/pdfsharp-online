<template>
  <AppLoginPopup>
    <div class="login-form">
      <h3 class="login-form__subheader">{{ $t("LOGIN.POPUP.EMAIL") }}</h3>
      <input class="login-form__input" placeholder="Enter ..." type="text" />
      <h3 class="login-form__subheader">{{ $t("LOGIN.POPUP.PASSWORD") }}</h3>
      <input class="login-form__input" placeholder="Enter ..." type="text" />
  
      <div class="login-form__buttons">
        <a href="#" class="login-form__button-link">{{ $t("LOGIN.POPUP.CREATE_NEW") }}</a>
        <app-button class="login-form__submit-button">{{ $t("LOGIN.POPUP.SUBMIT") }}</app-button>
      </div>
  
      <div class="login-form__items-divider">
        <div class="login-form__item-stick"></div>
        <div class="login-form__item-or">{{ $t("LOGIN.POPUP.OR") }}</div>
        <div class="login-form__item-stick"></div>
      </div>
  
      <div class="login-form__links">
        <div class="login-form__link">
          <fa class="login-form__icon" :icon="['fab', 'google']" size="lg" />
        </div>
        <div class="login-form__link">
          <fa class="login-form__icon" :icon="['fab', 'github']" size="lg" />
        </div>
      </div>
    </div>
  </AppLoginPopup>
</template>

<script>
import AppButton from "@/shared/AppButton.vue";
import { AppLoginPopup } from "@/styles/styles";
export default {
  name: "app-login-popup",
  components: {
    AppButton,
    AppLoginPopup
  },
};
</script>
