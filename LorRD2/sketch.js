var img;
var x = 0;
var y = 50;
var switchem = false;
var last = 0;
var block;
var bobble;
var door;

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 18);
  img = createImage(width, height);
  rectMode(CENTER);
  ellipseMode(CENTER);
  block = new Block();
  bobble = new Bobble();
  door = new Door();
}

function draw() {
  background(225);
  strokeWeight(1);
  door.display((width / 3), (height - 50));
  door.display((2 * (width / 3)), (height - 50));
  block.display();
  bobble.display();
  block.update();
  bobble.update();
  strokeWeight(28);
  line(width / 2, 0, width / 2, height);
  print(block.head.y);
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
    //}
  }
}

function Block() {
  this.head = createVector(3 * (width / 4), height - 40);
  this.movement = createVector(0, 0);
  this.jump = createVector(0, -15);
  this.grav = createVector(0, 0.6);
  this.multFact = createVector(1, 0.9);

  this.display = function() {
    if (this.head.x >= width) {
      this.head.x = 0;
    } else if (this.head.x <= 0) {
      this.head.x = width;
    }
    fill(0, 0, 255);
    rect(this.head.x, this.head.y, 30, 80);
  }
  this.up = function() {
    this.movement.y += this.jump.y;
  }
  this.Left = function() {
    this.movement.x -= 1;
  }
  this.Right = function() {
    this.movement.x += 1;
  }
  this.update = function() {
    this.movement.y += this.grav.y;
    this.movement.y *= 0.9;
    this.head.add(this.movement);
    //print(this.head);
    /*if (this.head.x >= (height - 40)) {
      this.head.y = height - 40;
      this.movement.y = 0;
    }*/
  }
}

function Bobble() {
  this.head = createVector(width / 4, height - 40);
  this.movement = createVector(0, 0);
  this.display = function() {
    if (this.head.x <= 0) {
      this.head.x = width;
    } else if (this.head.x >= width) {
      this.head.x = 0;
    }
    fill(255, 0, 0);
    rect(this.head.x, this.head.y, 30, 80);
  }
  this.jump = createVector(0, 0.6);
  this.up = function() {
    this.movement.add(this.jump);
  }
  this.Left = function() {
    this.movement.x -= 1;
  }
  this.Right = function() {
    this.movement.x += 1;
  }
  this.update = function() {
    this.head.add(this.movement);
  }
  this.switchem = function() {}

}

function Door() {
  this.display = function(x, y) {
    fill(0, 255, 0);
    rect(x, y, 60, 100);
  }
}

function Main() {
  fill(255);
  rect(0, 0, width, height);
}

function House() {
  fill(0);
  rect(0, 0, width, height);
}