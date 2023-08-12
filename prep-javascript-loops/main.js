// create your loops here.
function whileLoop1() {
  const arr = [];
  let count = 0;
  while (count < 10) {
    arr.push(count);
    count++;
  }
  return arr;
}
console.log('whileLoop1 output', whileLoop1());

function whileLoop2() {
  const arr = [];
  let count = 0;
  while (count <= 18) {
    arr.push(count);
    count += 2;
  }
  return arr;
}
console.log('whileLoop2 output', whileLoop2());

function forLoop1() {
  const arr = [];
  let count = 0;
  for (let i = 0; i < 10; i++) {
    arr.push(count);
    count ++;
  }
  return arr;
}
console.log('forLoop1 output', forLoop1());

function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log('Time till explosion: ' + i + '!');
  }
}
forLoop2();

function forInLoop1(object) {
  const arr = [];
  for (const prop in object) {
    arr.push(prop);
  }
  return arr;
}

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine'
}
console.log('for in loop 1 output', forInLoop1(object));

function forInLoop2(object) {
  const arr = [];
  for (const prop in object) {
    arr.push(object[prop]);

  }
  return arr;
}
console.log('for in loop 2 output', forInLoop2(object));
