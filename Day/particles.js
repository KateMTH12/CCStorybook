// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/BjoM9oKOAKY

function Particle() {
  this.a = 30;
  this.l = 1;
  this.colors = this.orange;
  this.orange = color(232, 175, 65);
  this.yellow = color(255, 249, 80);
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 4;
  this.i = 0;
  this.prevPos = this.pos.copy();
  setInterval(5000, this.chameleon);
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

  this.chameleon = function() {
    this.i = this.i + 1;
    if (this.i > 12) {
      this.i = 0;
    }
    if (this.colors === this.orange) {
      this.colors = this.yellow;
    } else {
      this.colors = this.orange;
    }
    this.a = 30;
    this.a += 10;
    if (this.a < 30) {
      this.a = 30;
    }
    this.l = .2;
    this.l += .1;
    if (this.l > .5) {
      l = 1;
    }
  }

  this.show = function() {
    stroke(this.colors);
    strokeWeight(this.l);
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
    if (abs(dist(this.pos.x, this.pos.y, width / 6, height / 4)) < 200) {
      this.avoid();
    }
  }

}