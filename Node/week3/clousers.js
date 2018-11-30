
//A closure is a function defined within another scope that has access to all the variables within the outer scope.
function greet(message) {
    console.log(message);
  }
  
  function greeter(name, age) {
    return name + ",and his age is " + age + " years old";
  }
  
  // Generate the message
  var message = greeter("john", 47);
  
  // Pass it explicitly to greet
  greet(message);

  //output:
  //PS C:\Users\Sowmya Sudhireddy\Desktop\week3-Assig> node clousers.js
//john,and his age is 47 years old