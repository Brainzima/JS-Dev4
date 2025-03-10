// function addTodo() {
//     const contents = document.getElementById('contents').value
//     let allitems = localStorage.getItem('items')
//     if (allitems) {
//         allitems = JSON.parse(allitems)
//     } else {
//         allitems = []
//     }
//     allitems.push(contents);
//     localStorage.setItem('items', JSON.stringify(allitems))
// }


// let items = localStorage.getItem('items')
// items = JSON.parse(items)

// for (let i = 0; i < items.length; i++) {
//     document.getElementById('todos').innerHTML=`<li>${items[i]}</li>`
//     console.log(items[i]) 
// }
// above codes are previous class 



// this code is just to add and show the todos <start>

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

function addTodo() {
  const task = document.getElementById("contents").value;
    todoList.push({ todo: task});
    localStorage.setItem("todoList", JSON.stringify(todoList));
    document.getElementById("contents").value='';
    showTodos()
}


function showTodos() {
    const todos = document.getElementById("todos");
    todos.innerHTML = "";
    todoList.forEach((todo, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = todo.todo;
      
      todos.appendChild(listItem);
    });
    document.getElementById("contents").value = "";
  }

  showTodos()

// this code is just to add and show the todos <end>
