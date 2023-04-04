console.log('Hello world');

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function sumOfArray(array: Array<number>): number {
  return array.reduce((acc, curr) => acc + curr, 0);
}

console.log(add(5, 3));
console.log(sumOfArray([1,2,3,4]));