// console.log(tog)

function toggle(){
    const tog = document.getElementById('tog').checked
    if (tog==true) {
        document.getElementById('box').classList.add('darkmode')
    }else{
        document.getElementById('box').classList.remove('darkmode')

    }
    
}