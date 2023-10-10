const myMap = new Map([
  ["1", "a String key"],
  [1, "a number key"],
  [true, true],
]);

console.log(myMap); //Map(3) { '1' => 'a String key', 1 => 'a number key', true => true }

const capital = newMap([
  ["Jakarta", "Indonesia"],
  ["London", "England"],
  ["Tokyo", "Japan"],
]);

console.log(capital.size); // 3
console.log(capital.get("London")); // England
capital.set("New Delhi", "India"); // set new data
console.log(capital.size); // 4
console.log(capital.get("New Delhi")); // India

// ! tidak disarankan menggunakan ini, karna bukan map
// ! alias tidak punya `.has` dan `.delete`

/*
const wrongMap = new Map();
wrongMap["My Key"] = "My Value";

console.log(wrongMap.has("My Key"));
console.log(wrongMap.delete("My Key"));

output
false
false
*/