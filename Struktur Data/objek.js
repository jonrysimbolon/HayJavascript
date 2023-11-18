const user = {
    firstName:"Jonry",
    lastName:"Simbolon",
    age:"26",
    isMarried:false,
    "bahasa pemrograman":"Javascript",
}

console.log(user.firstName)
console.log(user["bahasa pemrograman"])

user["bahasa pemrograman"] = 'Node'
user["programmer kah ?"] = true

delete user.age // delete user["age"]

console.log(user)