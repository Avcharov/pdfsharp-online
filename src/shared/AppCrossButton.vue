<template>
  <CrossButton>
    <div class="cross-button__stick cross-button__stick_left"></div>
    <div class="cross-button__stick cross-button__stick_right"></div>
  </CrossButton>
</template>

<script>
import {CrossButton} from "@/styles/styles";
export default {
  name: "app-cross-button",
  components: {
    CrossButton
  }
};
</script>
