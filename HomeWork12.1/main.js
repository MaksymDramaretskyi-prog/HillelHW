const form = document.querySelector(".link-form");
const input = document.querySelector(".link-input");
const openBtn = document.querySelector(".open-form");
const goBtn = document.querySelector(".go-btn");

let url = "";

openBtn.addEventListener("click", () => {
  form.classList.remove("hidden");
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); //тобы страница не перезагрузилась

  url = input.value; 
  form.classList.add("hidden")
  input.value = ""; // очищаю поле
});

goBtn.addEventListener("click", () => {
  if (url) {
    window.location.href = url;
  } else {
    alert("Сначала введи ссылку");
  }
});