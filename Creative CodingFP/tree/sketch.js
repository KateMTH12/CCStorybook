// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/0jjeOYMjmDU

var angle = 0.56;
//var slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
  background(80,80,80);
  //angle = slider.value();
  stroke(240);
  tree(200,height/5);
  tree(width-300,height/6);

}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
    branch(len * 0.67);
  }

  //line(0, 0, 0, -len * 0.67);
}

function tree(x,y){
  push();
  translate(x, height);
  branch(y);
  pop();
}