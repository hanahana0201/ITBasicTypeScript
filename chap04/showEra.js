"use strict";
exports.__esModule = true;
var year = Math.round(Math.random() * 120 + 1901);
if (year < 1912) {
    console.log("".concat(year, "\u306F\u3001\u660E\u6CBB\u3067\u3059\u3002"));
}
else if (year < 1928) {
    console.log("".concat(year, "\u306F\u3001\u5927\u6B63\u3067\u3059\u3002"));
}
else if (year < 1989) {
    console.log("".concat(year, "\u306F\u3001\u662D\u548C\u3067\u3059\u3002"));
}
else if (year < 2019) {
    console.log("".concat(year, "\u306F\u3001\u5E73\u6210\u3067\u3059\u3002"));
}
else {
    console.log("".concat(year, "\u306F\u3001\u4EE4\u548C\u3067\u3059\u3002"));
}
