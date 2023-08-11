// Function #1
function addTwoNumbers(a, b) {
  return a + b;
}

const addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers Exercise:', addTwoNumbersResult);

// Function #2
function convertHoursToMinutes(hours) {
  const minutes = hours * 60;
  return minutes;
}

const convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes Exercise:', convertHoursToMinutesResult);

// Function #3
function getGreeting(name) {
  const greeting = 'Hello ' + name + '!';
  return greeting;
}

const getGreetingResult = getGreeting('World');
console.log('getGreeting Exercise:', getGreetingResult);

// Function #4
function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

const addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 Exercise:', addAndMultiplyBy5Result);

// Function #5
function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

const multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 Exercise:', multiplyAndDivideBy5Result);

// Function #6
function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

const subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers Exercise:', subtractTwoNumbersResult);

// Function #7
function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

const getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference Exercise:', getCircleCircumferenceResult);

// Function #8
function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const getFullNameResult = getFullName('Juan', 'Ramirez');
console.log('getFullName Exercise:', getFullNameResult);

// Function #9
function cube(number) {
  return Math.pow(number, 3);
}

const cubeResult = cube(5);
console.log('cube Exercise:', cubeResult);
