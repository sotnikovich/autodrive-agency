<template>
  <div class="popup" v-if="show" @click="closePopup">
    <div @click.stop class="popup__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "./toggleMix";
export default {
  name: "my-popup",
  mixins: [toggleMixin],
};
</script>

<style scoped>
.popup {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(107, 114, 128, 0.75);
  position: fixed;
  display: flex;
}
.popup__content {
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
    0px 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  min-height: 216px;
  min-width: 793px;
  padding: 24px;
}
@media screen and (max-width: 768px) {
  .popup__content {
    min-width: 600px;
  }
}
@media screen and (max-width: 425px) {
  .popup__content {
    min-width: 355px;
  }
}
</style>
