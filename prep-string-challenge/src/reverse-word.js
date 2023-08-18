/* exported reverseWord */
function reverseWord(word) {
  let flippedString = "";

  for (let i = word.length - 1; i >= 0; i--) {
    flippedString += word[i];
  }

  return flippedString;
}
