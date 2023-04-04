"use strict";
console.log('Hello world');
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function sumOfArray(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
}
console.log(add(5, 3));
console.log(sumOfArray([1, 2, 3, 4]));
