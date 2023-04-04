export function add(a: number, b: number): number {
  return a + b;
}

export function sumOfArray(array: number[]): number {
  return array.reduce((acc, curr) => acc + curr, 0);
}

export default 42;