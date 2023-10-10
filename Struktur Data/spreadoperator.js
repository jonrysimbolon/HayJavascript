const user = ["Jonry", "Simbolon", "26", false, "Javascript"];

console.log(...user);

// array

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others];

console.log(allFavorites); //[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]

// obj

const obj1 = { firstName: "Obi-Wan", age: 30 };
const obj2 = { lastName: "Kenobi", gender: "M" };

const newObj = { ...obj1, ...obj2 };

console.log(newObj); //{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }