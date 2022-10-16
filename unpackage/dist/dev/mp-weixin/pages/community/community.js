"use strict";
var common_vendor = require("../../common/vendor.js");
var store_index = require("../../store/index.js");
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
    let userInfo = common_vendor.reactive({ userInfo: {} });
    common_vendor.onBeforeMount(() => {
      common_vendor.index.checkSession({
        success: (res) => {
          console.log("res", res);
          if (!common_vendor.index.getStorageSync("userInfo")) {
            store_index.store.state.loginAbout.isLogined = false;
          } else {
            store_index.store.state.loginAbout.isLogined = true;
            userInfo.userInfo = JSON.parse(common_vendor.index.getStorageSync("userInfo"));
            store_index.store.state.loginAbout.userInfo = userInfo.userInfo;
          }
        },
        fail: (res) => {
          store_index.store.state.loginAbout.isLogined = false;
        }
      });
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
      goPublish
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
    b: common_vendor.f(10, (item, k0, i0) => {
      return {
        a: "84574620-0-" + i0
      };
    }),
    c: common_vendor.o((...args) => $setup.goPublish && $setup.goPublish(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uniappPro/gdutCom/pages/community/community.vue"]]);
wx.createPage(MiniProgramPage);
