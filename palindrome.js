
function isPalindrome(word) {
  const wordCaseInsensitive = word.toLowerCase();
  for (let i = 0; i < wordCaseInsensitive.length; i++) {
    const character = wordCaseInsensitive[i];
    const counterCharacter = wordCaseInsensitive[wordCaseInsensitive.length - i - 1];
    if (character !== counterCharacter) {
      return false;
    }
  }
  return true;
}

console.log('Abba', isPalindrome('Abba'));
console.log('Ahoj', isPalindrome('Ahoj'));
console.log('anna', isPalindrome('anna'));