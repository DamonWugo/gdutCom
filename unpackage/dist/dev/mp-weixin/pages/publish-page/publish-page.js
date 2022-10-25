"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    let navIndex = common_vendor.ref("001");
    let tabList = common_vendor.reactive([
      {
        id: "001",
        tabName: "\u5168\u90E8"
      },
      {
        id: "002",
        tabName: "\u4E8C\u624B\u5E02\u573A"
      },
      {
        id: "003",
        tabName: "\u7EC4\u961F"
      },
      {
        id: "004",
        tabName: "\u5E7F\u544A"
      },
      {
        id: "005",
        tabName: "\u70ED\u699C"
      },
      {
        id: "006",
        tabName: "\u6700\u65B0"
      },
      {
        id: "007",
        tabName: "\u5916\u5356"
      },
      {
        id: "008",
        tabName: "\u5434\u603B\u554A"
      }
    ]);
    function selectClaassicItem(id) {
      navIndex.value = id;
    }
    return {
      tabList,
      navIndex,
      selectClaassicItem
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: -1,
    b: common_vendor.f($setup.tabList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.tabName),
        b: item.id,
        c: common_vendor.o(($event) => $setup.selectClaassicItem(item.id), item.id),
        d: common_vendor.n(item.id == $setup.navIndex ? "avtive" : "")
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uniappPro/gdutCom/pages/publish-page/publish-page.vue"]]);
wx.createPage(MiniProgramPage);
