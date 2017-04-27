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

var blockL;
var blockLL;
var blockStill;
var blockR;
var blockRR;

var bobL;
var bobLL;
var bobStill;
var bobR;
var bobRR;

var walkSign;
var stopWalking;

function preload() {
  blockL = loadImage('blockL.png');

  blockLL = loadImage('blockLL.png');
  blockStill = loadImage('blockStill.png');
  blockR = loadImage('blockR.png');
  blockRR = loadImage('blockRR.png');

  bobL = loadImage('bobL.png');
  bobLL = loadImage('bobLL.png');
  bobStill = loadImage('bobStill.png');
  bobR = loadImage('bobR.png');
  bobRR = loadImage('bobRR.png');

  walkSign = loadImage('walking.png');
  stopWalking = loadImage('stop.png');
}

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 18);
  img = createImage(width, height);
  setInterval(timer, 1000)
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
  block = new Block();
  bobble = new Bobble();
  city = new City();
  rlgl = new RLGL();
  house = new House();
  indoors = new Indoors();
  park = new Park();
}

function draw() {
  background(225);
  if (block.counter % 5 === 0) {
    city.display();
    city.door((width / 3), (height - 50));
    city.door((2 * (width / 3)), (height - 50));
    block.fullSpeed();
    bobble.fullSpeed();
  } else if (block.counter % 5 === 1) {
    park.display();
    //park.branch(100);
    block.fullSpeed();
    bobble.fullSpeed();
  } else if (block.counter % 5 === 4) {
    rlgl.display(counting);
    if (rlgl.redLight === true) {
      block.Stop();
      bobble.Stop();
      image(stopWalking, 50, height / 3);
    } else if (rlgl.yellowLight === true) {
      block.halfSpeed();
      bobble.halfSpeed();
      image(stopWalking, 50, height / 3);
    } else {
      image(walkSign, 50, height / 3);
      block.fullSpeed();
      bobble.fullSpeed();
    }
  } else if (block.counter % 5 === 3) {
    house.display();
    house.stairs();
    block.fullSpeed();
    bobble.fullSpeed();
  } else if (block.counter % 5 === 2) {
    indoors.display();
    block.fullSpeed();
    bobble.fullSpeed();
  }
  strokeWeight(1);
  block.display();
  bobble.display();
  block.update();
  bobble.update();
  //ellipse(width-bobble.head.x, bobble.head.y,50,50);
  //if (abs(bobble.movement.x) < 3) {
  if (bobble.movement.x < 0) {
    if (counting % 2 === 0) {
      image(blockR, block.head.x, block.head.y - 60);
      image(bobL, bobble.head.x, bobble.head.y - 60);
    } else {
      image(blockRR, block.head.x, block.head.y - 60);
      image(bobLL, bobble.head.x, bobble.head.y - 60);
    }
  } else if (bobble.movement.x > 0) {
    if (counting % 2 === 0) {
      image(blockL, block.head.x, block.head.y - 60);
      image(bobR, bobble.head.x, bobble.head.y - 60);
    } else {
      image(blockLL, block.head.x, block.head.y - 60);
      image(bobRR, bobble.head.x, bobble.head.y - 60);
    }
  } else {
    image(blockStill, block.head.x, block.head.y - 60);
    image(bobStill, bobble.head.x, bobble.head.y - 60);
  }
  //}
  /*if (abs(bobble.movement.x) > 3) {
    if (bobble.movement.x < 0) {
      if (counting % 0.5 === 1) {
        image(blockR, block.head.x, block.head.y - 60);
        image(bobL, bobble.head.x, bobble.head.y - 60);
      } else {
        image(blockRR, block.head.x, block.head.y - 60);
        image(bobLL, bobble.head.x, bobble.head.y - 60);
      }
    } else if (bobble.movement.x > 0) {
      if (counting % 0.5 === 1) {
        image(blockL, block.head.x, block.head.y - 60);
        image(bobR, bobble.head.x, bobble.head.y - 60);
      } else {
        image(blockLL, block.head.x, block.head.y - 60);
        image(bobRR, bobble.head.x, bobble.head.y - 60);
      }
    } else {
      image(blockStill, block.head.x, block.head.y - 60);
      image(bobStill, bobble.head.x, bobble.head.y - 60);
    }
  }*/
  strokeWeight(28);
  line(width / 2, 0, width / 2, height);
}

function timer() {
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
  if (keyCode === DOWN_ARROW) {
    block.Stop();
    bobble.Stop();
  }
}