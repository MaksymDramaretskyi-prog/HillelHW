const number = Number(prompt("Enter a positive integer:"));

if (!Number.isInteger(number) || number <= 1) {
  console.log("Number must be an integer greater than 1.");
} else {
  let isPrime = true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${number} is a prime number.`);
  } else {
    console.log(`${number} is NOT a prime number.`);
  }
}