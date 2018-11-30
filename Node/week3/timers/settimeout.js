let fun = 'hii!';
setTimeout(function() {  
    return console.log(fun);
}, 5000);

console.log('hello, wait ...');  

output:

PS C:\Users\Sowmya Sudhireddy\Desktop\week3-Assig> node settimeout.js
hello, wait ...
hii!
