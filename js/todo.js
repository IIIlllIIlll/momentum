const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODS_KEY = "todos";

const savedToDos = localStorage.getItem(TODS_KEY);

let ToDos = [];
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  ToDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

function handleToDoSubmit() {
  const newToDo = toDoInput.value;
  const newTodoObj = {
    text: newToDo,
    id: Date.now(),
  };
  ToDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newToDo.text;
  button.classList.add("btn-close");

  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  li.classList.add("list-group-item");
  li.classList.add("justify-content-md-end");
  toDoList.appendChild(li);
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  ToDos = ToDos.filter((todo) => {
    return todo.id !== parseInt(li.id);
  });
  li.remove();
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODS_KEY, JSON.stringify(ToDos));
}

toDoForm.addEventListener("submit", handleToDoSubmit);
