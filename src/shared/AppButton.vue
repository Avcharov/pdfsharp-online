<template>
  <button class="button"><slot></slot></button>
</template>

<script>
export default {
  name: "app-button",
};
</script>

<style>
.button {
  padding: 8px 18px;
  border-radius: 10px;
  border: none;
  background-color: #2f2f2f;
  color: #83bba5;
  font-size: 18px;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s all;
}

.button:hover {
  background-color: #3b3b3b;
}

.button_green {
  background-color: #9742d3;
  color: #cfcfcf;
}

.button_green:hover {
  background-color: #a549e7;
}
.button_navbar {
  font-size: 11px;
  margin-right: 15px;
}

.button_mr15{
  margin-right: 15px;
}

.button_select-body{
  width: 100%;
}

</style>
