let integer = Number(prompt("Enter a number : N"));

for(let i = 1; i <= 100; i++){
  if(i * i <= integer){
    console.log(`${i} (sguare: ${i * i})`)
  }
}