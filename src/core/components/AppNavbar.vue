<template>
  <div class="navbar">
    <app-button class="button button_navbar">aboba</app-button>
    <app-button class="button button_navbar">aboba</app-button>
    <app-button class="button button_navbar">aboba</app-button>
    <app-button class="button button_navbar">aboba</app-button>
  </div>
</template>

<script>
export default {
  name: "app-navbar",
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
