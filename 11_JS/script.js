function genCard(){
    const bname = document.getElementById('bname').value
    const upi = document.getElementById('upi').value

    document.getElementById('bnamev').innerHTML=bname
    document.getElementById('upiv').innerHTML=upi
    // upi://pay?pa=upiId
    document.getElementById('qr').src=`https://quickchart.io/qr?text=upi://pay?pa=${upi}&size=350`
    
}