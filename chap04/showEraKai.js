"use strict";
exports.__esModule = true;
var year = Math.round(Math.random() * 120 + 1901);
if (year < 1912) {
    console.log("".concat(year, "\u5E74\u306F\u3001\u660E\u6CBB").concat(year - 1867, "\u5E74\u3067\u3059\u3002"));
}
else if (year < 1926) {
    console.log("".concat(year, "\u5E74\u306F\u3001\u5927\u6B63").concat(year - 1911, "\u5E74\u3067\u3059\u3002"));
}
else if (year < 1989) {
    console.log("".concat(year, "\u5E74\u306F\u3001\u662D\u548C").concat(year - 1925, "\u5E74\u3067\u3059\u3002"));
}
else if (year < 2019) {
    console.log("".concat(year, "\u5E74\u306F\u3001\u5E73\u6210").concat(year - 1988, "\u5E74\u3067\u3059\u3002"));
}
else {
    console.log("".concat(year, "\u5E74\u306F\u3001\u4EE4\u548C").concat(year - 2018, "\u5E74\u3067\u3059\u3002"));
}
