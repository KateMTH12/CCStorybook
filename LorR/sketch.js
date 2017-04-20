var img;
var x = 50;
var switchem = false;
var last = 0;

function setup() {
  createCanvas(windowWidth-20, windowHeight-20);
  img = createImage(windowWidth-20, windowHeight-20);
  rectMode(CENTER);
}

function draw() {
  background(220);

  strokeWeight(1);
  if (x === width / 2 || x === 0) {
    switchem = true;
    last++;
  } else {
    switchem = false;
  }
  if (last % 2 == 1) {
    ellipse(x, height - 50, 30, 30);
  } else if (last % 2 === 0) {
    rect(x, height - 50, 30, 30);
  }
  push();
  translate(width, 0);

  scale(-1, 1);
  if (x === width / 2 || x === 0) {
    switchem = true;
    last++;
  } else {
    switchem = false;
  }
  if (last % 2 == 1) {
    rect(x, height - 50, 30, 30);

  } else if (last % 2 === 0) {
    ellipse(x, height - 50, 30, 30);
  }
  pop();
  strokeWeight(30);
  line(width / 2, 0, width / 2, height)
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    if (x > width) {
      x = 0;
    }
    x += 10;
  }
  if (keyCode == LEFT_ARROW) {
    if (x < 0) {
      x = width;
    }
    x -= 10;
  }
}