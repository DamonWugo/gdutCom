"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    let navList = common_vendor.reactive([{
      id: "0",
      tabName: "\u6700\u65B0"
    }, {
      id: "1",
      tabName: "\u6700\u70ED"
    }]);
    let navIndex = common_vendor.ref("0");
    function changeCommentChannel(tabId) {
      navIndex.value = tabId;
    }
    return {
      navList,
      navIndex,
      changeCommentChannel
    };
  }
};
if (!Array) {
  const _easycom_comment_card2 = common_vendor.resolveComponent("comment-card");
  _easycom_comment_card2();
}
const _easycom_comment_card = () => "../../components/comment-card/comment-card.js";
if (!Math) {
  _easycom_comment_card();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($setup.navList, (tabItem, k0, i0) => {
      return {
        a: common_vendor.t(tabItem.tabName),
        b: tabItem.id,
        c: common_vendor.o(($event) => $setup.changeCommentChannel(tabItem.id), tabItem.id),
        d: common_vendor.n($setup.navIndex == tabItem.id ? "active" : "")
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uniappPro/gdutCom/pages/post-details/post-details.vue"]]);
wx.createPage(MiniProgramPage);
