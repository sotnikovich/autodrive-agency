import { createStore } from "vuex";
import axios from "axios";
const URL = "http://hh.autodrive-agency.ru/test-tasks/front/task-7/";

export default createStore({
  state: {
    cities: [
      {
        id: 1,
        name: "Москва",
      },
      {
        id: 2,
        name: "Санкт-Петербург",
      },
      { id: 3, name: "Казань" },
    ],
    isShow: false,
  },
  mutations: {
    togglePopup(state, show) {
      state.isShow = show;
    },
  },
  actions: {
    async submitUser({ commit }, payload) {
      const result = await axios({
        method: "post",
        url: `${URL}`,
        data: payload,
      });
      commit("setCallbackForm", result.data);
    },
  },
});
