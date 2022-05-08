
var box1, box2;
function setup() 
{
  createCanvas(400, 400);

  //object of the class
  box1 = new Box(100, 200, 50, 30);
  box2 = new Box(200, 100, 30, 50);
}

function draw() 
{
  background(220);
  box1.display();
  box2.display();

  box1.changeX(3);
  box2.changeX(-3);
}

