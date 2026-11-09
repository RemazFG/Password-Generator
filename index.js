const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordFiled1 = document.getElementById("passFiled1")
let passwordFiled2 = document.getElementById("passFiled2")

let passwordLength = 15

function getRandomCharacter() {
    let randomChart = Math.floor(Math.random()*characters.length)
    return characters[randomChart]
}

function passwordGenerator(){
    let password1 = ""
    let password2 = ""
    for (let i = 0 ; i < passwordLength; i++){
        password1 += getRandomCharacter()
        password2 += getRandomCharacter()
    }
    return passwordFiled1.textContent = password1 , passwordFiled2.textContent = password2
}

// console.log(passwordIteration())