var a;
console.log(a); //undefined
console.log(typeof a); // undefined
var b = null;
console.log(b); //null
console.log(typeof b); //object
console.log(nonDeclaredVariable);
// Uncaught ReferenceError: nonDeclaredVariable is not defined
//    at <anonymous>:1:13
 
console.log(typeof nonDeclaredVariable); 

output:

undefined
undefined
null
object
C:\Users\Sowmya Sudhireddy\Desktop\week3-Assig\null-undefined.js:7
console.log(nonDeclaredVariable);
            ^
ReferenceError: nonDeclaredVariable is not defined
