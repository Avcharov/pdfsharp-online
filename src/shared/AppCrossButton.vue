<template>
  <div class="cross-button">
    <div class="cross-button__stick cross-button__stick_left"></div>
    <div class="cross-button__stick cross-button__stick_right"></div>
  </div>
</template>

<script>
export default {
  name: "app-cross-button",
};
</script>

<style>
.cross-button {
    height: 20px;
    width: 26px;
    cursor: pointer;
}

.cross-button__stick {
    height: 2px;
    background-color: #fff;
}

.cross-button__stick_left {
    transform: translateY(10px) rotate(-45deg);
}

.cross-button__stick_right {
    transform: translateY(8px) rotate(45deg);
}

.cross-button__stick-right {
    width: 100%;
    height: 1px;
    background-color: #000;
    position: relative;
    bottom: 50%;
    transform: translateY(-50%);
}
</style>
