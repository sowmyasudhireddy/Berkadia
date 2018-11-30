var count = 0; 
var intervalObject = setInterval(function () { 
        count++; 
        console.log(count, 'seconds passed'); 
        if (count == 5) { 
            console.log('exiting'); 
            clearInterval(intervalObject); 
        } 
    }, 1000); 


Output:

PS C:\Users\Sowmya Sudhireddy\Desktop\week3-Assig> node setinterval.js
1 'seconds passed'
2 'seconds passed'
3 'seconds passed'
4 'seconds passed'
5 'seconds passed'
exiting
    
