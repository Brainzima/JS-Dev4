// this code is just to add and show the todos <start>

let noteList = JSON.parse(localStorage.getItem("noteList")) || [];

function addNote() {
  const note = document.getElementById("note-input").value;
  let cdate = new Date();
  cdate.toLocaleDateString();
  if(note != ""){
    noteList.push({ note: note, cdate: cdate});
    localStorage.setItem("noteList", JSON.stringify(noteList));
    document.getElementById("note-input").value='';
}
}



















function showNotes() {
    const notes = document.getElementById("notes-section");
    notes.innerHTML = "";
    noteList.forEach((note, index) => {
        


    });
    document.getElementById("note-input").value = "";
  }








  
function showNotes() {
    const notes = document.getElementById("notes-section");
    notes.innerHTML = "";
    noteList.forEach((note, index) => {
      const listItem = document.createElement("li");
      listItem.textContent = note.note;
      // btn wrapper 
      const btnWrapper = document.createElement("span"); 
      // add delete btn 
      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "<i class='fa fa-trash'></i>";      
      deleteButton.setAttribute("onclick", `deleteTodo(${index})`);
      deleteButton.setAttribute("class", "delete-btn");
      // edit btn 
      const editButton = document.createElement("button");
      editButton.innerHTML = "<i class='fa fa-edit'></i>";      
      editButton.setAttribute("onclick", `editTodo(${index})`);
      editButton.setAttribute("class", "edit-btn");

      notes.appendChild(listItem);
      listItem.appendChild(btnWrapper);
      btnWrapper.appendChild(editButton);
      btnWrapper.appendChild(deleteButton);
    });
    document.getElementById("note-input").value = "";
  }

  showNotes()

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


// Edit todo function start
// function editTodo(index) {
//   const currentTodo = todoList[index].todo;
//   const newTodo = prompt("Edit your todo:", currentTodo);
  
//   // Only update if user didn't cancel and the new value isn't empty
//   if (newTodo !== "") {
//     todoList[index].todo = newTodo;
//     localStorage.setItem("todoList", JSON.stringify(todoList));
//     showTodos();
//   }
// }
// Edit todo function end



// inline edit system by claude.ai 

// Edit todo function start
function editTodo(index) {
  const todos = document.getElementById("todos");
  const listItems = todos.querySelectorAll("li");
  const listItem = listItems[index];
  
  // Get the current todo text
  const currentTodo = todoList[index].todo;
  
  // Clear the list item
  const btnWrapper = listItem.querySelector("span");
  listItem.innerHTML = "";
  
  // Create edit input
  const editInput = document.createElement("input");
  editInput.type = "text";
  editInput.value = currentTodo;
  editInput.className = "edit-input";
  
  // Create save button
  const saveButton = document.createElement("button");
  saveButton.innerHTML = "<i class='fa fa-check'></i>";
  saveButton.className = "save-btn";
  
  // Create cancel button
  const cancelButton = document.createElement("button");
  cancelButton.innerHTML = "<i class='fa fa-times'></i>";
  cancelButton.className = "cancel-btn";
  
  // Add event listener to save button
  saveButton.addEventListener("click", function() {
    const newTodo = editInput.value.trim();
    if (newTodo !== "") {
      todoList[index].todo = newTodo;
      localStorage.setItem("todoList", JSON.stringify(todoList));
      showTodos();
    }
  });
  
  // Add event listener to cancel button
  cancelButton.addEventListener("click", function() {
    showTodos();
  });
  
  // Add event listener for Enter key
  editInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      const newTodo = editInput.value.trim();
      if (newTodo !== "") {
        todoList[index].todo = newTodo;
        localStorage.setItem("todoList", JSON.stringify(todoList));
        showTodos();
      }
    }
  });
  
  // Append elements to list item
  listItem.appendChild(editInput);
  listItem.appendChild(saveButton);
  listItem.appendChild(cancelButton);
  
  // Focus on the input
  editInput.focus();
}
// Edit todo function end