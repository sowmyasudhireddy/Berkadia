
var obj = { name: "sowmya" };

var greeting = function (a, b, c) {
    return "welcome " + this.name + " to " + a + " " + b + " in " + c;
};
var args = ["BERKADIA", "HYDERABA", "INDIA"];
//call()
console.log("Output using .call() below :")
console.log(greeting.call(obj,"BERKADIA", "HYDERABA", "INDIA"));
//apply()
console.log("Output using .apply() below :")
console.log(greeting.apply(obj, args));
//bind()
var bound = greeting.bind(obj);
//console.dir(bound); ///returns a function
console.log("Output using .bind() below: ");
console.log(bound("BERKADIA", "HYDERABA", "INDIA"));//call the bound function

/*output:
PS C:\Users\Sowmya Sudhireddy\Desktop\week3-Assig> node call-apply-bind2.js
Output using .call() below :
welcome sowmya to BERKADIA,HYDERABA,INDIA 
Output using .apply() below :
welcome sowmya to BERKADIA HYDERABA in INDIA
Output using .bind() below:
welcome sowmya to BERKADIA HYDERABA in INDIA*/
