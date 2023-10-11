// ! array map
const newArray = ["Harry", "Ron", "Jeff", "Thomas"].map((name) => {
  return `${name}!`;
});

console.log(newArray);

/**
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 *
 */

// ! array filter
const students = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const eligibleForScholarshipStudents = students.filter(
  (student) => student.score > 85
);

console.log(eligibleForScholarshipStudents);

/**
 * output:
 * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
 *
 */

// ! array reduce
const totalScore = students.reduce((acc, student) => acc + student.score, 0);

console.log(totalScore);

/**
 * output:
 * 313
 *
 */

// ! array some
const array = [1, 2, 3, 4, 5];
const even = array.some((element) => element % 2 === 0);

console.log(even);

/** 
output true
**/

// ! array find
const findJames = students.find((student) => student.name === "James");
console.log(findJames);

/**
output
{ name: 'James', score: 88 }
**/

// ! array sort
const array1 = [1, 30, 4, 1000];

const compareNumber = (a, b) => {
  return a - b;
};
const sorting = array1.sort(compareNumber);
console.log(sorting);

/**
output
[ 1, 4, 30, 1000 ]
**/

// ! array every
const scores = [70, 85, 90];
const minimumScore = 65;

const examPassed = scores.every((score) => score >= minimumScore);
console.log(examPassed);

/**
output
true
**/

// ! array foreach

const names = ["Harry", "Ron", "Jeff", "Thomas"];

// ? Imperatif
for (let i = 0; i < names.length; i++) {
  if (names[i] === "Jeff") continue; // Bisa!

  console.log(`Hello, ${names[i]}!`);
}

// ? Deklaratif
/*names.forEach((name) => {
  if(name === 'Jeff') continue; // Tidak Bisa!
  console.log(`Hello, ${name}`);
});*/
