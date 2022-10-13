"use strict";
var common_vendor = require("../common/vendor.js");
const loginAbout = {
  namespaced: true,
  state: {
    isLogined: false,
    userInfo: null
  },
  mutations: {
    SAVAUSERINFO(state, value) {
      state.userInfo = value;
    }
  },
  actions: {
    savaUserInfo(context, value) {
      context.commit("SAVAUSERINFO", value);
    }
  },
  getters: {}
};
const store = common_vendor.createStore({
  modules: {
    loginAbout
  }
});
exports.store = store;
