"use strict";
var common_vendor = require("../../common/vendor.js");
var store_index = require("../../store/index.js");
const _sfc_main = {
  props: ["isAutoFocus"],
  setup(props, context) {
    let keyWordHeight = common_vendor.ref(500);
    let isBtnDisabled = common_vendor.ref(true);
    let commentVal = common_vendor.ref("");
    const { userInfo } = store_index.store.state.loginAbout;
    common_vendor.onMounted(() => {
      common_vendor.index.onKeyboardHeightChange((res) => {
        keyWordHeight.value = res.height * 2;
        console.log(res.height);
      });
    });
    function sendComment() {
      context.emit("closeMask", commentVal.value);
    }
    return {
      keyWordHeight,
      sendComment,
      isBtnDisabled,
      commentVal,
      userInfo
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $setup.userInfo.avatarUrl,
    b: common_vendor.t($setup.userInfo.nickName),
    c: $props.isAutoFocus,
    d: $setup.commentVal,
    e: common_vendor.o(($event) => $setup.commentVal = $event.detail.value),
    f: $setup.commentVal.trim() === "" ? true : false,
    g: common_vendor.o((...args) => $setup.sendComment && $setup.sendComment(...args)),
    h: $setup.keyWordHeight + "rpx"
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uniappPro/gdutCom/components/do-commment-container/do-commment-container.vue"]]);
wx.createComponent(Component);
