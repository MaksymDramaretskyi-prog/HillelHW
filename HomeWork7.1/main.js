let stringWords = "Hello world";
let arrLetters = prompt("Enter letters to delete").split("");

function deletCharecter( stringWords, arrLetters) {
  let userResult = "";

  for(let i = 0; i < stringWords.length; i++) {
   if(!arrLetters.includes(stringWords[i])) {
      userResult += stringWords[i];
    }
  }

  console.log(userResult);
  return userResult;

}

deletCharecter(stringWords, arrLetters);