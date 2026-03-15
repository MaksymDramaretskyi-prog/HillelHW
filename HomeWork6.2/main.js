const arrData = [13, 45, 90, 34, 22, 22, 32, 78, 90, 78, 1, 6, 78, 93, 84, 83];
console.log(arrData);

const newArrData = arrData.filter(function(numbers) {
  return numbers % 2 === 0;
});

console.log(newArrData);