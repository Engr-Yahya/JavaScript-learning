// 
// Immidiate Invoked Function Expression (IIFE) with Arrow Functions
// This code demonstrates how to use an IIFE with arrow functions in JavaScript.

(function dataBase(){
  console.log(`DB Connected`);
})();
// Remember the ";" semicolon is important here after the closing parenthesis of the IIFE without it it will throw an error
(() => {
  console.log(`Arrow Function IIFE Executed`);
})();