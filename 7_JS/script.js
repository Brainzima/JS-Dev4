// addition ka function
function sumFunc(){
    num1 = parseInt(document.getElementById('num1').value);
    // console.log(num1)
    num2 = parseInt(document.getElementById('num2').value);
    sum = num1 + num2;
    document.getElementById('result').innerText=sum;
}

// Subtration ka function
function subFunc(){
    num1 = parseInt(document.getElementById('num1').value);
    // console.log(num1)
    num2 = parseInt(document.getElementById('num2').value);
    sub = num1 - num2;
    document.getElementById('result').innerText=sub;
}

// Multplication ka function
function mulFunc(){
    num1 = parseInt(document.getElementById('num1').value);
    // console.log(num1)
    num2 = parseInt(document.getElementById('num2').value);
    mul = num1 * num2;
    document.getElementById('result').innerText=mul;
}

// Division ka function
function divFunc(){
    num1 = parseInt(document.getElementById('num1').value);
    // console.log(num1)
    num2 = parseInt(document.getElementById('num2').value);
    div = num1 / num2;
    document.getElementById('result').innerText=div;
}