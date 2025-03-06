function addTodo() {
    const contents = document.getElementById('contents').value
    let allitems = localStorage.getItem('items')
    if (allitems) {
        allitems = JSON.parse(allitems)
    } else {
        allitems = []
    }
    allitems.push(contents);
    localStorage.setItem('items', JSON.stringify(allitems))
}


let items = localStorage.getItem('items')
items = JSON.parse(items)

for (let i = 0; i < items.length; i++) {
    // document.getElementById('todos').innerHTML=`<li>${items[i]}</li>`
    console.log(items[i]) 
}

