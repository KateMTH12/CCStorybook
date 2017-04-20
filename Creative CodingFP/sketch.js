var img;
var x = 0;
var y = 50;
var switchem = false;
var last = 0;
var block;
var bobble;
var door;
var scene = 0;
var city;
var indoors;
var park;
var indoors;
var rlgl;
var end;

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 18);
  img = createImage(width, height);
  rectMode(CENTER);
  ellipseMode(CENTER);
  block = new Block();
  bobble = new Bobble();
  door = new Door();
  city = new City();
}

function draw() {
  background(225);
  if(block.counter>= 5){
  city.display();    
  }
  strokeWeight(1);
  door.display((width / 3), (height - 50));
  door.display((2 * (width / 3)), (height - 50));
  block.display();
  bobble.display();
  block.update();
  bobble.update();
  strokeWeight(28);
  line(width / 2, 0, width / 2, height);
  print(block.counter);
  ellipse(width-bobble.head.x, bobble.head.y,50,50);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    block.Right();
    bobble.Left();
  }
  if (keyCode === RIGHT_ARROW) {
    block.Left();
    bobble.Right();
  }
  if (keyCode === UP_ARROW) {

    //if (block.head.x << ((width / 3) + 30) && block.head.x >> (2 * (width / 3)) - 30) {
      block.up();
      bobble.up();
    //}
  }
  if(keyCode === ENTER || keyCode === RETURN){
    bobble.Stop();
  }
}