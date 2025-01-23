// switch case syntax:

// switch (expression){
//     case value1:
//         statement to be executed
//         break;
//     case value2:
//         statement to be executed
//         break;
//     default:
//         statement to be executed
//         break;
// }

// Porject realcase
// day = 10
let day = parseInt(prompt("Enter the day from 1 to 7:"))
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wedenesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input: Choose from 1 to 7.");
        break;
}