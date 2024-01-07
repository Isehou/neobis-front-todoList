const inputBox = document.getElementById("input-box");
const addTodoButton = document.getElementById("add-todo");
const list = document.getElementById("todo-list");

addTodoButton.addEventListener("click", addTask);

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("Write something");
  } else {
    let newTask = document.createElement("li");
    list.appendChild(newTask);

    const selectedCategory = document.querySelector(
      'input[name="category"]:checked'
    ).value;
    newTask.classList.add(selectedCategory);
    const id = Date.now();
    newTask.setAttribute("id", id);

    newTask.innerHTML = `
    <label class="checkbox">
    <input type="checkbox" onchange="completedTask(${id})" /></label>
    <input class="input-text" data-category="${selectedCategory}" value="${inputBox.value}" />
    <button id="edit" class="edit-btn" onclick="editTask(${id})">Edit</button>
    <button id="delete" class="delete-btn" onclick="deleteTask(this.parentNode)">Delete</button>
    `;
  }
  document
    .getElementById("new-todo-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
    });

  inputBox.value = "";
}

function deleteTask(taskItem) {
  list.removeChild(taskItem);
}
function completedTask(id) {
  document.getElementById(id).classList.toggle("completed");
}
function editTask(id) {
  const textEdit = document.getElementById(id).querySelector(".input-text");
  const value = textEdit.value;
  textEdit.value = "";
  textEdit.focus();
  textEdit.value = value;
}
