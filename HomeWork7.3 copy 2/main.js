const arrNumbers = [12, 24, 45, 23, 34, 0, 2, 0, 24, 23, 34]
let deletnumber = 24;


function removeElement(arrNumbers, deletnumber) {

  for(let i = 0; i < arrNumbers.length; i++){
    if(arrNumbers[i] === deletnumber){
      arrNumbers.splice(i,1),
      i--;
    }
  }
  console.log(arrNumbers);
};

removeElement(arrNumbers, deletnumber);