<template>
  <div class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__logo" style="width: 200px">LOGOLOGOLOGO</div>
        <div class="header__box">
          <Navbar></Navbar>
          <div class="header__user" style="width: 100px">PROFILE</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/core/components/_Navbar.vue";
export default {
  name: "Header",
  components: {
    Navbar,
  },
};
</script>

<style scoped>
.header {
  height: 55px;
  width: 100%;
  border-bottom: 1px solid #363636;
  display: flex;
  align-items: center;
}
.header__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1140px;
}
.header__box {
  display: flex;
  align-items: center;
}
</style>
