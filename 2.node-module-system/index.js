const firstModule = require('./first-module');
console.log(firstModule.multiplication(2,5));

try{
 let result = firstModule.division(0,0);
 console.log(result);
} catch(error){
 console.log(error.message);
}