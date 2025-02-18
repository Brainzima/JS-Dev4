// timeout method
function test() {
    setTimeout(function () {
        // document.write('Helllow after sometime')
        document.getElementById('dyna').innerText='Hello Aliens'
    },5000)
    
}

test()


// timeinverval

// function tests() {
//     setInterval(function () {
//         // document.write('Helllow after sometime')
//         document.getElementById('dyna').innerHTML='Hello Aliens<br>'
//         // console.log('hellooooo')
//     },2000)
    
// }

// tests()



// timeinterval usecase with add & remove
function addf(){
    setInterval(function(){
        document.getElementById('dynas').innerHTML='Hello Aliens'
    },1000)
}
function removef(){
    setInterval(function(){
        document.getElementById('dynas').innerHTML=''
    },2000)
}

addf()
removef()