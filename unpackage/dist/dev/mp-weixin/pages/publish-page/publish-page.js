"use strict";
var common_vendor = require("../../common/vendor.js");
var store_index = require("../../store/index.js");
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
    let postValue = common_vendor.ref("");
    let navName = common_vendor.ref("\u5168\u90E8");
    let post = common_vendor.reactive({
      post: {}
    });
    function uploadImg() {
      common_vendor.index.chooseImage({
        success: (chooseImageRes) => {
          chooseImageRes.tempFilePaths;
          console.log("212", chooseImageRes);
        }
      });
    }
    function selectClaassicItem(id, tabName) {
      navIndex.value = id;
      navName.value = tabName;
    }
    function publishPost() {
      console.log("postValue", postValue);
      post.post = {
        id: Date.now(),
        ctime: Date.now(),
        title: store_index.store.state.loginAbout.userInfo.nickName,
        description: postValue.value,
        picUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbig5.wallcoo.com%2Fsport%2FNBA_Denver_Nuggets%2Fwallpapers%2F1280x1024%2Fkleizawallpaper06.jpg&refer=http%3A%2F%2Fbig5.wallcoo.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1669725010&t=013453ad445c92b2ecb8c51f9cf21988",
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
      }, 500);
    }
    function select(e) {
      console.log("e", e);
    }
    function progress(e) {
      console.log("ee", e);
    }
    return {
      post,
      postValue,
      tabList,
      navIndex,
      selectClaassicItem,
      publishPost,
      uploadImg,
      select,
      progress
    };
  }
};
if (!Array) {
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  _easycom_uni_file_picker2();
}
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
if (!Math) {
  _easycom_uni_file_picker();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: -1,
    b: $setup.postValue,
    c: common_vendor.o(($event) => $setup.postValue = $event.detail.value),
    d: common_vendor.o($setup.select),
    e: common_vendor.o($setup.progress),
    f: common_vendor.p({
      limit: "9",
      title: "\u8BF7\u9009\u62E9\u56FE\u7247(\u6700\u591A9\u5F20)",
      ["auto-upload"]: false
    }),
    g: common_vendor.f($setup.tabList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.tabName),
        b: item.id,
        c: common_vendor.o(($event) => $setup.selectClaassicItem(item.id, item.tabName), item.id),
        d: common_vendor.n(item.id == $setup.navIndex ? "avtive" : "")
      };
    }),
    h: common_vendor.o((...args) => $setup.publishPost && $setup.publishPost(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uniappPro/gdutCom/pages/publish-page/publish-page.vue"]]);
wx.createPage(MiniProgramPage);
