function typingFunc(){
    // const inbox = document.getElementById('inbox').value;
    // console.log("Listening..");
    document.getElementById('msg').innerText="Typing...."

}
function typedFunc(){
    document.getElementById('msg').innerText=""

}

function hi(){
    document.getElementById('msg').innerText="Hi Bro..."

}

function bye(){
    document.getElementById('msg').innerText="Bye Bro..."

}
window.addEventListener("load", welcomeU);
function welcomeU(){
    document.getElementById('welcome').classList.add('welcome');
    document.getElementById('welcome').innerText="Welcome to Js World!";
}
