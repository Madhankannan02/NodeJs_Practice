function add(a,b) {
 return a+b;
}

function subtract(a,b){
 return a-b;
}

function multiplication(a,b){
 return a*b;
}

function division(a,b){
 if (b === 0){
  throw new Error("Divide by zero is not allowed");
 } else {
  return a/b;
 }
}

module.exports = {
 add,
 subtract,
 multiplication,
 division
};