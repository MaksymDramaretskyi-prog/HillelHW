const errorTextNameForm = "Required input field ";
const errorTextMessageForm = "Use more than 5 characters";
const errorTextPhoneNumber = "Format: +380XXXXXXXXX";
const errorTextEmail = "Enter a correct email @ ";

const form = document.querySelector("form");
const nameInput = document.querySelector("#exampleFormControlInput1");
const messageTextarea = document.querySelector("#exampleFormControlTextarea1");
const phoneInput = document.querySelector("#exampleFormControlInput2");
const emailInput = document.querySelector("#exampleFormControlInput3");

const checkValue = (value, regExp, element) => {
  if (regExp.test(value)) {
    element.style.border = "2px solid green";
    element.style.color = "green"
  } else {
    element.style.color = "red";
    element.style.border = "2px solid red";
  }
};


const validateValue = (event) => {
  const value = event.target.value;
  const element = event.target;

  if (element === nameInput) {
    checkValue(value, /.+/, nameInput);
  }

  if (element === messageTextarea) {
    checkValue(value, /.{5,}/, messageTextarea)
  }

  if(element === phoneInput){
    checkValue(value,/^\+380\d{9}$/,phoneInput);
  }

  if(element === emailInput){
    checkValue(value,/^\S+@\S+\.\S+$/,emailInput);
  }

};

nameInput.addEventListener("input", validateValue);
messageTextarea.addEventListener("input", validateValue);
phoneInput.addEventListener("input", validateValue)
emailInput.addEventListener("input", validateValue)

form.addEventListener("submit", (event) => {

  event.preventDefault();

  const formData = new FormData(event.target);
  const formObj = {};

  formData.forEach((value, key) => (formObj[key] = value));
  console.log(formObj);


  

  if (!nameInput.value.trim()) {
    showError(nameInput, errorTextNameForm);
    return;
  } else {
    hideError(nameInput);
  }

  if(messageTextarea.value.trim().length < 5) {
    showError(messageTextarea, errorTextMessageForm);
    return;
  } else{
    hideError(messageTextarea);
  }
    
  if (!/^\+380\d{9}$/.test(phoneInput.value)) {
    showError(phoneInput, errorTextPhoneNumber)
    return;
  } else {
    hideError(phoneInput);
  }

  if (!/^\S+@\S+\.\S+$/.test(emailInput.value.trim())) {
    showError(emailInput, errorTextEmail )
    return;
  } else {
    hideError(emailInput);
  }
});



const showError = (input, message) => {
  const error = input.parentElement.querySelector(".error-message");

  error.textContent = message;
  error.classList.add("active");

  input.style.border = "2px solid red";
};

const hideError = (input) => {
  const error = input.parentElement.querySelector(".error-message");

  error.textContent = "";
  error.classList.remove("active");

  input.style.border = "2px solid green";
};