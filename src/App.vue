<template>
  <div class="main">
    <MyButton class="button1" @click="showPopup">Заказать в Москву</MyButton>
    <MyButton class="button2" @click="showPopup"
      >Заказать в Санкт-Петербург</MyButton
    >
  </div>
  <MyPopup v-model:show="isShow"><Form /></MyPopup>
</template>

<script>
import MyButton from "./components/MyButton.vue";
import MyPopup from "./components/MyPopup.vue";
import Form from "./components/Form.vue";
import { mapState } from "vuex";
export default {
  components: {
    MyButton,
    MyPopup,
    Form,
  },
  methods: {
    showPopup(e) {
      this.$store.commit("togglePopup", true);
    },
  },
  computed: {
    ...mapState(["isShow", "cities"]),
  },
};
</script>

<style scoped>
.main {
  display: flex;
}
.button1 {
  background: #3b82f6;
  margin-right: 20px;
}
.button2 {
  background: #0d9488;
}
</style>
