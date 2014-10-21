var randomsfcPyramid = function(n){
  var message = "";
  var counter = 0;

  while(counter<n){
    message = message + "SFC";
    counter = counter + 1;
  }
return message
};

var output;
var counter = 1;
var n = 100;

  while(counter <= n){
    output = randomsfcPyramid(counter);
    console.log(output);
    counter = counter +1;
  }

var createNumber = function(n){
  var tmp = Math.random()*n;
  var result = Math. floor(tmp);
  return result;
};

createNumber(100);
