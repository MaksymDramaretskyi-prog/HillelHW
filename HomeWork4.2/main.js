let userStringDato;
let a;
let b;
let c;

do {
   userStringDato = prompt("Please enter THREE numbers!",[999]);
} while( userStringDato.length !==3 || isNaN(userStringDato));


a = +userStringDato[0];
b = +userStringDato[1];
c = +userStringDato[2];


if (a === b && b === c){
  console.log("Identical numbers:", a, b, c);
} else if(a === b  || a === c || b === c ) {
  console.log("Only two identical numbers");
} else{
  console.log("there are no identical numbers")
}