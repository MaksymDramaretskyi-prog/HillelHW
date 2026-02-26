let userNameInput = prompt("Hi! What's your name?");
let ageUserInput = +prompt(`How old are you? ${userNameInput}`);
let stackUserInput = prompt("What's your programming stack?");


document.write(` let's sum it up? <br> Your name: ${userNameInput} <br> Your age: ${ageUserInput} <br> Your stack: ${stackUserInput} `);