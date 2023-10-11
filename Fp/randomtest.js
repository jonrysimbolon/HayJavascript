const adder = (first) => (second) => first + second;

const addByOne = adder(1);
const addByTwo = adder(2);

console.log(addByOne(4)); // 5
console.log(addByTwo(3)); // 5

// ! --------------------------

function myFunction() {
  const multiplier = (firstNumber, secondNumber) => firstNumber * secondNumber;
  return multiplier;
}

const multiply = myFunction()
const result = multiply(5, 3)
console.log(result) // 15