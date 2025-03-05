function generatePassword() {
    const lowercase = document.getElementById('lowercase').checked
    const uppercase = document.getElementById('uppercase').checked
    const numbers = document.getElementById('numbers').checked
    const symbols = document.getElementById('symbols').checked
    const length = document.getElementById('length-slider').value
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-_+=[]{}|;:,.<>?/";
    let allChars = ''
    let password = ''

    if(lowercase == true){
        allChars = allChars + lowercaseChars
    }
    if(uppercase == true){
        allChars = allChars + uppercaseChars
    }
    if(numbers == true){
        allChars = allChars + numberChars
    }
    if(symbols == true){
        allChars = allChars + symbolChars
    }
   
    for (let i = 0; i < length; i++) {
        let randomNum = Math.floor(Math.random() * allChars.length)
        password = password + allChars[randomNum]
    }
    document.getElementById('password').value=password
}

function updateSlider() {
    const length = document.getElementById('length-slider').value
    document.getElementById('length-value').innerText=length
}









// descriptive method
// if(lowercase == true){
//     allChars = allChars + lowercaseChars
// }
// if(uppercase == true){
//     allChars = allChars + uppercaseChars
// }
// if(numbers == true){
//     allChars = allChars + numberChars
// }
// if(symbols == true){
//     allChars = allChars + symbolChars
// }

// // short hand method
// if(lowercase){allChars += lowercaseChars}
// if(uppercase){allChars += uppercaseChars}
// if(numbers){allChars += numberChars}
// if(symbols){allChars += symbolChars}
