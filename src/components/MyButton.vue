<template>
  <button class="button"><slot></slot></button>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.button {
  min-width: 184px;
  min-height: 38px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}
</style>
