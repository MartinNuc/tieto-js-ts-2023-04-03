
function wait(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), seconds * 1000);
  });
}

console.log(3)
wait(1)
  .then(() => console.log(2))
  .then(() => wait(1))
  .then(() => console.log(1))
  .then(() => wait(1))
  .then(() => console.log('go!'))