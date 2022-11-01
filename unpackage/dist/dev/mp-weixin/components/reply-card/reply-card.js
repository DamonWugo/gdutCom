"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    let isLiked = common_vendor.ref(false);
    let liked = common_vendor.ref("../../static/postIcon/likel.png");
    let noLiked = common_vendor.ref("../../static/postIcon/liked.png");
    let likedNum = common_vendor.ref(parseInt(Math.random() * 100));
    function doLike() {
      isLiked.value = !isLiked.value;
      if (isLiked.value) {
        likedNum.value++;
      } else {
        likedNum.value--;
      }
    }
    return {
      isLiked,
      liked,
      noLiked,
      likedNum,
      doLike
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($setup.likedNum),
    b: $setup.isLiked ? $setup.liked : $setup.noLiked,
    c: common_vendor.t($setup.likedNum),
    d: $setup.isLiked ? "#96e8ba" : "#cccccc",
    e: common_vendor.o((...args) => $setup.doLike && $setup.doLike(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uniappPro/gdutCom/components/reply-card/reply-card.vue"]]);
wx.createComponent(Component);
