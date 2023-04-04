interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
  PI: 3.14
}

const add = (a: number, b: number): number => {
  return a + b;
}

const calculator: Calculator = {
  add: add,
  subtract(a, b) {
    return a - b;
  },
  PI: 3.14
};

export function sumOfArray(array: number[]): number {
  return array.reduce((acc, curr) => acc + curr, 0);
}

export default 42;