// function updateClock() {
//     currentTime = new Date()
//     uh = currentTime.getHours() 
//     um = currentTime.getMinutes()
//     us = currentTime.getSeconds()
//     document.getElementById('dclock').innerHTML=uh+':'+um+':'+us
// }

function updateClock() {
    currentTime = new Date()
    ut = currentTime.toLocaleTimeString()
    document.getElementById('dclock').innerHTML=ut
}

setInterval(updateClock,1000)

function updateDay() {
    currentTime = new Date()
    ut = currentTime.toLocaleString('en',{weekday:'long'})
    document.getElementById('day').innerHTML=ut
}

setInterval(updateDay,1000)