/* exported reverse */
function reverse(array) {
  const flippedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    const index = array[i];
    flippedArray.push(index);
  }

  return flippedArray;
}
