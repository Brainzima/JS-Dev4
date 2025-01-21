let num = 100

// console.log(num == 55)

// if (num == 100){
//     console.log("Barabar")
// }else{
//     console.log("Barabar nahi h")
// }

let a = '101'

// console.log(a == num)
// console.log(a === num)

// console.log(a != num)

// EX:
// username = 'Raj'
// loggedin = false

// if(loggedin != true){
//     console.log("Please login first.")
// }else{
//     console.log("Welcome",username)
// }

// EX:
// let uname = 'Raj Kumar'
// let username = 'raj123'
// let password = 'raj@2024'

// let username_input = prompt("Enter your username:")
// let password_input = prompt("Enter your password:")

// if(username == username_input && password == password_input){
//     console.log("Welcome",uname)
// }else{
//     console.log("Username or Password is incorrect!")
// }


// EX:
let uname = 'Raj Kumar'
let email = 'raj@brainzima.com'
let username = 'raj123'
let password = 'raj@2024'

let useremail_input = prompt("Enter your username or email:")
let password_input = prompt("Enter your password:")

if ( useremail_input == email || useremail_input == username ){
    if ( password == password_input ){
        console.log("Welcome", uname)
    }else{
        console.log("Password is incorrect!")
    }
}else{
    console.log("Username is incorrect!")
}