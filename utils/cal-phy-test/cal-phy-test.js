var bmidata = {
  name: "体重指数",
  unit: "千克/米²",
  weight: 0.15,
  score: [100, 80, 80, 60],
  grade: ["正常", "低体重", "超重", "肥胖"],
  userInput: false,
  performance: {
    male: {
      university: [
        [
          [17.9, 23.9],
          [0, 17.8],
          [24.0, 27.9],
          [28.0, 100],
        ],
        [
          [17.9, 23.9],
          [0, 17.8],
          [24.0, 27.9],
          [28.0, 100],
        ],
        [
          [17.9, 23.9],
          [0, 17.8],
          [24.0, 27.9],
          [28.0, 100],
        ],
        [
          [17.9, 23.9],
          [0, 17.8],
          [24.0, 27.9],
          [28.0, 100],
        ],
      ],
    },
    female: {
      university: [
        [
          [17.2, 23.9],
          [0, 17.1],
          [24.0, 27.9],
          [28.0, 100],
        ],
        [
          [17.2, 23.9],
          [0, 17.1],
          [24.0, 27.9],
          [28.0, 100],
        ],
        [
          [17.2, 23.9],
          [0, 17.1],
          [24.0, 27.9],
          [28.0, 100],
        ],
        [
          [17.2, 23.9],
          [0, 17.1],
          [24.0, 27.9],
          [28.0, 100],
        ],
      ],
    },
  },
};
var capacitydata = {
  name: "肺活量",
  unit: "毫升",
  weight: 0.15,
  performance: {
    male: {
      university: [
        [
          5040, 4920, 4800, 4550, 4300, 4180, 4060, 3940, 3820, 3700, 3580,
          3460, 3340, 3220, 3100, 2940, 2780, 2620, 2460, 2300,
        ],
        [
          5040, 4920, 4800, 4550, 4300, 4180, 4060, 3940, 3820, 3700, 3580,
          3460, 3340, 3220, 3100, 2940, 2780, 2620, 2460, 2300,
        ],
        [
          5140, 5020, 4900, 4650, 4400, 4280, 4160, 4040, 3920, 3800, 3680,
          3560, 3440, 3320, 3200, 3030, 2860, 2690, 2520, 2350,
        ],
        [
          5140, 5020, 4900, 4650, 4400, 4280, 4160, 4040, 3920, 3800, 3680,
          3560, 3440, 3320, 3200, 3030, 2860, 2690, 2520, 2350,
        ],
      ],
    },
    female: {
      university: [
        [
          3400, 3350, 3300, 3150, 3000, 2900, 2800, 2700, 2600, 2500, 2400,
          2300, 2200, 2100, 2000, 1960, 1920, 1880, 1840, 1800,
        ],
        [
          3400, 3350, 3300, 3150, 3000, 2900, 2800, 2700, 2600, 2500, 2400,
          2300, 2200, 2100, 2000, 1960, 1920, 1880, 1840, 1800,
        ],
        [
          3450, 3400, 3350, 3200, 3050, 2950, 2850, 2750, 2650, 2550, 2450,
          2350, 2250, 2150, 2050, 2010, 1970, 1930, 1890, 1850,
        ],
        [
          3450, 3400, 3350, 3200, 3050, 2950, 2850, 2750, 2650, 2550, 2450,
          2350, 2250, 2150, 2050, 2010, 1970, 1930, 1890, 1850,
        ],
      ],
    },
  },
};
var commondata = {
  score: [
    100, 95, 90, 85, 80, 78, 76, 74, 72, 70, 68, 66, 64, 62, 60, 50, 40, 30, 20,
    10,
  ],
  grade: {
    优秀: [90, "max"],
    良好: [80, 85],
    及格: [60, 78],
    不及格: ["min", 50],
  },
  lowerIsBetter: false,
  userInput: true,
};
var pull_updata = {
  name: "引体向上",
  unit: "次",
  weight: 0.1,
  performance: {
    male: {
      university: [
        [
          19,
          18,
          17,
          16,
          15,
          null,
          14,
          null,
          13,
          null,
          12,
          null,
          11,
          null,
          10,
          9,
          8,
          7,
          6,
          5,
        ],
        [
          19,
          18,
          17,
          16,
          15,
          null,
          14,
          null,
          13,
          null,
          12,
          null,
          11,
          null,
          10,
          9,
          8,
          7,
          6,
          5,
        ],
        [
          20,
          19,
          18,
          17,
          16,
          null,
          15,
          null,
          14,
          null,
          13,
          null,
          12,
          null,
          11,
          10,
          9,
          8,
          7,
          6,
        ],
        [
          20,
          19,
          18,
          17,
          16,
          null,
          15,
          null,
          14,
          null,
          13,
          null,
          12,
          null,
          11,
          10,
          9,
          8,
          7,
          6,
        ],
      ],
    },
  },
  bonus: {
    score: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    performance: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  },
};
var race_50data = {
  name: "50米跑",
  unit: "秒",
  lowerIsBetter: true,
  weight: 0.2,
  performance: {
    male: {
      university: [
        [
          6.7, 6.8, 6.9, 7.0, 7.1, 7.3, 7.5, 7.7, 7.9, 8.1, 8.3, 8.5, 8.7, 8.9,
          9.1, 9.3, 9.5, 9.7, 9.9, 10.1,
        ],
        [
          6.7, 6.8, 6.9, 7.0, 7.1, 7.3, 7.5, 7.7, 7.9, 8.1, 8.3, 8.5, 8.7, 8.9,
          9.1, 9.3, 9.5, 9.7, 9.9, 10.1,
        ],
        [
          6.6, 6.7, 6.8, 6.9, 7.0, 7.2, 7.4, 7.6, 7.8, 8.0, 8.2, 8.4, 8.6, 8.8,
          9.0, 9.2, 9.4, 9.6, 9.8, 10.0,
        ],
        [
          6.6, 6.7, 6.8, 6.9, 7.0, 7.2, 7.4, 7.6, 7.8, 8.0, 8.2, 8.4, 8.6, 8.8,
          9.0, 9.2, 9.4, 9.6, 9.8, 10.0,
        ],
      ],
    },
    female: {
      university: [
        [
          7.5, 7.6, 7.7, 8.0, 8.3, 8.5, 8.7, 8.9, 9.1, 9.3, 9.5, 9.7, 9.9, 10.1,
          10.3, 10.5, 10.7, 10.9, 11.1, 11.3,
        ],
        [
          7.5, 7.6, 7.7, 8.0, 8.3, 8.5, 8.7, 8.9, 9.1, 9.3, 9.5, 9.7, 9.9, 10.1,
          10.3, 10.5, 10.7, 10.9, 11.1, 11.3,
        ],
        [
          7.4, 7.5, 7.6, 7.9, 8.2, 8.4, 8.6, 8.8, 9.0, 9.2, 9.4, 9.6, 9.8, 10.0,
          10.2, 10.4, 10.6, 10.8, 11.0, 11.2,
        ],
        [
          7.4, 7.5, 7.6, 7.9, 8.2, 8.4, 8.6, 8.8, 9.0, 9.2, 9.4, 9.6, 9.8, 10.0,
          10.2, 10.4, 10.6, 10.8, 11.0, 11.2,
        ],
      ],
    },
  },
};
var race_800data = {
  name: "800米跑",
  unit: "秒",
  weight: 0.2,
  lowerIsBetter: true,
  performance: {
    female: {
      university: [
        [
          198, 204, 210, 217, 224, 229, 234, 239, 244, 249, 254, 259, 264, 269,
          274, 284, 294, 304, 314, 324,
        ],
        [
          198, 204, 210, 217, 224, 229, 234, 239, 244, 249, 254, 259, 264, 269,
          274, 284, 294, 304, 314, 324,
        ],
        [
          196, 202, 208, 215, 222, 227, 232, 237, 242, 247, 252, 257, 262, 267,
          272, 282, 292, 302, 312, 322,
        ],
        [
          196, 202, 208, 215, 222, 227, 232, 237, 242, 247, 252, 257, 262, 267,
          272, 282, 292, 302, 312, 322,
        ],
      ],
    },
  },
  bonus: {
    score: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    performance: [-50, -45, -40, -35, -30, -25, -20, -15, -10, -5],
  },
};
var race_1000data = {
  name: "1000米跑",
  unit: "秒",
  weight: 0.2,
  lowerIsBetter: true,
  performance: {
    male: {
      university: [
        [
          197, 202, 207, 214, 222, 227, 232, 237, 242, 247, 252, 257, 262, 267,
          272, 292, 312, 332, 352, 372,
        ],
        [
          197, 202, 207, 214, 222, 227, 232, 237, 242, 247, 252, 257, 262, 267,
          272, 292, 312, 332, 352, 372,
        ],
        [
          195, 200, 205, 212, 220, 225, 230, 235, 240, 245, 250, 255, 260, 265,
          270, 290, 310, 330, 350, 370,
        ],
        [
          195, 200, 205, 212, 220, 225, 230, 235, 240, 245, 250, 255, 260, 265,
          270, 290, 310, 330, 350, 370,
        ],
      ],
    },
  },
  bonus: {
    score: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    performance: [-35, -32, -29, -26, -23, -20, -16, -12, -8, -4],
  },
};
var sit_and_reachdata = {
  name: "坐位体前屈",
  unit: "厘米",
  weight: 0.1,
  performance: {
    male: {
      university: [
        [
          24.9, 23.1, 21.3, 19.5, 17.7, 16.3, 14.9, 13.5, 12.1, 10.7, 9.3, 7.9,
          6.5, 5.1, 3.7, 2.7, 1.7, 0.7, -0.3, -1.3,
        ],
        [
          24.9, 23.1, 21.3, 19.5, 17.7, 16.3, 14.9, 13.5, 12.1, 10.7, 9.3, 7.9,
          6.5, 5.1, 3.7, 2.7, 1.7, 0.7, -0.3, -1.3,
        ],
        [
          25.1, 23.3, 21.5, 19.9, 18.2, 16.8, 15.4, 14.0, 12.6, 11.2, 9.8, 8.4,
          7.0, 5.6, 4.2, 3.2, 2.2, 1.2, 0.2, -0.8,
        ],
        [
          25.1, 23.3, 21.5, 19.9, 18.2, 16.8, 15.4, 14.0, 12.6, 11.2, 9.8, 8.4,
          7.0, 5.6, 4.2, 3.2, 2.2, 1.2, 0.2, -0.8,
        ],
      ],
    },
    female: {
      university: [
        [
          25.8, 24.0, 22.2, 20.6, 19.0, 17.7, 16.4, 15.1, 13.8, 12.5, 11.2, 9.9,
          8.6, 7.3, 6.0, 5.2, 4.4, 3.6, 2.8, 2.0,
        ],
        [
          25.8, 24.0, 22.2, 20.6, 19.0, 17.7, 16.4, 15.1, 13.8, 12.5, 11.2, 9.9,
          8.6, 7.3, 6.0, 5.2, 4.4, 3.6, 2.8, 2.0,
        ],
        [
          26.3, 24.4, 22.4, 21.0, 19.5, 18.2, 16.9, 15.6, 14.3, 13.0, 11.7,
          10.4, 9.1, 7.8, 6.5, 5.7, 4.9, 4.1, 3.3, 2.5,
        ],
        [
          26.3, 24.4, 22.4, 21.0, 19.5, 18.2, 16.9, 15.6, 14.3, 13.0, 11.7,
          10.4, 9.1, 7.8, 6.5, 5.7, 4.9, 4.1, 3.3, 2.5,
        ],
      ],
    },
  },
};
var sit_updata = {
  name: "仰卧起坐",
  unit: "次",
  performance: {
    female: {
      university: [
        [
          56, 54, 52, 49, 46, 44, 42, 40, 38, 36, 34, 32, 30, 28, 26, 24, 22,
          20, 18, 16,
        ],
        [
          56, 54, 52, 49, 46, 44, 42, 40, 38, 36, 34, 32, 30, 28, 26, 24, 22,
          20, 18, 16,
        ],
        [
          57, 55, 53, 50, 47, 45, 43, 41, 39, 37, 35, 33, 31, 29, 27, 25, 23,
          21, 19, 17,
        ],
        [
          57, 55, 53, 50, 47, 45, 43, 41, 39, 37, 35, 33, 31, 29, 27, 25, 23,
          21, 19, 17,
        ],
      ],
    },
  },
  bonus: {
    limit: {
      gender: "male",
      stage: ["junior", "high", "university"],
    },
    score: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    performance: [13, 12, 11, 10, 9, 8, 7, 6, 4, 2],
  },
};
var standing_long_jumpdata = {
  name: "立定跳远",
  unit: "厘米",
  weight: 0.1,
  performance: {
    male: {
      university: [
        [
          2.73, 2.68, 2.63, 2.56, 2.48, 2.44, 2.4, 2.36, 2.32, 2.28, 2.24, 2.2,
          2.16, 2.12, 2.08, 2.03, 1.98, 1.93, 1.88, 1.83,
        ],
        [
          2.73, 2.68, 2.63, 2.56, 2.48, 2.44, 2.4, 2.36, 2.32, 2.28, 2.24, 2.2,
          2.16, 2.12, 2.08, 2.03, 1.98, 1.93, 1.88, 1.83,
        ],
        [
          2.75, 2.7, 2.65, 2.58, 2.5, 2.46, 2.42, 2.38, 2.34, 2.3, 2.26, 2.22,
          2.18, 2.14, 2.1, 2.05, 2.0, 1.95, 1.9, 1.85,
        ],
        [
          2.75, 2.7, 2.65, 2.58, 2.5, 2.46, 2.42, 2.38, 2.34, 2.3, 2.26, 2.22,
          2.18, 2.14, 2.1, 2.05, 2.0, 1.95, 1.9, 1.85,
        ],
      ],
    },
    female: {
      university: [
        [
          2.07, 2.01, 1.95, 1.88, 1.81, 1.78, 1.75, 1.72, 1.69, 1.66, 1.63, 1.6,
          1.57, 1.54, 1.51, 1.46, 1.41, 1.36, 1.31, 1.26,
        ],
        [
          2.07, 2.01, 1.95, 1.88, 1.81, 1.78, 1.75, 1.72, 1.69, 1.66, 1.63, 1.6,
          1.57, 1.54, 1.51, 1.46, 1.41, 1.36, 1.31, 1.26,
        ],
        [
          2.08, 2.02, 1.96, 1.89, 1.82, 1.79, 1.76, 1.73, 1.7, 1.67, 1.64, 1.61,
          1.58, 1.55, 1.52, 1.47, 1.42, 1.37, 1.32, 1.27,
        ],
        [
          2.08, 2.02, 1.96, 1.89, 1.82, 1.79, 1.76, 1.73, 1.7, 1.67, 1.64, 1.61,
          1.58, 1.55, 1.52, 1.47, 1.42, 1.37, 1.32, 1.27,
        ],
      ],
    },
  },
};
var calGrade = 0;
var sex = 0;
var grade = 0;
var height = 0;
var weight = 0;
var capacityVal = 0;
var sit_and_reachVal = 0;
var jumpVal = 0;
var race50Val = 0;
var otherVal = 0; // 引体向上或者仰卧起坐
var race1000Val = 0;
var race800Val = 0;
var BMI = 0;
// -------------------------------------------
var capacityGrade = 0;
var sit_and_reachGrade = 0;
var jumpGradeGrade = 0;
var race50Grade = 0;
var pull_upGrade = 0;
var race1000Grade = 0;
var sit_UpGrade = 0;
var race800Grade = 0;
var BMIGrade = 0;
//-----------------------------------------

