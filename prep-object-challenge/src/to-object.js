/* exported toObject */
function toObject(keyValuePair) {
  const newObj = {};
  for (let i = 0; i < keyValuePair.length; i++) {
    const [key, value] = keyValuePair;
    newObj[key] = value;
  }
  return newObj;
}
