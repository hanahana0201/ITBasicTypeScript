"use strict";
exports.__esModule = true;
var year = Math.round(Math.random() * 70) + 1950;
if (year % 4 == 0) {
    console.log("".concat(year, "\u5E74\u306F\u958F\u5E74\u3067\u3059\u3002"));
}
else {
    console.log("".concat(year, "\u5E74\u306F\u958F\u5E74\u3067\u306F\u306A\u3044\u3002"));
}
