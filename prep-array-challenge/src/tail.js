/* exported tail */
function tail(array) {
  if (array.length <= 1) {
    return [];
  }

  const arr = [];
  for (let i = 1; i < array.length; i++) {
    arr.push(array[i]);
  }

  return arr;
}
