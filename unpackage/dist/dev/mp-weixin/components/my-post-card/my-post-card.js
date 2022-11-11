"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    function deleteMyPost() {
      common_vendor.index.showActionSheet({
        itemList: ["\u5220\u9664\u6B64\u5E16"],
        itemColor: "#ff0004",
        success: function(res) {
          console.log("\u9009\u4E2D\u4E86\u7B2C" + (res.tapIndex + 1) + "\u4E2A\u6309\u94AE");
        },
        fail: function(res) {
          console.log(res.errMsg);
        }
      });
      console.log("1111");
    }
    return {
      deleteMyPost
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $setup.deleteMyPost && $setup.deleteMyPost(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uniappPro/gdutCom/components/my-post-card/my-post-card.vue"]]);
wx.createComponent(Component);
