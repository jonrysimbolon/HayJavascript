// ! Pure function

let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
  return PI * (jariJari * jariJari);
};
console.log(hitungLuasLingkaran(4)); // 50.24

PI = 5;
console.log(hitungLuasLingkaran(4)); // 80

// ? menggunakan purefunction membuat newPerson

const createPersonWithAge = (age, person) => {
  return { ...person, age };
};

const person = {
  name: "Bobo",
};

const newPerson = createPersonWithAge(18, person);

console.log({
  person,
  newPerson,
});

/**
 * Output:
 *  {
 *    person: { name: 'Bobo' },
 *    newPerson: { name: 'Bobo', age: 18 }
 *  }
 */

// ! Immutability

// 1
const names = ["Harry", "Ron", "Jeff", "Thomas"];

const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log({
  names,
  newNamesWithExcMark,
});

/**
 * {
     names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
     newNamesWithExcMark: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
   }
 */

// 2
const user = {
  firstname: "Harry",
  lastName: "Protter", // ups, typo!
};

const createUserWithNewLastName = (newLastName, user) => {
  return { ...user, lastName: newLastName };
};

const newUser = createUserWithNewLastName("Potter", user);

console.log(user);
console.log(newUser);

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 *
 */

// ! Rekursif

// ! Cara yg non-fp
/*const countDown = (start) => {
  do {
    console.log(start);
    start -= 1;
  } while (start > 0);
};

countDown(10);*/

// ? Cara yang FP
const countDown = start => {
  console.log(start);
  if (start > 0) countDown(start - 1);
};

countDown(10);

// ! Higher-Order function

// * 1
const hello = () => {
  console.log('Hello!')
};

const say = (someFunction) => {
  someFunction();
}

const sayHello = () => {
  return () => {
    console.log('Hello!');
  }
}

hello();
say(hello);
sayHello()();

/**
 * Hello!
 * Hello!
 * Hello!
 */

// * 2
//const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if(!item) return newArray;
    return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
  }

  return loopTrough(arr, action);
}


const newNames = arrayMap(names, (name) => `${name}!` );

console.log({
  names,
  newNames,
});

/**
 * output:
 * {
 *   names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
 *   newNames: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * }
 */