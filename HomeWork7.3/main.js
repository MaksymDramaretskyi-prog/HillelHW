const arrNumbers = [12, 24, 45, 23, 34, 0, 2]
let deletnumber = 0;


function removeElement(arrNumbers, deletnumber) {
  let index = arrNumbers.indexOf(deletnumber);
  arrNumbers.splice(index,1)
  console.log(arrNumbers);
};

removeElement(arrNumbers, deletnumber);