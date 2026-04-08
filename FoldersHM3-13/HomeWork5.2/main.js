const exchangeRate = 45;

for (let dollars = 10; dollars <= 100; dollars += 10){
  const sum = dollars * exchangeRate;
  console.log(`${dollars}$ = ${sum} UAH`);
}
