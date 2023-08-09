const person = {
  firstName: 'Jerome',
  lastName: 'Liwanag',
  hobby: 'Gym'
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's full name is:", fullName);

person.job = "fry cook";
console.log("The person's current job is:", person.job);

person["previousJob"] = "lifeguard";
console.log("The person's previous job is:", person["previousJob"]);

console.log("The complete person object:", person);
