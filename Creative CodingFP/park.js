// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/0jjeOYMjmDU
function Park() {
  /*This draws the park, I also wanted to draw trees, but it was slowing down the code so I didn't call the function here
  I ran it somewhere else and screenshot it in. This code was adapted from Shiffman's I just picked the angle and height I liked.*/
  this.angle = 0.56;
  this.display = function() {
    noStroke();
		
    noStroke();
    fill(34, 97, 37);
    rect(width / 2, height - (height / 12), width, height / 6);
  }
  //Shiffmans code
  this.branch = function(len) {
    stroke(0);
    strokeWeight(0.5);
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 4) {
      push();
      rotate(this.angle);
      this.branch(len * 0.67);
      pop();
      push();
      rotate(-this.angle);
      this.branch(len * 0.67);
      pop();
      this.branch(len * 0.67);
    }
  }
  //I wrote this in an effort to make it work in the draw loop faster.
  this.tree = function(){
    push();
    translate(width/4,height);
    this.branch(200);
    pop();
  }
}