<template>
  <div class="login-form">
    <h3 class="login-form__subheader">Email</h3>
    <input placeholder="Enter ..." type="text" />
    <h3 class="login-form__subheader">Password</h3>
    <input placeholder="Enter ..." type="text" />

    <div class="login-form__buttons">
      <a href="#" class="login__button-link">Create new</a>
      <app-button>Submit</app-button>
    </div>

    <div class="login__items-divider">
      <div class="item-stick"></div>
      <div class="item-or"> or </div>
      <div class="item-stick"></div>
    </div>

    <div class="login-form__links">
      <div class="login-form__link">
        <fa :icon="['fab', 'google']" size="lg"/>
      </div>
      <div class="login-form__link">
        <fa :icon="['fab', 'github']" size="lg"/>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "@/shared/AppButton.vue";
export default {
  name: "app-login-popup",
  components: {
    AppButton,
  },
};
</script>

<style scoped>
.login-form {
  width: 100%;
  border-radius: 20px;
  background-color: #252529;
  padding: 30px;
}

.login-form__subheader {
  color: #979fad;
}
.login-form__subheader:not(:first-child) {
  margin-top: 20px;
}

.login-form__buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 30px;
}

.login-form__links {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.login-form__link:not(:last-child){
  margin-right: 20px;
}

.login__button-link {
  color: #83bba5;
  text-decoration: none;
  margin-right: 20px;
}

.login__items-divider{
  display: flex;
  align-items: center;
  margin-top: 30px;
}
.item-stick{
  width: 50%;
  height: 1px;
  background-color: #979fad;
}

.item-or{
  padding: 0px 10px;
  color: #979fad;
}

input {
  width: 100%;
  border-radius: 5px;
  border: 1px solid #979fad;
  background-color: #252529;
  padding: 15px;
  color: #979fad;
  margin-top: 5px;
  font-size: 16px;
  font-weight: 600;
}

.fa-github{
  color: #979fad;
}

.fa-google{
  color: #979fad;
}
</style>
