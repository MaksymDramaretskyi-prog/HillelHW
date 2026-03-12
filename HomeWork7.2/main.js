let arrDifferentTypes = [94, " ", 78, 90, true, null, [], {}, 90,];
let arrNumber = 0;
let resultSum = 0;

function resultSumArr(arrDifferentTypes, arrNumber, resultSum){
  let count = 0;
  for(i = 0; i < arrDifferentTypes.length; i++){
    if(typeof arrDifferentTypes[i] === "number"){
      arrNumber += arrDifferentTypes[i];
      count++;
      resultSum =  arrNumber / count;
    }
  };
  console.log(resultSum);
}

resultSumArr(arrDifferentTypes, arrNumber, resultSum);