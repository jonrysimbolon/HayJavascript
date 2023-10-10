const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

/*const firstName = profile.firstName;
const lastName = profile.lastName;
const age = profile.age;
console.log(firstName, lastName, age); */// asal mula destructuring

// object
//const { firstName, lastName, age } = profile; // destructuring
//console.log(firstName, lastName, age);

// assignment
//({ firstName, age} = profile);

// default value 

//const { firstName, age, isMale } = profile;
/*console.log(firstName);
console.log(age);
console.log(isMale); // undefined
*/

/*
const { firstName, age, isMale = false} = profile;
console.log(isMale); // false
*/
 

// Assign to different local variable names
const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;
 
console.log(localFirstName);
console.log(localLastName);
console.log(localAge);
 
/* output:
John
Doe
18
*/