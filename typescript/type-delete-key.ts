
function removeKey<T extends Record<string, unknown>, K extends string>
    (obj: T, key: K): Omit<T, K> {
  const duplicate = {...obj};
  delete duplicate[key];
  return duplicate;
}

const result = removeKey({
  ahoj: 5,
  cau: 999,
  age: 55
}, 'cau');
