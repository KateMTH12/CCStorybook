var img;
var x = 0;
var y = 50;
var switchem = false;
var last = 0;
var block;
var bobble;
var scene = 0;
var city;
var indoors;
var park;
var indoors;
var rlgl;
var end;
var counting = 0;

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 18);
  img = createImage(width, height);
  setInterval(timer,1000)
  rectMode(CENTER);
  ellipseMode(CENTER);
  block = new Block();
  bobble = new Bobble();
  city = new City();
  rlgl = new RLGL();
  house = new House();
  indoors= new Indoors();
  park = new Park();
}

function draw() {
  background(225);
  if(block.counter%5=== 0){
    city.display(); 
    city.door((width / 3), (height - 50));   
    city.door((2 * (width / 3)), (height - 50));
    block.fullSpeed();
      bobble.fullSpeed();
  }
  if(block.counter%10 === 7){
    park.display();
    block.fullSpeed();
      bobble.fullSpeed();
  }
  if(block.counter%5 ===4){
    rlgl.display(counting);
    if(rlgl.redLight === true){
      block.Stop();
      bobble.Stop();
    }else if(rlgl.yellowLight === true){
      block.halfSpeed();
      bobble.halfSpeed();
    }else{
      block.fullSpeed();
      bobble.fullSpeed();
    }
  }
    if(block.counter%5===3){
    house.display();
    house.stairs();
    block.fullSpeed();
      bobble.fullSpeed();
  }
  if(block.counter%5 === 2){
    indoors.display();
    block.fullSpeed();
      bobble.fullSpeed();
  }
  textSize(20);
  text(bobble.maxSpeed,10,30);
  strokeWeight(1);
  block.display();
  bobble.display();
  block.update();
  bobble.update();
  strokeWeight(28);
  line(width / 2, 0, width / 2, height);
  print(block.movement.x);
  //ellipse(width-bobble.head.x, bobble.head.y,50,50);
}

function timer(){
  counting++;
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
  if(keyCode === DOWN_ARROW){
    block.Stop();
    bobble.Stop();
  }
}