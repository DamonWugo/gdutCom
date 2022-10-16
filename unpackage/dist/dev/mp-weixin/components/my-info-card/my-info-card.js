"use strict";
var common_vendor = require("../../common/vendor.js");
var store_index = require("../../store/index.js");
const _sfc_main = {
  setup() {
    let userInfoFromWeiXin = common_vendor.reactive({ userInfoFromWeiXin: store_index.store.state.loginAbout.userInfo });
    return {
      userInfoFromWeiXin
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $setup.userInfoFromWeiXin.userInfoFromWeiXin.avatarUrl,
    b: common_vendor.t($setup.userInfoFromWeiXin.userInfoFromWeiXin.nickName),
    c: common_vendor.t($setup.userInfoFromWeiXin.userInfoFromWeiXin.nickName)
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uniappPro/gdutCom/components/my-info-card/my-info-card.vue"]]);
wx.createComponent(Component);
