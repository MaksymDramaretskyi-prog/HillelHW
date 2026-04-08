function getFun() {
  let sum = 0;

  return function(number) {
      sum += number;
    return sum;
  }
}
const sumFunc =  getFun();

console.log(sumFunc(4));
console.log(sumFunc(6));
console.log(sumFunc(10));
console.log(sumFunc(7));