// 1

// for(i=1;i<=5;){
//     document.write(i);
//     i++;
// }

// 2

// for(i=1;i<=500;i++){
//     document.write(i+'<br>');
// }

// 3

// for(i=1;i<=500;i++){
//     document.write('Alloooo <br>');
// }

// 4: make the table of any number
// var num = 2
// for(i=1;i<=10;i++){
//     // document.write(num*i+'<br>')
//     document.write(num*i)
//     document.write('<br>')
// }

// 5

// var num = parseInt(prompt('Enter the number to get its table:'))
// for(i=1;i<=10;i++){
//     document.write(num*i+'<br>')
// }

// 6

var num = parseInt(prompt('Enter the number to get its table:'))
for(i=1;i<=10;i++){
    document.write(`${num} x ${i} = ${num*i} <br>`)
}