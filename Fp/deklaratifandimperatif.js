const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

// ! Imperatif
const newNamesWithExcMark = [];

for(let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);

// * Deklaratif

const newNameWithExcMark = names.map((name) => `${name}!`)

/* output:
   [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
*/