"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_calPhyTest_calPhyTest = require("../../utils/cal-phy-test/cal-phy-test.js");
const _sfc_main = {
  setup() {
    const sexArr = common_vendor.reactive([{
      id: 0,
      sexText: "\u7537\u751F"
    }, {
      id: 1,
      sexText: "\u5973\u751F"
    }]);
    const gradeArr = common_vendor.reactive([
      {
        id: 0,
        gradeText: "\u5927\u4E00"
      },
      {
        id: 1,
        gradeText: "\u5927\u4E8C"
      },
      {
        id: 2,
        gradeText: "\u5927\u4E09"
      },
      {
        id: 3,
        gradeText: "\u5927\u56DB"
      }
    ]);
    let sexIndex = common_vendor.ref(0);
    let gradeIndex = common_vendor.ref(0);
    let height = common_vendor.ref("");
    let weight = common_vendor.ref("");
    let vitalCapacity = common_vendor.ref("");
    let sittingForwardFlexion = common_vendor.ref("");
    let standingLongJump = common_vendor.ref("");
    let fiftyMetersRun = common_vendor.ref("");
    let thouSandMetersRun = common_vendor.ref("");
    let eightHundredMetersRun = common_vendor.ref("");
    let pullUp = common_vendor.ref("");
    let abdominalCurl = common_vendor.ref("");
    let testScore = common_vendor.computed$1(() => {
      return new utils_calPhyTest_calPhyTest.cal(sexIndex.value, gradeIndex.value, Number(height.value), Number(weight.value), Number(vitalCapacity.value), Number(sittingForwardFlexion.value), Number(standingLongJump.value), Number(fiftyMetersRun.value), Number(pullUp.value), Number(thouSandMetersRun.value)).getCalGrade().calGrade;
    });
    let bmiScore = common_vendor.computed$1(() => {
      if (weight.value === "" || height.value === "") {
        return 0;
      }
      return Number(weight.value) / (Number(height.value) * 0.01 * 0.01 * Number(height.value));
    });
    function selectSex(id) {
      sexIndex.value = id;
    }
    function selectGrade(id) {
      gradeIndex.value = id;
    }
    return {
      sexArr,
      sexIndex,
      selectSex,
      gradeArr,
      selectGrade,
      gradeIndex,
      height,
      weight,
      vitalCapacity,
      sittingForwardFlexion,
      standingLongJump,
      fiftyMetersRun,
      thouSandMetersRun,
      eightHundredMetersRun,
      pullUp,
      abdominalCurl,
      testScore,
      bmiScore
    };
  }
};
if (!Array) {
  const _easycom_phy_grade_card2 = common_vendor.resolveComponent("phy-grade-card");
  _easycom_phy_grade_card2();
}
const _easycom_phy_grade_card = () => "../../components/phy-grade-card/phy-grade-card.js";
if (!Math) {
  _easycom_phy_grade_card();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      bmiScore: $setup.bmiScore,
      testScore: $setup.testScore
    }),
    b: common_vendor.f($setup.sexArr, (sexItem, k0, i0) => {
      return {
        a: common_vendor.t(sexItem.sexText),
        b: sexItem.id,
        c: common_vendor.n($setup.sexIndex == sexItem.id ? "active" : ""),
        d: common_vendor.o(($event) => $setup.selectSex(sexItem.id), sexItem.id)
      };
    }),
    c: common_vendor.f($setup.gradeArr, (gradeItem, k0, i0) => {
      return {
        a: common_vendor.t(gradeItem.gradeText),
        b: gradeItem.id,
        c: common_vendor.n($setup.gradeIndex == gradeItem.id ? "active" : ""),
        d: common_vendor.o(($event) => $setup.selectGrade(gradeItem.id), gradeItem.id)
      };
    }),
    d: $setup.height,
    e: common_vendor.o(($event) => $setup.height = $event.detail.value),
    f: $setup.weight,
    g: common_vendor.o(($event) => $setup.weight = $event.detail.value),
    h: $setup.vitalCapacity,
    i: common_vendor.o(($event) => $setup.vitalCapacity = $event.detail.value),
    j: $setup.sittingForwardFlexion,
    k: common_vendor.o(($event) => $setup.sittingForwardFlexion = $event.detail.value),
    l: $setup.standingLongJump,
    m: common_vendor.o(($event) => $setup.standingLongJump = $event.detail.value),
    n: $setup.fiftyMetersRun,
    o: common_vendor.o(($event) => $setup.fiftyMetersRun = $event.detail.value),
    p: common_vendor.t($setup.sexIndex === 0 ? "1000\u7C73\u8DD1" : "800\u7C73\u8DD1"),
    q: $setup.thouSandMetersRun,
    r: common_vendor.o(($event) => $setup.thouSandMetersRun = $event.detail.value),
    s: common_vendor.t($setup.sexIndex === 0 ? "\u5F15\u4F53\u5411\u4E0A" : "\u4EF0\u5367\u8D77\u5750"),
    t: $setup.pullUp,
    v: common_vendor.o(($event) => $setup.pullUp = $event.detail.value)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-184875c6"], ["__file", "D:/uniappPro/gdutCom/pages/physical-test-page/physical-test-page.vue"]]);
wx.createPage(MiniProgramPage);
