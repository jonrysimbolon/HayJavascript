const user = [
    "Jonry",
    "Simbolon",
    "26",
    false,
    "Javascript",
]

console.log(user[1]); //Simbolon

/* input */
user.push("no woman") 
console.log(user); //[ 'Jonry', 'Simbolon', '26', false, 'Javascript', 'no woman' ]

/* hapus elemen terakhir */
user.pop()
console.log(user); //[ 'Jonry', 'Simbolon', '26', false, 'Javascript' ]

/* hapus elemen pertama */
user.shift()
console.log(user) //[ 'Simbolon', '26', false, 'Javascript' ]

/* input elemen pertama */
user.unshift('senku')
console.log(user) //[ 'senku', 'Simbolon', '26', false, 'Javascript' ]

/* delete elemen pertama menjadikannya `empty` */
delete user[0]
console.log(user) //[ <1 empty item>, 'Simbolon', '26', false, 'Javascript' ]

/* Menghapus dari index 0 sebanyak 1 elemen */
user.splice(0,1); 
console.log(user); //[ 'Simbolon', '26', false, 'Javascript' ]

/* argument ke-3, bersifat variadic pada elemen yang dituju */
user.splice(0,1, 'Variadic'); 
console.log(user); //[ 'Variadic', '26', false, 'Javascript' ]

