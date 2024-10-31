var todoList = document.getElementById("todoList");

function addTodo() {
  var todoInput = document.getElementById("todoInput");

  if (todoInput.value) {
    var todoItem = document.createElement("li");
    var todoText = document.createTextNode(todoInput.value);

    todoItem.appendChild(todoText);
    todoList.appendChild(todoItem);

    // Create delete button for each list item
    var deleteButton = document.createElement("button");
    var deleteButtonText = document.createTextNode("Delete");
    deleteButton.appendChild(deleteButtonText);
    deleteButton.setAttribute("onclick", "deleteSingleItem(this)");
    todoItem.appendChild(deleteButton);

    // Create edit button for each list item
    var editButton = document.createElement("button");
    var editButtonText = document.createTextNode("Edit");
    editButton.appendChild(editButtonText);
    editButton.setAttribute("onclick", "editItem(this)");
    todoItem.appendChild(editButton);

    // Clear the input field after adding the item
    todoInput.value = "";
  } else {
    alert("Please enter an item.");
  }
}

function deleteAllItems() {
  todoList.innerHTML = "";
}

function deleteSingleItem(element) {
  element.parentNode.remove();
}

function editItem(element) {
  var updatedValue = prompt("Enter the updated value:");

  if (updatedValue) {
    element.parentNode.firstChild.nodeValue = updatedValue;
  }
}
