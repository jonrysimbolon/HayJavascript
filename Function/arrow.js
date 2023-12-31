// * Biasanya

function sayHello(greet){
    console.log(`${greet}!`)
}

// ? Arrow typ1 1 

const sayHello1 = (greet) => {
    console.log(`${greet}!`)
}

// ? Arrow type 2.1

const sayHello21 = greet => { // kalo param cuma 1, bisa hilangkan kurungnya
    console.log(`${greet}!`)
}

// ? Arrow type 2.2

const sayHello22 = () => { // jika tidak ada param
    console.log("Selamat pagi semuanya!")
}

// ? Array type 3

const multiply = (a, b) => a * b
console.log(multiply(3, 4)) // 12