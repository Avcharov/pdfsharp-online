<template>
  <AppNavbar>
    <app-button class="button_navbar">Descr 1</app-button>
    <app-button class="button_navbar">Descr 2</app-button>
    <app-button class="button_navbar">Descr 3</app-button>
    <app-button class="button_navbar">Descr 4</app-button>
  </AppNavbar>
</template>

<script>
import { AppNavbar } from "@/styles/styles";
export default {
  name: "app-navbar",
  components: {
    AppNavbar
  }
};
</script>

<style scoped>


</style>
