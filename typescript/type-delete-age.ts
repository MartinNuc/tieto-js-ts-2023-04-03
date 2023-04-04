
function removeAge<T extends Record<string, unknown>>
    (obj: T): Omit<T, 'age'> {
  const {age, ...rest} = obj;
  return rest;
}

const result = removeAge({
  ahoj: 5,
  cau: 999,
  age: 55
});
