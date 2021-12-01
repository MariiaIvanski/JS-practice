function getMiddle(word) {
  let wordLength = word.length;
  if (wordLength % 2 == 0) {
    let x = wordLength / 2;
    let y = wordLength / 2 - 1;
    return word[y] + word[x];
  } else {
    let z = Math.floor(wordLength / 2);
    return word[z];
  }
}

console.log(getMiddle("Cats"));
