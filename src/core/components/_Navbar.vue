<template>
  <div class="navbar">
    <AppButton class="button button_navbar">aboba</AppButton>
    <AppButton class="button button_navbar">aboba</AppButton>
    <AppButton class="button button_navbar">aboba</AppButton>
    <AppButton class="button button_navbar">aboba</AppButton>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: end;
  align-items: center;
  margin-right: 30px;
}

</style>
