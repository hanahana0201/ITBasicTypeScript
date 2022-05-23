"use strict";
exports.__esModule = true;
console.log("Processing Start");
var num = Math.round(Math.random() * 10);
while (num != 9) {
    console.log("random num : ".concat(num));
    num = Math.round(Math.random() * 10);
}
console.log("Processing Exit");
