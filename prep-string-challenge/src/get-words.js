/* exported getWords */
function getWords(string) {
  if (string === "") { // check for empty string
    return [];
  }

  return string.split(" ");
}
