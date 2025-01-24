function go(){
    document.getElementById('light').classList.add('green');
    document.getElementById('info').innerText='GO';
    document.getElementById('light').classList.remove('red');
    document.getElementById('light').classList.remove('yellow');
}

function ready(){
    document.getElementById('light').classList.add('yellow');
    document.getElementById('info').innerText='READY';
    document.getElementById('light').classList.remove('red');
    document.getElementById('light').classList.remove('green');
}

function stop(){
    document.getElementById('light').classList.add('red');
    document.getElementById('info').innerText='STOP';
    document.getElementById('light').classList.remove('green');
    document.getElementById('light').classList.remove('yellow');
}