"use strict";
var common_vendor = require("../../common/vendor.js");
var store_index = require("../../store/index.js");
const _sfc_main = {
  setup() {
    let userInfo = common_vendor.ref("");
    let defaultAvatar = common_vendor.ref("../../static/avatar/defultavatar.png");
    let isLogined = common_vendor.ref(store_index.store.state.loginAbout.isLogined);
    let loginOrNot = common_vendor.ref("false");
    common_vendor.onBeforeMount(() => {
      userInfo.value = store_index.store.state.loginAbout.userInfo == null ? defaultAvatar.value : store_index.store.state.loginAbout.userInfo;
      loginOrNot.value = isLogined.value;
    });
    function goUserCenter() {
      common_vendor.index.navigateTo({
        url: "/pages/user-center/user-center"
      });
    }
    function login() {
      common_vendor.index.getUserProfile({
        desc: "\u83B7\u53D6\u7528\u6237\u57FA\u672C\u8D44\u6599",
        success: (res) => {
          console.log("[]", res);
          userInfo.userInfo = res.userInfo;
          store_index.store.dispatch("loginAbout/savaUserInfo", userInfo.userInfo);
          common_vendor.index.setStorageSync("userInfo", JSON.stringify(res.userInfo));
          common_vendor.index.login({
            provider: "weixin",
            success: (res2) => {
              console.log("\u767B\u5F55", res2);
              isLogined.value = true;
              if (res2.errMsg == "login:ok") {
                res2.code;
              }
            }
          });
        },
        fail: (res) => {
          common_vendor.index.showModal({
            title: "\u6388\u6743\u7528\u6237\u4FE1\u606F\u5931\u8D25\uFF01",
            showCancel: false
          });
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
    b: common_vendor.t($setup.userInfo.nickName)
  } : {
    c: common_vendor.o((...args) => $setup.login && $setup.login(...args))
  }, {
    d: $setup.isLogined
  }, $setup.isLogined ? {} : {}, {
    e: $setup.isLogined
  }, $setup.isLogined ? {
    f: $setup.userInfo.avatarUrl,
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
