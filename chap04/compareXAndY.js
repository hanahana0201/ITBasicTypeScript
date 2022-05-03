"use strict";
exports.__esModule = true;
var x = Math.round(Math.random() * 10);
console.log("x\u306E\u5024: ".concat(x));
var y = Math.round(Math.random() * 10);
console.log("y\u306E\u5024: ".concat(y));
if (x == y) {
    console.log("同じ!");
}
else {
    console.log("違う!");
}
