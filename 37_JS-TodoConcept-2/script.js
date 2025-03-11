// this code is just to add and show the todos <start>

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];

function addTodo() {
  const task = document.getElementById("contents").value;
  if(task != ""){
    todoList.push({ todo: task});
    localStorage.setItem("todoList", JSON.stringify(todoList));
    document.getElementById("contents").value='';
    showTodos()
}
}


function showTodos() {
    const todos = document.getElementById("todos");
    todos.innerHTML = "";
    todoList.forEach((todo, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = todo.todo;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";      
      deleteButton.setAttribute("onclick", `deleteTodo(${index})`);
      todos.appendChild(listItem);
      listItem.appendChild(deleteButton);
    });
    document.getElementById("contents").value = "";
  }

  showTodos()

// this code is just to add and show the todos <end>



// delete all function start
function deleteAll() {
    const consent = confirm("Are You Sure to delete All?");
    if(consent){
        localStorage.clear()
        location.reload()
    }  
}
// delete all function end


// to add by enter button function start 
document.getElementById('todo-form').addEventListener("submit",function(e){
    e.preventDefault();
    addTodo();
})
// to add by enter button function endf 


// to delete single todo function start 
function deleteTodo(index) {
    todoList.splice(index, 1);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    showTodos()
  }
// to delete single todo function end