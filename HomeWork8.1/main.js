function getFun() {
  let getValue= 0;
  return function(a) {
  
    return getValue += a;
  }
}
const sumFunc =  getFun();

console.log(sumFunc(4));
console.log(sumFunc(6));
console.log(sumFunc(10));
console.log(sumFunc(7));