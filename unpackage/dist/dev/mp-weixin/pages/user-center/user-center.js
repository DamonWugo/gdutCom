"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    let myNavList = common_vendor.reactive([
      { id: "0", tabName: "\u6211\u7684\u767D\u677F" },
      { id: "1", tabName: "\u6211\u7684\u8BC4\u8BBA" }
    ]);
    let navIndex = common_vendor.ref("0");
    function switchTab(tabid) {
      navIndex.value = tabid;
    }
    return {
      navIndex,
      myNavList,
      switchTab
    };
  }
};
if (!Array) {
  const _easycom_my_info_card2 = common_vendor.resolveComponent("my-info-card");
  const _easycom_my_post_card2 = common_vendor.resolveComponent("my-post-card");
  (_easycom_my_info_card2 + _easycom_my_post_card2)();
}
const _easycom_my_info_card = () => "../../components/my-info-card/my-info-card.js";
const _easycom_my_post_card = () => "../../components/my-post-card/my-post-card.js";
if (!Math) {
  (_easycom_my_info_card + _easycom_my_post_card)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($setup.myNavList, (navItem, k0, i0) => {
      return common_vendor.e({
        a: common_vendor.t(navItem.tabName),
        b: common_vendor.n(navItem.id == $setup.navIndex ? "active" : ""),
        c: navItem.id == $setup.navIndex ? true : false
      }, (navItem.id == $setup.navIndex ? true : false) ? {} : {}, {
        d: navItem.id,
        e: common_vendor.o(($event) => $setup.switchTab(navItem.id), navItem.id)
      });
    }),
    b: common_vendor.f(10, (item, k0, i0) => {
      return {
        a: "3df7da4c-1-" + i0
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uniappPro/gdutCom/pages/user-center/user-center.vue"]]);
wx.createPage(MiniProgramPage);
