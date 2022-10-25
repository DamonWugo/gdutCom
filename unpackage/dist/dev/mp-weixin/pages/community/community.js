"use strict";
var common_vendor = require("../../common/vendor.js");
var store_index = require("../../store/index.js");
var service_getPosts = require("../../service/getPosts.js");
const _sfc_main = {
  setup() {
    let tabIndex = common_vendor.ref("001");
    let tabList = common_vendor.reactive([
      {
        id: "001",
        tabName: "\u5168\u90E8",
        tabIcon: "../../static/tabBarIcon/classicl.png"
      },
      {
        id: "002",
        tabName: "\u4E8C\u624B\u5E02\u573A",
        tabIcon: "../../static/iconAll/historyl.png"
      },
      {
        id: "003",
        tabName: "\u7EC4\u961F",
        tabIcon: "../../static/iconAll/homel.png"
      },
      {
        id: "004",
        tabName: "\u5E7F\u544A",
        tabIcon: "../../static/iconAll/menul.png"
      },
      {
        id: "005",
        tabName: "\u70ED\u699C",
        tabIcon: "../../static/iconAll/morel.png"
      },
      {
        id: "006",
        tabName: "\u6700\u65B0",
        tabIcon: "../../static/iconAll/photosl.png"
      },
      {
        id: "007",
        tabName: "\u5916\u5356",
        tabIcon: "../../static/iconAll/settingl.png"
      },
      {
        id: "008",
        tabName: "\u5434\u603B\u554A",
        tabIcon: "../../static/iconAll/searchl.png"
      }
    ]);
    let userInfo = common_vendor.reactive({
      userInfo: {}
    });
    let postsList = common_vendor.reactive({ postsList: [] });
    let isLoading = common_vendor.ref(false);
    common_vendor.onMounted(() => {
      common_vendor.index.checkSession({
        success: (res) => {
          console.log("res", res);
          if (!common_vendor.index.getStorageSync("userInfo")) {
            store_index.store.dispatch("loginAbout/changeLoginStatus", false);
          } else {
            store_index.store.dispatch("loginAbout/changeLoginStatus", true);
            userInfo.userInfo = JSON.parse(common_vendor.index.getStorageSync("userInfo"));
            console.log("userInfo.userInfo", userInfo.userInfo);
            store_index.store.dispatch("loginAbout/savaUserInfo", userInfo.userInfo);
          }
        },
        fail: (res) => {
          store_index.store.dispatch("loginAbout/changeLoginStatus", false);
        }
      });
      console.log(common_vendor.index.getStorageSync("userInfo1") === "");
      common_vendor.index.showLoading({
        title: "\u52A0\u8F7D\u4E2D"
      });
      service_getPosts.getPosts().then((res) => {
        if (res.statusCode === 200) {
          store_index.store.dispatch("postsAbout/savePostsList", res.data);
          postsList.postsList = res.data;
          console.log("postsList112222", postsList.postsList);
          common_vendor.index.hideLoading();
        }
      }).catch((err) => {
        console.log("\u8BF7\u6C42\u5E16\u5B50err", err);
      });
    });
    function getPostList() {
      isLoading.value = true;
      setTimeout(() => {
        service_getPosts.getPosts().then((res) => {
          if (res.statusCode === 200) {
            postsList.postsList.newslist = postsList.postsList.newslist.concat(res.data.newslist);
            isLoading.value = false;
            console.log("postsList11", postsList.postsList.newslist);
          }
        }).catch((err) => {
          console.log("\u8BF7\u6C42\u5E16\u5B50err", err);
        });
      }, 1e3);
    }
    common_vendor.onReachBottom(() => {
      console.log("\u89E6\u5E95\u4E86");
      getPostList();
    });
    common_vendor.onShareAppMessage((res) => {
      return {
        title: "\u6211\u53BB",
        imageUrl: "../../status/avatar/defultavatar.png",
        path: "/pages/community/community"
      };
    });
    function changeToChannel(tabItemId) {
      tabIndex.value = tabItemId;
    }
    function goPublish() {
      common_vendor.index.navigateTo({
        url: "/pages/publish-page/publish-page"
      });
    }
    return {
      tabList,
      changeToChannel,
      tabIndex,
      goPublish,
      postsList,
      getPostList,
      isLoading
    };
  }
};
if (!Array) {
  const _easycom_post_card2 = common_vendor.resolveComponent("post-card");
  _easycom_post_card2();
}
const _easycom_post_card = () => "../../components/post-card/post-card.js";
if (!Math) {
  _easycom_post_card();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($setup.tabList, (tabItem, k0, i0) => {
      return {
        a: tabItem.tabIcon,
        b: common_vendor.n($setup.tabIndex == tabItem.id ? "active-tab" : ""),
        c: common_vendor.t(tabItem.tabName),
        d: common_vendor.n($setup.tabIndex == tabItem.id ? "active-tab-name" : ""),
        e: tabItem.id,
        f: common_vendor.o(($event) => $setup.changeToChannel(tabItem.id), tabItem.id)
      };
    }),
    b: common_vendor.f($setup.postsList.postsList.newslist, (postItem, k0, i0) => {
      return {
        a: postItem.id,
        b: "84574620-0-" + i0,
        c: common_vendor.p({
          postItem
        })
      };
    }),
    c: $setup.isLoading,
    d: common_vendor.o((...args) => $setup.goPublish && $setup.goPublish(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uniappPro/gdutCom/pages/community/community.vue"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
