// understanding the / and % operators
let num1 = 100
let num2 = 3
// by / we get qotient value
console.log(num1 / num2)
// by % (modulus) we get remainders value
console.log(num1 % num2)


// Project 1 : Find the year is leap or not
let year = 2028
if (year % 4 == 0){
    console.log("Year is leap")
}else{
    console.log("Year is not leap")
}

// Project 2: Find the number is even or odd
let num = 385458459
if (num % 2 == 0){
    console.log(`Number ${num} is Even`)
}else{
    console.log(`Number ${num} is Odd`)
}