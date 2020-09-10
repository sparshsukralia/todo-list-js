// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
// Functions
function addTodo(e) {
  // Preventing the form submission
  e.preventDefault();
  // todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Create Li
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  // Getting the input to the input
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);
  // Creating CheckMark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = "<i class='fas fa-check'></i>";
  completedButton.classList.add("complete-button");
  todoDiv.appendChild(completedButton);
  // Creating Delete button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = "<i class='fas fa-trash'></i>";
  trashButton.classList.add("trash-button");
  todoDiv.appendChild(trashButton);
  // Adding to the todoList
  todoList.appendChild(todoDiv);
  // Clear todoInput value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  // Check for the trash button
  // We're comparing the classes of clicked element and the button's
  if (item.classList[0] === "trash-button") {
    // Get the parent item
    const todo = item.parentElement;
    todo.remove();
  }
}
