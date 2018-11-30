console.log('before immediate');

setImmediate((arg) => {
  console.log(`executing immediate: ${arg}`);
}, 'so immediate');
// setImmediate() will execute after all runnable code has executed

console.log('after immediate');

output:
PS C:\Users\Sowmya Sudhireddy\Desktop\week3-Assig> node setimmediate.js
before immediate
after immediate
executing immediate: so immediate
