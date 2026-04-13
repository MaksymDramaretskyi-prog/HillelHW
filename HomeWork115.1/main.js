const form = document.querySelector("form");
const userNameInput = document.querySelector(".form__input");
const ul = document.querySelector("ul");

function createDeleteButton(textButton) {
  const button = document.createElement("button");
  button.textContent = textButton;
  button.classList.add("todo-item__delete");
  return button;
}


const savedData = localStorage.getItem('myTasks');
let tasks = savedData ? JSON.parse(savedData) : [];

tasks.forEach(task => {
  renderTask(task.text, task.completed);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const value = userNameInput.value.trim() || "Unknown user";

  tasks.push({ text: value, completed: false });
  saveTasks();
  

  renderTask(value, false);
  form.reset();
});

function renderTask(text, isCompleted) {
  const li = document.createElement("li");
  li.classList.add("todo-item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = isCompleted;
  checkbox.classList.add("input-margin");

  const tegP = document.createElement("p");
  tegP.textContent = text;
  tegP.classList.add("todo-item__description");
  
  if (isCompleted) {
    tegP.classList.add('completed');
  }


  const deleteBtn = createDeleteButton("Delete");

  checkbox.addEventListener('change', function() {
    tegP.classList.toggle('completed', this.checked);
    
    const taskObj = tasks.find(t => t.text === text);
    if (taskObj) taskObj.completed = this.checked;
    
    saveTasks();
  });


  deleteBtn.addEventListener('click', () => {
    li.remove(); 
    tasks = tasks.filter(t => t.text !== text); 
    saveTasks(); 
  
  });

  li.append(checkbox, tegP, deleteBtn);
  ul.append(li);
}

function saveTasks() {
  localStorage.setItem("myTasks", JSON.stringify(tasks));
}
