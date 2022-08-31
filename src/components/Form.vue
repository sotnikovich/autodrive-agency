<template>
  <form @submit.prevent="submitHandler" autocomplete="off">
    <h4>Заказать звонок</h4>
    <div class="content">
      <div class="input">
        <label>Имя*</label
        ><MyInput v-model="name" placeholder="Иван Иванов" required />
        <span v-if="!nameIsValid">Поле является обязательным</span>
      </div>
      <div class="input">
        <label>Телефон*</label
        ><MyInput
          v-model="phone"
          placeholder="+7___ ___-__-__"
          v-mask="'+79#########'"
          required
        />
        <span v-if="!phoneIsValid">Введите номер телефона</span>
      </div>
      <div class="input">
        <label>Email*</label
        ><MyInput v-model="email" placeholder="you@example.com" required />
        <span v-if="!emailIsValid">Введите email</span>
      </div>
      <div class="input">
        <label>Город*</label
        ><select id="city" v-model="id">
          <option v-for="city in cities" :key="city.id" :value="city.id">
            {{ city.name }}
          </option>
        </select>
      </div>
    </div>
    <button
      @click="submitHandler"
      :class="{ active: formIsValid }"
      :disabled="!formIsValid"
    >
      Отправить
    </button>
  </form>
</template>

<script>
import MyInput from "./MyInput.vue";
import { mask } from "vue-the-mask";
import { mapState } from "vuex";
export default {
  directives: { mask },
  props: {
    mask: {
      required: true,
    },
  },
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      id: 2,
    };
  },
  computed: {
    ...mapState(["cities", "isShow"]),
    nameIsValid() {
      return !!this.name;
    },
    emailIsValid() {
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      return emailRegex.test(this.email);
    },
    phoneIsValid() {
      const phoneRegex = /^\+?[7]{1}[0-9]{10}$/g;
      return phoneRegex.test(this.phone);
    },
    formIsValid() {
      return (
        this.nameIsValid &&
        this.emailIsValid &&
        this.phoneIsValid &&
        this.id != null
      );
    },
  },
  methods: {
    clearInputs() {
      this.name = "";
      this.phone = "";
      this.email = "";
    },
    submitHandler() {
      let userData = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        city_id: this.id,
      };
      if (this.nameIsValid && this.emailIsValid && this.phoneIsValid) {
        this.$store.dispatch("submitUser", userData);
      }
      this.clearInputs();
      this.$store.commit("togglePopup", false);
      alert("Данные успешно отправлены");
    },
  },
  components: { MyInput },
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 425px) {
  .content {
    display: block;
  }
}
h4 {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  color: #111827;
}
label {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 4px;
}
form {
  display: flex;
  flex-direction: column;
}
.input {
  display: flex;
  flex-direction: column;
  border: none;
}
.input::placeholder {
  color: #6b7280;
  text-align: center;
}
.input:focus {
  outline: none;
}
button {
  align-self: flex-end;
  background: grey;
  width: 170px;
  color: #b4b4b4;
  cursor: auto;
  background: #eeeeee;
}
@media screen and (max-width: 425px) {
  button {
    width: 100%;
  }
}
.active {
  background: #16a34a;
  color: white;
  cursor: pointer;
}
span {
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: #ff8484;
}
select {
  width: 170px;
  height: 38px;
  background: #ffffff;
  border: 1px solid #d1d5db;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;
  cursor: pointer;
}
</style>
