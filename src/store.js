import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

const store = createStore({
  state: {
    count: 0,
  },
  getters: {
    counter(state) {
      return state.count;
    },
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    },
    decrement({ commit }) {
      commit("decrement");
    },
    reset({ commit }) {
      commit("reset");
    },
    setCounter({ commit }, value) {
      commit("setCounter", value);
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    reset(state) {
      state.count = 0;
    },
    setCounter(state, value) {
      state.count = value;
    },
  },
  plugins: [vuexLocal.plugin],
});

export default store;
