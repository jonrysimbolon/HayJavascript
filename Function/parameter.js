const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren'
}

function introduce({displayName, fullName}) {
    console.log(`${displayName} is ${fullName}`)
}

introduce(user); //kren is Kylo Ren

// ? Rest Param
function sum (...numbers){ // like spread operator
    let result = 0
    for (let number of numbers){
        result += number
    }
    return result;
}

console.log(sum(1,2,3,4,5)) // 15