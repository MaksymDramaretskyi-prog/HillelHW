let stringWords = "Hello world";
let toRemoveFirstLetter = "l";
let toRemoveSecondLetter = "d";

function deletCharecter( stringWords, toRemoveFirstLetter, toRemoveSecondLetter) {
  let resultString = [];
  let userResult = "";
  resultString = stringWords.split("");

  for(let i = 0; i < resultString.length; i++) {
    if(resultString[i] !== toRemoveFirstLetter && resultString[i] !== toRemoveSecondLetter) {
      userResult += resultString[i];
    }
  }
  document.write(userResult);
  return userResult;

}

deletCharecter(stringWords, toRemoveFirstLetter, toRemoveSecondLetter);