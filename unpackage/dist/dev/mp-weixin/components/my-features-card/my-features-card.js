"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    const myNavList = common_vendor.reactive([
      {
        id: "001",
        tabName: "\u6211\u7684\u5E16\u5B50",
        tabIcon: "../../static/iconAll/menul.png"
      },
      {
        id: "002",
        tabName: "\u6211\u7684\u8BC4\u8BBA",
        tabIcon: "../../static/iconAll/settingl.png"
      },
      {
        id: "003",
        tabName: "\u6211\u7684\u6D88\u606F",
        tabIcon: "../../static/iconAll/morel.png"
      }
    ]);
    function goOtherPage(id) {
      switch (id) {
        case "001": {
          goUserCenter();
          break;
        }
        case "002": {
          goUserCenter();
          break;
        }
        case "003": {
          goMsgCenter();
          break;
        }
      }
    }
    function goUserCenter() {
      common_vendor.index.navigateTo({
        url: "/pages/user-center/user-center"
      });
    }
    function goMsgCenter() {
      common_vendor.index.navigateTo({
        url: "/pages/msg-page/msg-page"
      });
    }
    return {
      goUserCenter,
      goMsgCenter,
      myNavList,
      goOtherPage
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($setup.myNavList, (tabItem, k0, i0) => {
      return {
        a: tabItem.tabIcon,
        b: common_vendor.t(tabItem.tabName),
        c: tabItem.id,
        d: common_vendor.o(($event) => $setup.goOtherPage(tabItem.id), tabItem.id)
      };
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uniappPro/gdutCom/components/my-features-card/my-features-card.vue"]]);
wx.createComponent(Component);
