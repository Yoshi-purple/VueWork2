/** @format */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gender: '未回答',
    birthDate: {
      year: '',
      month: '',
      date: '',
    },
    question: {
      no1: '未回答',
      no2: '未回答',
      no3: '未回答',
    },
    message: '',
  },
  getters: {
    message: (state) => state.message,
  },
  mutations: {
    addMessage(state, newMessage) {
      state.message = newMessage;
    },
  },
  actions: {
    addMessage({ commit }, newMessage) {
      commit('addMessage', newMessage);
    },
  },
});