// 初始化数据
var race_50 = new Array(2);
var sit_and_reach = new Array(2);
var standing_long_jump = new Array(2);
var race_long = new Array(2);
var other = new Array(2);
var capacity = new Array(2);
var bmi = new Array(2);
var bmigradesubsection, bmiscoresubsection;
var race_50weight,
  sit_and_reachweight,
  standing_long_jumpweight,
  race_longweight,
  otherweight,
  capacityweight,
  bmiweight;
var commonscore;
var max = 0,
  bmiunit,
  bmigrade;

race_50[0] = new Array(4);
race_50[1] = new Array(4);
sit_and_reach[0] = new Array(4);
sit_and_reach[1] = new Array(4);
standing_long_jump[0] = new Array(4);
standing_long_jump[1] = new Array(4);
race_long[0] = new Array(4);
race_long[1] = new Array(4);
other[0] = new Array(4);
other[1] = new Array(4);
capacity[0] = new Array(4);
capacity[1] = new Array(4);
bmi[0] = new Array(4);
bmi[1] = new Array(4);

for (
  var i = race_50data["performance"]["female"]["university"].length - 1;
  i >= 0;
  i--
) {
  race_50[1][i] = race_50data["performance"]["female"]["university"][i];
}
for (
  var i = race_50data["performance"]["male"]["university"].length - 1;
  i >= 0;
  i--
) {
  race_50[0][i] = race_50data["performance"]["male"]["university"][i];
}
race_50weight = race_50data["weight"];

