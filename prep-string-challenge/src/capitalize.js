/* exported capitalize */
function capitalize(word) {
  const firstChar = word[0].toUpperCase();
  const remainder = word.substr(1, word.length).toLowerCase();
  const newString = firstChar + remainder;

  return newString;
}
