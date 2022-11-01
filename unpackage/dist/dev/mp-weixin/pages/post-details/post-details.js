"use strict";
var common_vendor = require("../../common/vendor.js");
var service_getPosts = require("../../service/getPosts.js");
require("../../store/index.js");
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
    let postDetail = common_vendor.reactive({ postDetail: {} });
    let commentList = common_vendor.reactive({ commentList: [{
      id: Date.now(),
      time: Date.now(),
      commentVal: "\u5DF2\u7ECF\u6709\u7684\u4E86\u8BC4\u8BBA",
      name: "\u5B59\u609F\u7A7A",
      avatarUrl: "../../static/logo.png",
      likeNum: 13
    }] });
    common_vendor.onLoad((option) => {
      console.log("option", option.id);
      service_getPosts.getPosts().then((res) => {
        postDetail.postDetail = res.data.newslist.filter((item) => {
          return item.id == option.id;
        });
        console.log(postDetail.postDetail);
        console.log(res.data.newslist[0]);
        console.log(res.data.newslist.filter((item) => {
          return item.id == option.id;
        }));
      });
    });
    common_vendor.onMounted(() => {
    });
    function previewPic(img) {
      common_vendor.index.previewImage({
        urls: [img],
        current: 0
      });
    }
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
    function sendComment(commentVal) {
      const userInfo = JSON.parse(common_vendor.index.getStorageSync("userInfo"));
      commentList.commentList.unshift({
        id: Date.now(),
        time: Date.now(),
        commentVal,
        name: userInfo.nickName,
        avatarUrl: userInfo.avatarUrl,
        likeNum: 13
      });
      console.log("commentVal", commentVal);
      isShowComment.value = false;
      isAutoFocus.value = false;
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
      maskHeight,
      postDetail,
      previewPic,
      commentList,
      sendComment
    };
  }
};
if (!Array) {
  const _easycom_no_comment2 = common_vendor.resolveComponent("no-comment");
  const _easycom_comment_card2 = common_vendor.resolveComponent("comment-card");
  const _easycom_do_commment_container2 = common_vendor.resolveComponent("do-commment-container");
  (_easycom_no_comment2 + _easycom_comment_card2 + _easycom_do_commment_container2)();
}
const _easycom_no_comment = () => "../../components/no-comment/no-comment.js";
const _easycom_comment_card = () => "../../components/comment-card/comment-card.js";
const _easycom_do_commment_container = () => "../../components/do-commment-container/do-commment-container.js";
if (!Math) {
  (_easycom_no_comment + _easycom_comment_card + _easycom_do_commment_container)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($setup.postDetail.postDetail[0].title),
    b: common_vendor.t($setup.postDetail.postDetail[0].ctime),
    c: common_vendor.t($setup.postDetail.postDetail[0].description),
    d: $setup.postDetail.postDetail[0].picUrl,
    e: common_vendor.o(($event) => $setup.previewPic($setup.postDetail.postDetail[0].picUrl)),
    f: common_vendor.o((...args) => $setup.showDoComment && $setup.showDoComment(...args)),
    g: common_vendor.f($setup.navList, (tabItem, k0, i0) => {
      return {
        a: common_vendor.t(tabItem.tabName),
        b: tabItem.id,
        c: common_vendor.o(($event) => $setup.changeCommentChannel(tabItem.id), tabItem.id),
        d: common_vendor.n($setup.navIndex == tabItem.id ? "active" : "")
      };
    }),
    h: !$setup.commentList.commentList.length
  }, !$setup.commentList.commentList.length ? {} : {}, {
    i: common_vendor.f($setup.commentList.commentList, (commentItem, k0, i0) => {
      return {
        a: commentItem.id,
        b: "655c99bc-1-" + i0,
        c: common_vendor.p({
          commentItem
        })
      };
    }),
    j: $setup.isShowComment
  }, $setup.isShowComment ? {
    k: common_vendor.o((...args) => $setup.clearMask && $setup.clearMask(...args)),
    l: 3e3 + "rpx",
    m: common_vendor.o($setup.sendComment),
    n: common_vendor.p({
      isAutoFocus: $setup.isAutoFocus
    })
  } : {});
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uniappPro/gdutCom/pages/post-details/post-details.vue"]]);
wx.createPage(MiniProgramPage);
