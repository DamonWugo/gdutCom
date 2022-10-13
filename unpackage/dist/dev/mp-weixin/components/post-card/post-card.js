"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    function goToPostDetailPage() {
      common_vendor.index.navigateTo({
        url: "/pages/post-details/post-details"
      });
    }
    return {
      goToPostDetailPage
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $setup.goToPostDetailPage && $setup.goToPostDetailPage(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uniappPro/gdutCom/components/post-card/post-card.vue"]]);
wx.createComponent(Component);
