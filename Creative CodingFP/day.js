// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/BjoM9oKOAKY
/*Adjusted this to create teh background was going to run it in the program but it slowed 
everything down so I instead screenshotted it after running it for a bit. I wrote the avoid code
to create the sun, the res is Shiffmans. The flowfield works essensially by haveing a lot of tiny vector forces
that are spinning slowly and the points are moving through kind of like a maze*/
function Day() {
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 4;
  this.prevPos = this.pos.copy();
  this.update = function() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.follow = function(vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }


  this.show = function(i) {
    // This part too I wanted two colors in the sun.
    if (i%2 === 0) {
      stroke(232, 175, 65,100);
    } else {
      stroke(255, 249, 80,100);
    }
    strokeWeight(0.5);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
  }

  this.updatePrev = function() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }
  this.avoid = function() {
    this.vel.mult(-1);
  }
  this.edges = function() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }
    //This and the this.avoid() are the only parts I wrote.
    if (abs(dist(this.pos.x, this.pos.y, width / 6, height / 4)) < 200) {
      this.avoid();
    }
  }

}