for (
  var i = sit_and_reachdata["performance"]["female"]["university"].length - 1;
  i >= 0;
  i--
) {
  sit_and_reach[1][i] =
    sit_and_reachdata["performance"]["female"]["university"][i];
}
for (
  var i = sit_and_reachdata["performance"]["male"]["university"].length - 1;
  i >= 0;
  i--
) {
  sit_and_reach[0][i] =
    sit_and_reachdata["performance"]["male"]["university"][i];
}
sit_and_reachweight = sit_and_reachdata["weight"];

for (
  var i =
    standing_long_jumpdata["performance"]["female"]["university"].length - 1;
  i >= 0;
  i--
) {
  standing_long_jump[1][i] =
    standing_long_jumpdata["performance"]["female"]["university"][i];
}
for (
  var i =
    standing_long_jumpdata["performance"]["male"]["university"].length - 1;
  i >= 0;
  i--
) {
  standing_long_jump[0][i] =
    standing_long_jumpdata["performance"]["male"]["university"][i];
}
standing_long_jumpweight = standing_long_jumpdata["weight"];

for (
  var i = race_800data["performance"]["female"]["university"].length - 1;
  i >= 0;
  i--
) {
  race_long[1][i] = race_800data["performance"]["female"]["university"][i];
}
for (
  var i = race_1000data["performance"]["male"]["university"].length - 1;
  i >= 0;
  i--
) {
  race_long[0][i] = race_1000data["performance"]["male"]["university"][i];
}
race_longweight = race_1000data["weight"];

