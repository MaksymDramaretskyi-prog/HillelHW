let userStringData;
let a;
let b;
let c;

do {
   userStringData = prompt("Please enter THREE numbers!",[999]);
} while( userStringData.length !==3 || isNaN(userStringData));


a = +userStringData[0];
b = +userStringData[1];
c = +userStringData[2];


if (a === b && b === c){
  console.log("Identical numbers:", a, b, c);
} else if(a === b  || a === c || b === c ) {
  console.log("Only two identical numbers");
} else{
  console.log("there are no identical numbers")
}