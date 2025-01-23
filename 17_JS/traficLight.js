let light = prompt("Enter the color of light: ")
switch (light){
    case 'red':
        console.log("Please Stop.");
        break;
    case 'yellow':
        console.log("Go Slowly.");
        break;
    case 'green':
        console.log("Go GO GO.");
        break;
    default:
        console.log("Invalid color!");
        break;
}