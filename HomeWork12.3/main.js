
const list = document.querySelector(".listTasks");
const input = document.querySelector(".link-input");
const form = document.querySelector(".link-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const li = document.createElement("li"); 
  li.appendChild(checkbox);

  list.appendChild(li);
  input.value = "";
});

list.addEventListener("click", (event) => {
  const target = event.target;

  if (target.type === "checkbox") {
    target.parentElement.remove();
  }
});

