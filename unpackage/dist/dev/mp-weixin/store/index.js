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
    },
    CHANGELOGINsTATUS(state, value) {
      state.isLogined = value;
    }
  },
  actions: {
    changeLoginStatus(context, value) {
      context.commit("CHANGELOGINsTATUS", value);
    },
    savaUserInfo(context, value) {
      context.commit("SAVAUSERINFO", value);
    }
  },
  getters: {}
};
const postsAbout = {
  namespaced: true,
  state: {
    postsList: null
  },
  mutations: {
    SAVEPOSTSLIST(state, value) {
      state.postsList = value;
    }
  },
  actions: {
    savePostsList(context, value) {
      context.commit("SAVEPOSTSLIST", value);
    }
  },
  getters: {}
};
const store = common_vendor.createStore({
  modules: {
    loginAbout,
    postsAbout
  }
});
exports.store = store;
