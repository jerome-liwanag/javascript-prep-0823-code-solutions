const number1 = 1;
const number2 = 2;
const product = number1 * number2;
console.log('value of product:', product);
console.log('type of product:', typeof(product));

const charge = 50;
const payment = 25;
const amountRemaining = charge - payment;
console.log('value of amountremaining:', amountRemaining);
console.log('type of amountRemaining:', typeof(amountRemaining));

const tests = 40;
const assignments = 50;
const final = 60;
const grade = (tests + assignments + final) / 3;
console.log("value of grade:", grade);
console.log("type of grade:", typeof(grade));

const firstName = "Jerome";
const lastName = "Liwanag";
const fullName = firstName + " " + lastName;
console.log('value of fullName:', fullName);
console.log('type of fullName:', typeof(fullName));

const pH = 7;
const isAcidic = pH < 7;
console.log('value of isAcidic:', isAcidic);
console.log('type of isAcidic:', typeof(isAcidic));

const numberOfSoldiers = 250;
const isSparta = numberOfSoldiers === 300;
console.log('value of isSparta:', isSparta);
console.log('type of isSparta:', typeof(isSparta));

let nickname = fullName;
nickname += " is the GOAT";
console.log('value of nickname:', nickname);
console.log('type of nickname:', typeof(nickname));
