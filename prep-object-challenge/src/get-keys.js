/* exported getKeys */
function getKeys(object) {
  const arr = [];
  for (const property in object) {
    arr.push(property);
  }

  return arr;
}
