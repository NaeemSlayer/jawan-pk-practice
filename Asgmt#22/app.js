/**
 * Todo Application
 * A simple todo list application with CRUD functionality
 * (Create, Read, Update, Delete)
 */
const todoApp = {
  // DOM Elements
  taskList: document.getElementById("taskList"),
  todoInput: document.getElementById("todoInput"),

  /**
   * Creates and adds a new task to the list
   */
  addTask() {
    const taskText = this.todoInput.value.trim();

    if (!taskText) {
      alert("Please enter a task");
      return;
    }

    // Create task item container
    const taskItem = this.createTaskElement(taskText);
    this.taskList.appendChild(taskItem);

    // Clear input
    this.todoInput.value = "";
  },

  /**
   * Creates a new task element with edit and delete buttons
   * @param {string} taskText - The text content of the task
   * @returns {HTMLElement} The complete task list item
   */
  createTaskElement(taskText) {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    // Create task text element
    const textSpan = document.createElement("span");
    textSpan.className = "task-text";
    textSpan.textContent = taskText;

    // Create buttons container
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "task-buttons";

    // Add edit and delete buttons
    const editButton = this.createButton("Edit", "btn btn-edit", () =>
      this.editTask(textSpan)
    );
    const deleteButton = this.createButton("Delete", "btn btn-delete", () =>
      taskItem.remove()
    );

    // Assemble task item
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);
    taskItem.appendChild(textSpan);
    taskItem.appendChild(buttonContainer);

    return taskItem;
  },

  /**
   * Creates a button element with specified text and click handler
   * @param {string} text - Button text
   * @param {string} className - CSS classes for the button
   * @param {Function} onClick - Click event handler
   * @returns {HTMLElement} The button element
   */
  createButton(text, className, onClick) {
    const button = document.createElement("button");
    button.textContent = text;
    button.className = className;
    button.onclick = onClick;
    return button;
  },

  /**
   * Handles editing of a task
   * @param {HTMLElement} textElement - The text element to edit
   */
  editTask(textElement) {
    const newText = prompt("Update task:", textElement.textContent);
    if (newText && newText.trim()) {
      textElement.textContent = newText.trim();
    }
  },

  /**
   * Deletes all tasks from the list
   */
  deleteAllTasks() {
    if (confirm("Are you sure you want to delete all tasks?")) {
      this.taskList.innerHTML = "";
    }
  },
};
