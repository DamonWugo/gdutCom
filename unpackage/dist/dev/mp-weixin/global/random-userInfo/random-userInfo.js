"use strict";
const randomUserInfo = [
  {
    uid: 0,
    nickName: "\u5E7F\u5DE5\u5434\u5F66\u7956",
    gender: 0,
    avatarUrl: "https://img0.baidu.com/it/u=277867157,611494480&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400"
  },
  {
    uid: 1,
    nickName: "\u5E7F\u5DE5\u9648\u5955\u8FC5",
    gender: 0,
    avatarUrl: "https://img1.baidu.com/it/u=1086402151,1567409934&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200"
  },
  {
    uid: 2,
    nickName: "\u5E7F\u5DE5\u5144\u5F1F",
    gender: 0,
    avatarUrl: "https://img1.baidu.com/it/u=1490370654,2202304226&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200"
  },
  {
    uid: 3,
    nickName: "\u5E7F\u5DE5\u59D0\u59B9",
    gender: 0,
    avatarUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fm.imeitou.com%2Fuploads%2Fallimg%2F2018100616%2Fnlulpkfllnr.jpg&refer=http%3A%2F%2Fm.imeitou.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670655102&t=63f7f6109f98f0b31cf5f9a7314fcad1"
  },
  {
    uid: 4,
    nickName: "\u5E7F\u5DE5\u5C0F\u767D",
    gender: 0,
    avatarUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.dtstatic.com%2Fuploads%2Fblog%2F202109%2F11%2F20210911020506_a27b1.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.dtstatic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670655102&t=28636b55c0333c3c6abefd4e8bb28b32"
  },
  {
    uid: 5,
    nickName: "\u5E7F\u5DE5\u6821\u82B1",
    gender: 0,
    avatarUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi1.go2yd.com%2Fimage.php%3Furl%3D0SlaFQAIwl&refer=http%3A%2F%2Fi1.go2yd.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670655102&t=f27df1a610273754bc03c748cdb2fc5e"
  },
  {
    uid: 6,
    nickName: "\u597D\u6C14\u54E6\u6211",
    gender: 0,
    avatarUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.woyaogexing.com%2F2018%2F03%2F26%2F251b47b8e9a1b597%21400x400_big.jpg&refer=http%3A%2F%2Fimg2.woyaogexing.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670655102&t=58b29389b3a1ec74bbb401d76184f890"
  },
  {
    uid: 7,
    nickName: "\u9F99\u6D1E\u5973\u540C\u5B66",
    gender: 0,
    avatarUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fbb67653629c4c2a038bebac99f7b2a4e976fcc4b.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670655953&t=f165f63f0edc7280f23863eb157abb95"
  },
  {
    uid: 8,
    nickName: "\u5E7F\u5DE5\u5927\u8033\u6735\u56FE\u56FE",
    gender: 0,
    avatarUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp445018751.jpg&refer=http%3A%2F%2Fimg3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670655953&t=ec6fabfe67decebf35ba7c93c85c161c"
  },
  {
    uid: 9,
    nickName: "\u718A\u732B\u5728\u5E7F\u5DE5",
    gender: 0,
    avatarUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F52%2F54%2F8d%2F52548d2718b6e09416886c6f460d8912.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1670655981&t=44f39ce7173a1b97f258e55e35fe0413"
  },
  {
    uid: 10,
    nickName: "\u5E7F\u5DE5\u675C\u5170\u7279",
    gender: 0,
    avatarUrl: "https://img1.baidu.com/it/u=710636447,1719466874&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
  }
];
exports.randomUserInfo = randomUserInfo;
