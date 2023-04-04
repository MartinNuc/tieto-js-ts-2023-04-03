"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumOfArray = exports.add = void 0;
const calculator = {
    add: (a, b) => a + b,
    subtract(a, b) {
        return a - b;
    },
    PI: 3.14
};
function add(a, b) {
    return a + b;
}
exports.add = add;
function sumOfArray(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
}
exports.sumOfArray = sumOfArray;
exports.default = 42;
