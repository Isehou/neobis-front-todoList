const inputBox = document.getElementById("input-box");
const addTodoButton = document.getElementById("add-todo");
const list = document.getElementById("todo-list");
const selectCategory1 = document.getElementById("category1");
const selectCategory2 = document.getElementById("category2");

addTodoButton.addEventListener("click", addTask);

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("Write something");
  } else {
    let newTask = document.createElement("li");
    list.appendChild(newTask);

    const selectedCategory = selectCategory1.checked
      ? selectCategory1.value
      : selectCategory2.value;

    newTask.innerHTML = `<input class="checked circle" type="checkbox" onclick="completedTask(this.parentNode)" />
    <span data-category="${selectedCategory}">${inputBox.value}</span>
    <button id="edit" class="edit-btn" onclick="editTask(this.parentNode)">Edit</button>
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
function completedTask(taskItem) {
  const spanEl = taskItem.querySelector("span");
  taskItem.classList.toggle("checked");
  spanEl.classList.toggle("completed");
}
function editTask(taskItem) {
  const textEdit = taskItem.querySelector("span");
  const currText = textEdit.innerText;
  const newText = prompt("Edit task:", currText);
  if (newText !== null) {
    textEdit.textContent = newText;
  }
}
