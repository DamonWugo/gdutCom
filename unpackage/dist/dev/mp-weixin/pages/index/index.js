"use strict";
var common_vendor = require("../../common/vendor.js");
var store_index = require("../../store/index.js");
const _sfc_main = {
  setup() {
    let userInfo = common_vendor.reactive({ userInfo: null });
    let isLogined = common_vendor.ref(false);
    common_vendor.onMounted(() => {
      isLogined.value = store_index.store.state.loginAbout.isLogined;
      if (common_vendor.index.getStorageSync("userInfo") === "") {
        userInfo.userInfo = null;
      } else {
        userInfo.userInfo = JSON.parse(common_vendor.index.getStorageSync("userInfo"));
      }
    });
    return {
      isLogined,
      userInfo
    };
  }
};
if (!Array) {
  const _easycom_logined_card2 = common_vendor.resolveComponent("logined-card");
  const _easycom_my_features_card2 = common_vendor.resolveComponent("my-features-card");
  const _easycom_more_features2 = common_vendor.resolveComponent("more-features");
  (_easycom_logined_card2 + _easycom_my_features_card2 + _easycom_more_features2)();
}
const _easycom_logined_card = () => "../../components/logined-card/logined-card.js";
const _easycom_my_features_card = () => "../../components/my-features-card/my-features-card.js";
const _easycom_more_features = () => "../../components/more-features/more-features.js";
if (!Math) {
  (_easycom_logined_card + _easycom_my_features_card + _easycom_more_features)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      isLogined: $setup.isLogined
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uniappPro/gdutCom/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
