<template>
  <Button>
    <slot></slot>
  </Button>
</template>

<script>
import { Button } from "@/styles/styles.js";
export default {
  name: "app-button",
  components: {
    Button
  }
};
</script>
