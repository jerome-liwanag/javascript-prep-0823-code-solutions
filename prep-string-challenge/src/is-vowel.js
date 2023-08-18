/* exported isVowel */
function isVowel(char) {
  if (char === 'A' || char === 'a') {
    return true;
  } else if (char === 'E' || char === 'e') {
    return true;
  } else if (char === 'I' || char === 'i') {
    return true;
  } else if (char === 'O' || char === 'o') {
    return true;
  } else if (char === 'U' || char === 'u') {
    return true;
  }

  return false;
}
