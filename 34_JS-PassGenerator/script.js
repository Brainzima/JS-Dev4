// numbers = "ABCD"
// console.log(numbers)
// numbers.length()
// const randomChars = "abcdefghijklmnopqrstuvwxyz";
// console.log(randomChars)
// console.log(randomChars[15])


// Simple Password Generator for concept understanding
// const randomChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_+=[]{}|;:,.<>?/";
// // console.log(randomChars.length)
// // let ri = Math.floor(Math.random()*randomChars.length)
// // console.log(ri)
// let l=8
// let generatedPass = ''
// for (let i = 0; i < l; i++) {
//     let ri = Math.floor(Math.random()*randomChars.length)
//      generatedPass += randomChars[ri];
    
// }

// console.log(generatedPass)





// Dynamic Password Generator with user specific includes

function lenUpdate(){
    let slider = document.getElementById('length-slider').value
    document.getElementById('length-value').innerText=slider
}



function generatePassword(length = 12, includeLowercase = true, includeUppercase = true, includeNumbers = true, includeSymbols = true) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-_+=[]{}|;:,.<>?/";
  
    let allowedChars = "";
    let password = "";
  
    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
      return "Please select at least one character type.";
    }
  
    if (includeLowercase) allowedChars += lowercaseChars;
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
    }
  
    return password;
    // console.log(password)

  }

function generateAndDisplayPassword() {
    // const length = document.getElementById("length").value;
    const length = document.getElementById("length-slider").value;
    const lowercase = document.getElementById("lowercase").checked;
    const uppercase = document.getElementById("uppercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;
  
    const password = generatePassword(parseInt(length), lowercase, uppercase, numbers, symbols);
    document.getElementById("password").value = password;
    console.log(password)
  }


  //copy password function
  function copyPassword() {
    // Get the text field
    var copyText = document.getElementById("password");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }