/* exported compact */
function compact(array) {
  const noFalsiesArray = [];

  array.forEach((i) => {
    if (i) {
      noFalsiesArray.push(i);
    }
  });

  return noFalsiesArray;
}
