"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: ["commentItem"],
  setup(props, context) {
    const {
      time
    } = props.commentItem;
    const commentTime = common_vendor.hooks(time).format("YYYY-MM-DD");
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
    function checkMoreReplies() {
      common_vendor.index.navigateTo({
        url: "/pages/all-replies-page/all-replies-page"
      });
    }
    return {
      isLiked,
      liked,
      noLiked,
      likedNum,
      commentTime,
      doLike,
      checkMoreReplies
    };
  }
};
if (!Array) {
  const _easycom_reply_card2 = common_vendor.resolveComponent("reply-card");
  _easycom_reply_card2();
}
const _easycom_reply_card = () => "../reply-card/reply-card.js";
if (!Math) {
  _easycom_reply_card();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.commentItem.commentVal),
    b: $props.commentItem.avatarUrl,
    c: common_vendor.t($props.commentItem.name),
    d: common_vendor.t($setup.commentTime),
    e: common_vendor.t($setup.likedNum),
    f: $setup.isLiked ? $setup.liked : $setup.noLiked,
    g: common_vendor.t($setup.likedNum),
    h: $setup.isLiked ? "#96e8ba" : "#cccccc",
    i: common_vendor.o((...args) => $setup.doLike && $setup.doLike(...args)),
    j: common_vendor.f(2, (i, k0, i0) => {
      return {
        a: "65183244-0-" + i0
      };
    }),
    k: common_vendor.o((...args) => $setup.checkMoreReplies && $setup.checkMoreReplies(...args))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-65183244"], ["__file", "D:/uniappPro/gdutCom/components/comment-card/comment-card.vue"]]);
wx.createComponent(Component);
