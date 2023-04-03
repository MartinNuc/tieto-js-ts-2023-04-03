const result = findUniqueCharacter('Hello how are you')
console.log(result) // w

function findUniqueCharacter(sentence) {
  // { h: 2, e: 2, l: 2, o: 3, w: 1 }
  const occurences = sentence
    .toLowerCase()
    .split('')
    .filter(character => character.match(/\w/))
    .reduce((occurences, character) => {
      if (occurences[character] === undefined) {
        occurences[character] = 1;
      } else {
        occurences[character]++;
      }
      return occurences;
    }, {});
  
  console.log(occurences);

  for(key in occurences) {
    if (occurences[key] === 1) {
      return key;
    }
  }
}

