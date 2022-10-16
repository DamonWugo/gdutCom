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
    let isShowComment = common_vendor.ref(false);
    let isAutoFocus = common_vendor.ref(false);
    let maskHeight = common_vendor.ref(30);
    function changeCommentChannel(tabId) {
      navIndex.value = tabId;
    }
    function showDoComment() {
      isShowComment.value = true;
      isAutoFocus.value = true;
      common_vendor.index.getSystemInfo({
        success: (res) => {
          maskHeight.value = res.screenHeight * 10;
        }
      });
    }
    function clearMask() {
      isShowComment.value = false;
      isAutoFocus.value = false;
    }
    return {
      navList,
      navIndex,
      changeCommentChannel,
      showDoComment,
      isShowComment,
      isAutoFocus,
      clearMask,
      maskHeight
    };
  }
};
if (!Array) {
  const _easycom_comment_card2 = common_vendor.resolveComponent("comment-card");
  const _easycom_do_commment_container2 = common_vendor.resolveComponent("do-commment-container");
  (_easycom_comment_card2 + _easycom_do_commment_container2)();
}
const _easycom_comment_card = () => "../../components/comment-card/comment-card.js";
const _easycom_do_commment_container = () => "../../components/do-commment-container/do-commment-container.js";
if (!Math) {
  (_easycom_comment_card + _easycom_do_commment_container)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o((...args) => $setup.showDoComment && $setup.showDoComment(...args)),
    b: common_vendor.f($setup.navList, (tabItem, k0, i0) => {
      return {
        a: common_vendor.t(tabItem.tabName),
        b: tabItem.id,
        c: common_vendor.o(($event) => $setup.changeCommentChannel(tabItem.id), tabItem.id),
        d: common_vendor.n($setup.navIndex == tabItem.id ? "active" : "")
      };
    }),
    c: $setup.isShowComment
  }, $setup.isShowComment ? {
    d: common_vendor.o((...args) => $setup.clearMask && $setup.clearMask(...args)),
    e: 3e3 + "rpx",
    f: common_vendor.o($setup.clearMask),
    g: common_vendor.p({
      isAutoFocus: $setup.isAutoFocus
    })
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uniappPro/gdutCom/pages/post-details/post-details.vue"]]);
wx.createPage(MiniProgramPage);
