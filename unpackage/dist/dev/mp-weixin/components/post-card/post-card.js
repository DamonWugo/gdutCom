"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: ["postItem"],
  setup(props) {
    let isLiked = common_vendor.ref(false);
    let liked = common_vendor.ref("../../static/postIcon/liked.png");
    let noLiked = common_vendor.ref("../../static/postIcon/likel.png");
    let likedNum = common_vendor.ref(parseInt(Math.random() * 100));
    common_vendor.onMounted(() => {
      console.log(",2222", props.postItem);
    });
    function goToPostDetailPage(id) {
      common_vendor.index.navigateTo({
        url: `/pages/post-details/post-details?id=${id}`
      });
    }
    function previewPic(img) {
      common_vendor.index.previewImage({
        urls: [img],
        current: 0
      });
    }
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
      previewPic,
      goToPostDetailPage,
      doLike
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($props.postItem.title.substring(0, 3)),
    b: common_vendor.t($props.postItem.description),
    c: common_vendor.o(($event) => $setup.previewPic($props.postItem.picUrl)),
    d: $props.postItem.picUrl,
    e: $setup.isLiked ? $setup.noLiked : $setup.liked,
    f: common_vendor.t($setup.likedNum == 0 ? "" : $setup.likedNum),
    g: $setup.isLiked ? "#96e8ba" : "#a0a0a0",
    h: common_vendor.o((...args) => $setup.doLike && $setup.doLike(...args)),
    i: $props.postItem.name
  }, $props.postItem.name ? {} : {}, {
    j: common_vendor.o(($event) => $setup.goToPostDetailPage($props.postItem.id))
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uniappPro/gdutCom/components/post-card/post-card.vue"]]);
wx.createComponent(Component);