for (
  var i = sit_updata["performance"]["female"]["university"].length - 1;
  i >= 0;
  i--
) {
  other[1][i] = sit_updata["performance"]["female"]["university"][i];
}
for (
  var i = pull_updata["performance"]["male"]["university"].length - 1;
  i >= 0;
  i--
) {
  other[0][i] = pull_updata["performance"]["male"]["university"][i];
}
otherweight = pull_updata["weight"];

for (
  var i = capacitydata["performance"]["female"]["university"].length - 1;
  i >= 0;
  i--
) {
  capacity[1][i] = capacitydata["performance"]["female"]["university"][i];
}
for (
  var i = capacitydata["performance"]["male"]["university"].length - 1;
  i >= 0;
  i--
) {
  capacity[0][i] = capacitydata["performance"]["male"]["university"][i];
}
capacityweight = capacitydata["weight"];

for (
  var i = bmidata["performance"]["female"]["university"].length - 1;
  i >= 0;
  i--
) {
  bmi[1][i] = bmidata["performance"]["female"]["university"][i];
}
for (
  var i = bmidata["performance"]["male"]["university"].length - 1;
  i >= 0;
  i--
) {
  bmi[0][i] = bmidata["performance"]["male"]["university"][i];
}
bmiscoresubsection = bmidata["score"];
bmigradesubsection = bmidata["grade"];
bmiweight = bmidata["weight"];
commonscore = commondata["score"];

