let ClassA = function() {
    this.firstname = "sowmya";
    this.lastname  ="sudhireddy";
}
var a = new ClassA();
ClassA.prototype.printfullname=function(){
      console.log("fullname is:"+this.firstname+this.lastname);

};
a.printfullname();

var inheritsFrom = function (parent,child) {
    child.prototype = Object.create(parent.prototype);
};
var ClassB = function() {
    this.firstname = "subhasri";
    this.lastname = "Batulla";
}

inheritsFrom(ClassA, ClassB);
var b = new ClassB();

// ClassB.prototype.print = function() {
//     console.log("fullname is:"+this.firstname+this.lastname);
// }
b.printfullname();

/*output:
PS C:\Users\Sowmya Sudhireddy\Desktop\week3-Assig> node inheritance.js
fullname is:sowmyasudhireddy
fullname is:subhasriBatulla*/

