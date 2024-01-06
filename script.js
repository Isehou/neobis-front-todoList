const inputBox = document.getElementById("input-box");
const addTodoButton = document.getElementById("add-todo");
const selectTask = document.getElementById("checkbox-category");
const list = document.getElementById("todo-list");

inputBox.addEventListener("keydown", (e) => {
  if (e.code === "Enter") addTodoButton.click();
  console.log("enter was pressed");
});

function addTask() {
  if (inputBox.value === "") {
    alert("Write something");
  } else {
    let newTask = document.createElement("li");
    list.appendChild(newTask);
    newTask.innerHTML = `<input class="checked" type="checkbox" onclick="completedTask(this.parentNode)" />
    <span >${inputBox.value}</span>
    <button class="edit-btn" onclick="editTask(this.parentNode)">Edit</button>
    <button class="delete-btn" onclick="deleteTask(this.parentNode)">Delete</button>
  `;
  }
  inputBox.value = "";
}

function deleteTask(taskItem) {
  const tasksList = list;
  tasksList.removeChild(taskItem);
}
function completedTask(taskItem) {
  taskItem.classList.toggle("checked");
}
function editTask(taskItem) {
  const textEdit = taskItem.querySelector("span");
  const currText = textEdit.textContent;
  const newText = prompt("Edit task:", currText);
  if (newText !== null) {
    textEdit.textContent = newText;
  }
}
