"use strict";
var common_vendor = require("../../common/vendor.js");
var store_index = require("../../store/index.js");
var global_randomUserInfo_randomUserInfo = require("../../global/random-userInfo/random-userInfo.js");
const _sfc_main = {
  setup() {
    let userInfo = common_vendor.reactive({ userInfo: {} });
    let defaultAvatar = common_vendor.ref("../../static/avatar/defultavatar.png");
    let isLogined = common_vendor.ref(store_index.store.state.loginAbout.isLogined);
    let loginOrNot = common_vendor.ref("false");
    common_vendor.onMounted(() => {
      userInfo.userInfo = store_index.store.state.loginAbout.userInfo == null ? defaultAvatar.value : store_index.store.state.loginAbout.userInfo;
      loginOrNot.value = isLogined.value;
    });
    function goUserCenter() {
      common_vendor.index.navigateTo({
        url: "/pages/user-center/user-center"
      });
    }
    function login() {
      let randomNum = Math.ceil(Math.random() * 10);
      userInfo.userInfo = global_randomUserInfo_randomUserInfo.randomUserInfo[randomNum];
      store_index.store.dispatch("loginAbout/savaUserInfo", userInfo.userInfo);
      common_vendor.index.setStorageSync("userInfo", JSON.stringify(userInfo.userInfo));
      common_vendor.index.login({
        provider: "weixin",
        success: (res) => {
          console.log("\u767B\u5F55", res);
          isLogined.value = true;
          store_index.store.dispatch("loginAbout/changeLoginStatus", true);
          if (res.errMsg == "login:ok") {
            res.code;
          }
        }
      });
    }
    return {
      goUserCenter,
      userInfo,
      isLogined,
      loginOrNot,
      login,
      defaultAvatar
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $setup.isLogined
  }, $setup.isLogined ? {
    b: common_vendor.t($setup.userInfo.userInfo.nickName)
  } : {
    c: common_vendor.o((...args) => $setup.login && $setup.login(...args))
  }, {
    d: $setup.isLogined
  }, $setup.isLogined ? {} : {}, {
    e: $setup.isLogined
  }, $setup.isLogined ? {
    f: $setup.userInfo.userInfo.avatarUrl,
    g: common_vendor.o((...args) => $setup.goUserCenter && $setup.goUserCenter(...args))
  } : {
    h: $setup.defaultAvatar
  }, {
    i: $setup.isLogined
  }, $setup.isLogined ? {} : {
    j: common_vendor.o((...args) => $setup.login && $setup.login(...args))
  }, {
    k: $setup.isLogined
  }, $setup.isLogined ? {
    l: common_vendor.o((...args) => $setup.goUserCenter && $setup.goUserCenter(...args))
  } : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uniappPro/gdutCom/components/logined-card/logined-card.vue"]]);
wx.createComponent(Component);
