"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: ["postItem"],
  setup(props) {
    let isLiked = common_vendor.ref(false);
    let liked = common_vendor.ref("../../static/postIcon/liked.png");
    let noLiked = common_vendor.ref("../../static/postIcon/likel.png");
    let likedNum = common_vendor.ref(parseInt(Math.random() * 1e3));
    common_vendor.onMounted(() => {
      console.log(",2222", props.postItem);
    });
    function goToPostDetailPage(id) {
      common_vendor.index.vibrateShort({
        success: function() {
          console.log("\u9707\u52A8");
        }
      });
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
    function previewMultiple(imgIndex) {
      let imgList = [];
      props.postItem.picUrl.forEach((item) => {
        imgList.push(item.imgUrl);
      });
      common_vendor.index.previewImage({
        urls: imgList,
        current: imgIndex
      });
    }
    function doLike() {
      common_vendor.index.vibrateShort({
        success: function() {
          console.log("\u9707\u52A8");
        }
      });
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
      doLike,
      previewMultiple
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.postItem.picUrl,
    b: common_vendor.t($props.postItem.title.substring(0, 3)),
    c: common_vendor.t($props.postItem.description),
    d: $props.postItem.picUrl
  }, $props.postItem.picUrl ? common_vendor.e({
    e: !Array.isArray($props.postItem.picUrl) ? true : false
  }, (!Array.isArray($props.postItem.picUrl) ? true : false) ? {
    f: common_vendor.o(($event) => $setup.previewPic($props.postItem.picUrl)),
    g: $props.postItem.picUrl
  } : {
    h: common_vendor.f($props.postItem.picUrl, (imgItem, index, i0) => {
      return {
        a: imgItem.imgUrl,
        b: index,
        c: common_vendor.o(($event) => $setup.previewMultiple(index), index)
      };
    })
  }) : {}, {
    i: common_vendor.t(!$props.postItem.classic ? "\u5168\u90E8" : $props.postItem.classic),
    j: $setup.isLiked ? $setup.noLiked : $setup.liked,
    k: common_vendor.t($setup.likedNum == 0 ? "" : $setup.likedNum),
    l: $setup.isLiked ? "#96e8ba" : "#a0a0a0",
    m: common_vendor.o((...args) => $setup.doLike && $setup.doLike(...args)),
    n: $props.postItem.title1
  }, $props.postItem.title1 ? {
    o: common_vendor.t($props.postItem.title)
  } : {}, {
    p: common_vendor.o(($event) => $setup.goToPostDetailPage($props.postItem.id))
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5b36b780"], ["__file", "D:/uniappPro/gdutCom/components/post-card/post-card.vue"]]);
wx.createComponent(Component);
