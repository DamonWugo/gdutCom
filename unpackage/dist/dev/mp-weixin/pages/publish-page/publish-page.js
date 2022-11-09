"use strict";
var common_vendor = require("../../common/vendor.js");
var store_index = require("../../store/index.js");
var global_tabList_tabList = require("../../global/tab-list/tab-list.js");
const _sfc_main = {
  setup() {
    let navIndex = common_vendor.ref("001");
    let tabList = common_vendor.reactive(global_tabList_tabList.tablist);
    let postValue = common_vendor.ref("");
    let navName = common_vendor.ref("\u5168\u90E8");
    let post = common_vendor.reactive({
      post: {}
    });
    let imageList = common_vendor.reactive([]);
    let imgCount = common_vendor.ref(9);
    function uploadImg() {
      common_vendor.index.chooseImage({
        count: imgCount.value - imageList.length,
        success: (chooseImageRes) => {
          const tempFilePaths = chooseImageRes.tempFilePaths;
          console.log("212", chooseImageRes);
          for (let i = 0, len = tempFilePaths.length; i < len; i++) {
            imageList.push({
              id: Date.now(),
              imgUrl: tempFilePaths[i]
            });
          }
          console.log("list", imageList);
        }
      });
    }
    function selectClaassicItem(id, tabName) {
      navIndex.value = id;
      navName.value = tabName;
    }
    function publishPost() {
      post.post = {
        id: Date.now(),
        ctime: Date.now(),
        title: store_index.store.state.loginAbout.userInfo.nickName,
        description: postValue.value,
        picUrl: imageList.length <= 0 ? null : imageList,
        classic: navName.value
      };
      common_vendor.index.$emit("addPost", {
        post
      });
      common_vendor.index.showToast({
        title: "\u53D1\u5E03\u6210\u529F",
        duration: 1e3
      });
      setTimeout(() => {
        common_vendor.index.navigateBack({
          url: "/pages/community/community"
        });
      }, 800);
    }
    function previewPic(index) {
      let imgList = [];
      imageList.forEach((item) => {
        imgList.push(item.imgUrl);
      });
      common_vendor.index.previewImage({
        urls: imgList,
        current: index
      });
    }
    function deleteImg(imgIndex) {
      common_vendor.index.showActionSheet({
        itemList: ["\u5220\u9664\u6B64\u7167\u7247"],
        itemColor: "#ff0004",
        success: function(res) {
          imageList.splice(imgIndex, 1);
          console.log("\u9009\u4E2D\u4E86\u7B2C" + (res.tapIndex + 1) + "\u4E2A\u6309\u94AE");
        },
        fail: function(res) {
          console.log(res.errMsg);
        }
      });
    }
    return {
      post,
      postValue,
      tabList,
      navIndex,
      selectClaassicItem,
      publishPost,
      uploadImg,
      imageList,
      previewPic,
      deleteImg,
      imgCount
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: -1,
    b: $setup.postValue,
    c: common_vendor.o(($event) => $setup.postValue = $event.detail.value),
    d: common_vendor.f($setup.imageList, (imgItem, index, i0) => {
      return {
        a: imgItem.imgUrl,
        b: common_vendor.o(($event) => $setup.previewPic(index)),
        c: common_vendor.o(($event) => $setup.deleteImg(index))
      };
    }),
    e: $setup.imageList.length >= 9 ? false : true
  }, ($setup.imageList.length >= 9 ? false : true) ? {
    f: common_vendor.o((...args) => $setup.uploadImg && $setup.uploadImg(...args))
  } : {}, {
    g: common_vendor.f($setup.tabList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.tabName),
        b: item.id,
        c: common_vendor.o(($event) => $setup.selectClaassicItem(item.id, item.tabName), item.id),
        d: common_vendor.n(item.id == $setup.navIndex ? "avtive" : "")
      };
    }),
    h: common_vendor.o((...args) => $setup.publishPost && $setup.publishPost(...args))
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-488795b4"], ["__file", "D:/uniappPro/gdutCom/pages/publish-page/publish-page.vue"]]);
wx.createPage(MiniProgramPage);
