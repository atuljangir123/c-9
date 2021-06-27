

var a = prompt('Enter the first variable: ');

var b = prompt('Enter the second varibale');

function setup(){
  var b2 = createButton("click here to swap");
  b2.mousePressed(swap);
  }


function draw()
{
}
function swap(){
  [a,b]=[b,a];
  console.log("the value of a",+a)
  console.log("the value of b",+b)
}
