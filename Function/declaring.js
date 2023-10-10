function greeting(){
    console.log("Good Morning!")
}

greeting() // Good Morning



// ? Expression

const exGreeting = function(name, language){
    if (language === "English"){
        return "Good Morning " + name + "!"
    }else if(language === "French"){
        return "Bonjour " + name + "!"
    }else {
        return "Selamat Pagi " + name + "!"
    }
}

console.log(exGreeting('Jon', 'English'))

// * Perbedaan == & ===
var a = '10' // string

console.log(a == 10) //! true, must same value
console.log(a === 10) //! false, must same value and type data