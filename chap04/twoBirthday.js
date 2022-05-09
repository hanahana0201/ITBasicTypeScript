"use strict";
exports.__esModule = true;
var a = Math.round(Math.random() * 68 + 1950);
var b = Math.round(Math.random() * 68 + 1950);
console.log("A\u3055\u3093\u306F\u3001".concat(a, "\u5E74\u751F\u307E\u308C\u3067\u3059\u3002"));
console.log("B\u3055\u3093\u306F\u3002".concat(b, "\u5E74\u751F\u307E\u308C\u3067\u3059\u3002"));
if (a > 1988 && b > 1988) {
    console.log("AさんもBさんも平成生まれ");
}
else if (a > 1988 || b > 1988) {
    console.log("どちらかが平成生まれ");
}
else {
    console.log("両方とも昭和生まれ");
}
