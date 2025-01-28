// define a function
// function abc(){
//     console.log("I am from abc function")
// }

// call a function
// abc()

// Ex1:
// function greet(name){
//     document.write(`Good Afternoon, ${name}`)
// }
// greet('Akash')

// Ex2:
// function greet(name){
//     document.write(`Good Afternoon, ${name}`)
// }
// n=prompt("Enter your Name")
// greet(n)

// Ex3: Take two Numbers and operator from user and display what user asked

// function magic(num1,num2,op){
//     if(op=='+'){
//         var result = num1+num2
//     }else if(op=='-'){
//         result = num1-num2
//     }else if(op=='*'){
//         result = num1*num2
//     }else if(op=='/'){
//         result = num1/num2
//     }else{
//         result = 'Invalid Operator'
//     }
//     document.write(`${num1} ${op} ${num2} = ${result}`)
// }
// num1 = parseInt(prompt('Enter num1: '))
// num2 = parseInt(prompt('Enter num2: '))
// op = prompt('Enter Operator (- + * /): ')
// magic(num1,num2,op)


// Ex4:
// function square(num){
//     document.write(`${num*num}`)
// }
// num = parseInt(prompt('Enter Number:'))
// square(num)

// Ex5:
// function cube(num){
//     document.write(`${num*num*num}`)
// }
// num = parseInt(prompt('Enter Number:'))
// cube(num)


// Ex6: Return
function sum(num1,num2){
    return `${num1} + ${num2} = ${num1+num2}`
}
num1 = parseInt(prompt('Enter num1: '))
num2 = parseInt(prompt('Enter num2: '))
// document.write(sum(num1,num2))
// console.log(sum(num1,num2))
// alert(sum(num1,num2))
document.getElementById('result').innerText=sum(num1,num2)