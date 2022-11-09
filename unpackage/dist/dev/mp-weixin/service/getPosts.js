"use strict";
var common_vendor = require("../common/vendor.js");
require("../store/index.js");
function getPosts() {
  return common_vendor.index.request({
    url: "https://api.tianapi.com/startup/index",
    data: {
      key: "ce110e048b4fcf9f199f532058960a9",
      num: 10
    }
  });
}
exports.getPosts = getPosts;
