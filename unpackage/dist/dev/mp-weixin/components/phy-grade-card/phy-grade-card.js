"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  props: ["bmiScore", "testScore"],
  setup(props) {
    const bmiText = common_vendor.computed$1(() => {
      if (props.bmiScore < 23.9) {
        return "\u6B63\u5E38";
      } else if (props.bmiScore < 28) {
        return "\u8D85\u91CD";
      } else {
        return "\u80A5\u80D6";
      }
    });
    return {
      bmiText
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t(isNaN($props.bmiScore) ? 0 : $props.bmiScore.toFixed(1)),
    b: common_vendor.t($setup.bmiText),
    c: common_vendor.t($props.testScore.toFixed(1))
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-33aa3104"], ["__file", "D:/uniappPro/gdutCom/components/phy-grade-card/phy-grade-card.vue"]]);
wx.createComponent(Component);
