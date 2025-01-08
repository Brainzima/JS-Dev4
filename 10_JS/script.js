function genCard(){
    const name = document.getElementById('name').value
    const regd = document.getElementById('regd').value
    const course = document.getElementById('course').value
    const purl = document.getElementById('purl').value

    // console.log(name)
    // console.log(regd)
    // console.log(course)
    // console.log(purl)
    document.getElementById('namev').innerHTML=name
    document.getElementById('regdv').innerHTML=regd
    document.getElementById('coursev').innerHTML=course
    document.getElementById('photu').src=purl
    document.getElementById('qr').src=`https://quickchart.io/qr?text=${regd}&size=150`
    
}