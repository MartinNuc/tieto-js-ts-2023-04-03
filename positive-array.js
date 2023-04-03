function countPositive(array) {
  return array.filter(x => x > 0).length;
}
function countPositiveUsingReduce(array) {
  return array.filter(x => x > 0).reduce(acc => acc + 1, 0);
}

console.log(countPositive([1,-4,7,12])); // 3

function sumOfPositive(array) {
  return array
    .filter(x => x > 0)
    .reduce((acc, curr) => acc + curr, 0);
}
console.log(sumOfPositive([1,-4,7,12])); // 20