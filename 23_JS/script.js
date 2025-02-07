// function hello(){
//     const consent = confirm('Are you sure?')
//     if(consent == true){
//         document.write('Success');
//     }else{
//         document.write('Reject');
//     }
// }


function hello() {
    const consent = confirm('Are you sure?')
    if (consent == true) {
        const box = document.getElementById('name').value;
        document.getElementById('msg').innerHTML = `Hello ${box}, Good Morning!`
        document.getElementById('name').value = ''
    } else {
        document.getElementById('msg').innerHTML = `Cancelled`
        document.getElementById('name').value = ''
    }
}


function testOpen(){
    open("https://brainzima.com/uplift")
}