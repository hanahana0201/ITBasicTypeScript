"use strict";
exports.__esModule = true;
var score = Math.round(Math.random() * 100);
console.log("\u70B9\u6570\u306F".concat(score, "\u3067\u3059"));
if (score >= 60) {
    console.log("C判定");
}
else if (score >= 70) {
    console.log("B判定");
}
else if (score >= 80) {
    console.log("A判定");
}
else {
    console.log("不合格");
}
console.log("判定終了");
