// addition ka function
function sumFunc(){
    num1 = parseInt(document.getElementById('num1').value);
    // console.log(num1)
    num2 = parseInt(document.getElementById('num2').value);
    // if (isNaN(num1)){
    //     alert('Enter Valid Digit in Num1')
    // }else if(isNaN(num2)){
    //     alert('Enter Valid Digit in Num2')
    // }

    if (isNaN(num1) && isNaN(num2)){
        alert('Enter Valid Digit in Num1 & Num2')
    }else if(isNaN(num1)){
        alert('Enter Valid Digit in Num1')
    }else if(isNaN(num2)){
        alert('Enter Valid Digit in Num2')
    }

    sum = num1 + num2;
    if (isNaN(sum)) {
        document.getElementById('result').innerText='Invalid';
    }else{
        document.getElementById('result').innerText=sum;
    }
    
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