div = document.getElementById('container');
div.addEventListener("click", myFunction);
div.addEventListener("dblclick", classRem);
div.addEventListener("contextmenu", rightClick);

function myFunction() {
    document.getElementById("container").classList.add('green');
}

function classRem() {
    document.getElementById("container").classList.remove('green');
}


function rightClick() {
    alert('Dont Right click over me.')
}

div.addEventListener("click", function (e){
    document.getElementById("container").classList.add('green');
});