// constructor
function cal(
  sex,
  grade,
  heightIn,
  weightIn,
  capacityIn,
  sit_reach,
  jump,
  race50,
  alterVar1,
  alterVar2
) {
  this.sex = sex;
  this.grade = grade;
  this.height = heightIn;
  this.weight = weightIn;
  this.capacityVal = capacityIn;
  this.sit_and_reachVal = sit_reach;
  this.jumpVal = jump;
  this.race50Val = race50;
  this.longRaceVal = alterVar2;
  this.otherVal = alterVar1;

  // 计算成绩
  this.getCalGrade = function () {
    console.log(race_50);
    console.log(sit_and_reach);
    console.log(standing_long_jump);
    console.log(capacity);
    console.log(bmi);
    console.log("性别--------" + this.sex);
    console.log("年级-------" + this.grade);
    console.log("身高----------------" + this.height);
    console.log("体重----------------" + this.weight);
    console.log("肺活量----------" + this.capacityVal);
    console.log("坐立前去-------" + this.sit_and_reachVal);
    console.log("跳远-------" + this.jumpVal);
    console.log("50m-----" + this.race50Val);
    console.log("长跑----------" + this.longRaceVal);
    console.log("引体向上/仰卧起坐" + this.otherVal);
    var max = 0;
    // 计算50m
    for (var i = 0; i <= race_50[this.sex][this.grade].length - 2; i++) {
      if (parseFloat(this.race50Val) == 0) {
        break;
      }
      if (
        parseFloat(this.race50Val) >
          parseFloat(race_50[this.sex][this.grade][i]) &&
        parseFloat(this.race50Val) <=
          parseFloat(race_50[this.sex][this.grade][i + 1])
      ) {
        max += parseFloat(commonscore[i + 1]) * parseFloat(race_50weight);
        console.log(
          "50m" + parseFloat(commonscore[i + 1]) * parseFloat(race_50weight)
        );
        break;
      } else if (
        parseFloat(this.race50Val) <= race_50[this.sex][this.grade][0]
      ) {
        max += parseFloat(commonscore[0]) * parseFloat(race_50weight);
        console.log(
          "50m" + parseFloat(commonscore[0]) * parseFloat(race_50weight)
        );
        break;
      } else if (
        parseFloat(this.race50Val) >
        race_50[this.sex][this.grade][race_50[this.sex][this.grade].length - 1]
      ) {
        console.log("50m" + 0);
        break;
      }
    }
    //console.log("max:" + max);

    for (var i = 0; i <= sit_and_reach[this.sex][this.grade].length - 2; i++) {
      if (parseFloat(this.sit_and_reachVal) == 0) {
        break;
      }
      if (
        parseFloat(this.sit_and_reachVal) <
          parseFloat(sit_and_reach[this.sex][this.grade][i]) &&
        parseFloat(this.sit_and_reachVal) >=
          parseFloat(sit_and_reach[this.sex][this.grade][i + 1])
      ) {
        max += parseFloat(commonscore[i + 1]) * parseFloat(sit_and_reachweight);
        console.log(
          "坐体前屈" +
            parseFloat(commonscore[i + 1]) * parseFloat(sit_and_reachweight)
        );
        break;
      } else if (
        parseFloat(this.sit_and_reachVal) >=
        sit_and_reach[this.sex][this.grade][0]
      ) {
        max += parseFloat(commonscore[0]) * parseFloat(sit_and_reachweight);
        console.log(
          "坐体前屈" +
            parseFloat(commonscore[0]) * parseFloat(sit_and_reachweight)
        );
        break;
      } else if (
        parseFloat(this.sit_and_reachVal) <
        sit_and_reach[this.sex][this.grade][
          sit_and_reach[this.sex][this.grade].length - 1
        ]
      ) {
        console.log("坐体前屈" + "0");
        break;
      }
    }
    //console.log("max:" + max);

    for (
      var i = 0;
      i <= standing_long_jump[this.sex][this.grade].length - 2;
      i++
    ) {
      if (
        parseFloat(this.jumpVal) <
          parseFloat(standing_long_jump[this.sex][this.grade][i]) &&
        parseFloat(this.jumpVal) >=
          parseFloat(standing_long_jump[this.sex][this.grade][i + 1])
      ) {
        max +=
          parseFloat(commonscore[i]) * parseFloat(standing_long_jumpweight);
        console.log(
          "跳远" +
            parseFloat(commonscore[i]) * parseFloat(standing_long_jumpweight)
        );
        break;
      } else if (
        parseFloat(this.jumpVal) >= standing_long_jump[this.sex][this.grade][0]
      ) {
        max +=
          parseFloat(commonscore[0]) * parseFloat(standing_long_jumpweight);
        console.log(
          "跳远" +
            parseFloat(commonscore[0]) * parseFloat(standing_long_jumpweight)
        );
        break;
      } else if (
        parseFloat(this.jumpVal) <
        standing_long_jump[this.sex][this.grade][
          standing_long_jump[this.sex][this.grade].length - 1
        ]
      ) {
        console.log("跳远" + 0);
        break;
      }
    }
    //console.log("max:" + max);

    for (var i = 0; i <= race_long[this.sex][this.grade].length - 2; i++) {
      if (parseFloat(this.longRaceVal) == 0) {
        break;
      }
      if (
        parseFloat(this.longRaceVal) >
          parseFloat(race_long[this.sex][this.grade][i]) &&
        parseFloat(this.longRaceVal) <=
          parseFloat(race_long[this.sex][this.grade][i + 1])
      ) {
        max += parseFloat(commonscore[i + 1]) * parseFloat(race_longweight);
        console.log(
          "长跑" + parseFloat(commonscore[i + 1]) * parseFloat(race_longweight)
        );
        break;
      } else if (
        parseFloat(this.longRaceVal) <= race_long[this.sex][this.grade][0]
      ) {
        max += parseFloat(commonscore[0]) * parseFloat(race_longweight);
        console.log(
          "长跑" + parseFloat(commonscore[0]) * parseFloat(race_longweight)
        );
        break;
      } else if (
        parseFloat(this.longRaceVal) >
        race_long[this.sex][this.grade][
          race_long[this.sex][this.grade].length - 1
        ]
      ) {
        console.log("长跑" + 0);
        break;
      }
    }

    // console.log("max:" + max);
    for (var i = 0; i <= capacity[this.sex][this.grade].length - 2; i++) {
      if (
        parseFloat(this.capacityVal) <
          parseFloat(capacity[this.sex][this.grade][i]) &&
        parseFloat(this.capacityVal) >=
          parseFloat(capacity[this.sex][this.grade][i + 1])
      ) {
        max += parseFloat(commonscore[i + 1]) * parseFloat(capacityweight);
        console.log(
          "肺活量" + parseFloat(commonscore[i + 1]) * parseFloat(capacityweight)
        );
        break;
      } else if (
        parseFloat(this.capacityVal) >= capacity[this.sex][this.grade][0]
      ) {
        max += parseFloat(commonscore[0]) * parseFloat(capacityweight);
        console.log(
          "肺活量" + parseFloat(commonscore[0]) * parseFloat(capacityweight)
        );
        break;
      } else if (
        parseFloat(this.capacityVal) <
        capacity[this.sex][this.grade][
          capacity[this.sex][this.grade].length - 1
        ]
      ) {
        console.log("肺活量" + 0);
        break;
      }
    }

    //console.log("max:" + max);
    if (this.sex == 0) {
      console.log("男");
      for (var i = 0; i <= other[this.sex][this.grade].length - 2; i++) {
        if (
          parseFloat(this.otherVal) ==
          parseFloat(other[this.sex][this.grade][i])
        ) {
          max += parseFloat(commonscore[i]) * parseFloat(otherweight);
          console.log(
            "引体向上/仰卧起坐" +
              parseFloat(commonscore[i]) * parseFloat(otherweight)
          );
          break;
        } else if (
          parseFloat(this.otherVal) >= other[this.sex][this.grade][0]
        ) {
          max += parseFloat(commonscore[0]) * parseFloat(otherweight);
          console.log(
            "引体向上/仰卧起坐" +
              parseFloat(commonscore[0]) * parseFloat(otherweight)
          );
          break;
        } else if (
          parseFloat(this.otherVal) <
          other[this.sex][this.grade][other[this.sex][this.grade].length - 1]
        ) {
          console.log("引体向上/仰卧起坐" + 0);
          break;
        }
      }
    } else {
      console.log("女");
      for (var i = 0; i <= other[this.sex][this.grade].length - 2; i++) {
        if (
          parseFloat(this.otherVal) <=
            parseFloat(other[this.sex][this.grade][i]) &&
          parseFloat(this.otherVal) >=
            parseFloat(other[this.sex][this.grade][i + 1])
        ) {
          max += parseFloat(commonscore[i]) * parseFloat(otherweight);
          console.log(
            "引体向上/仰卧起坐" +
              parseFloat(commonscore[i]) * parseFloat(otherweight)
          );
          break;
        } else if (
          parseFloat(this.otherVal) >= other[this.sex][this.grade][0]
        ) {
          max += parseFloat(commonscore[0]) * parseFloat(otherweight);
          console.log(
            "引体向上/仰卧起坐" +
              parseFloat(commonscore[0]) * parseFloat(otherweight)
          );
          break;
        } else if (
          parseFloat(this.otherVal) <
          other[this.sex][this.grade][other[this.sex][this.grade].length - 1]
        ) {
          console.log("引体向上/仰卧起坐" + 0);
          break;
        }
      }
    }
    // BMI指数
    if (this.height == 0) {
      bmiunit = 0;
    } else {
      bmiunit = this.weight / Math.pow(this.height / 100, 2);
    }
    console.log("BMI" + bmiunit);
    for (var i = 0; i <= bmi[this.sex][this.grade].length - 2; i++) {
      if (parseFloat(bmiunit) == 0) {
        break;
      }
      if (
        parseFloat(bmiunit) >= parseFloat(bmi[this.sex][this.grade][i][0]) &&
        parseFloat(bmiunit) <= parseFloat(bmi[this.sex][this.grade][i][1])
      ) {
        bmigrade = bmiscoresubsection[i];
        max += bmigrade * bmiweight;
        console.log(bmigrade * bmiweight);
        break;
      }
    }
    console.log(max);
    if (max >= 100) {
      max = 100;
    }
    var calGrade = { calGrade: max, bmiunit: bmiunit.toFixed(1) };
    return calGrade;
  };
}

export default cal
