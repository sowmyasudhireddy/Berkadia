var array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map(x => x * 2);
console.log(map1);

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

//const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer));
console.log(array1.reduce(reducer, 5));

output:

PS C:\Users\Sowmya Sudhireddy\Desktop\week3-Assig> node es6array.js
[ 2, 8, 18, 32 ]
[ 'exuberant', 'destruction', 'present' ]
30
35
