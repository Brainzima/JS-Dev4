function updateClock() {
    currentTime = new Date()

    // time
    ut = currentTime.toLocaleTimeString()
    document.getElementById('dclock').innerHTML=ut
    // day
    ud = currentTime.toLocaleString('en',{weekday:'long'})
    document.getElementById('day').innerHTML=ud
    // year
    uy = currentTime.getFullYear()
    document.getElementById('year').innerHTML=uy
    // date
    udate = currentTime.getDate()
    document.getElementById('date').innerHTML=udate

}

setInterval(updateClock,1000)
