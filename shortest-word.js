
const shortestWordLength = (sentence) => {
  return sentence
    .split(' ')
    .map(words => words.length)
    .reduce(
      (acc, curr) => curr < acc ? curr : acc,
      Number.MAX_VALUE
    );
}

console.log(shortestWordLength('Hi my name is Martin'));