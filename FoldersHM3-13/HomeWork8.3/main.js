function passValueFormUser() {
  let count = 0;
  let userAnswer;

  do {
    userAnswer = prompt("Enter number bigger than 100");

    if (userAnswer === null || isNaN(userAnswer)) {
      break;
    }

    userAnswer = Number(userAnswer);
    count++;

  } while (userAnswer <= 100 && count < 10);

  console.log(userAnswer);
}

passValueFormUser();