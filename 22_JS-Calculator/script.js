let display = document.getElementById('display');

function appendToDisplay(value){
    display.value += value;
}

function calculate(){
    display.value = eval(display.value)
}

function allClear(){
    display.value = '';
}

function del(){
    display.value = display.value.slice(0,-1)
}