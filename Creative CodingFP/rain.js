function Rain(x,y,x1,y1) {
  this.x = random(x1-80,x1+80);
  this.y = y1;
  this.pos = createVector(this.x, this.y);
  this.gravity = createVector(0, 8);
  this.target = createVector(x, y);
  //this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.maxspeed = 10;
  this.maxforce = 1;
  this.display = function() {
    noStroke();
    fill(120, 120, 255);
    ellipse(this.pos.x, this.pos.y, 5, 5);
  }
  this.flee = function(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    if (d < 100) {
      desired.setMag(this.maxspeed);
      desired.mult(-1);
      var steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxforce);
      return steer;
    } else {
      return createVector(0, 0);
    }
  }
  this.behaviors = function(x, y) {
    var mouse = createVector(x, y);
    //var bob = createVector(x1, y1)
    var flee = this.flee(mouse);


    arrive.mult(1);
    flee.mult(5);

    this.applyForce(arrive);
    this.applyForce(flee);
  }

  this.applyForce = function(f) {
    this.acc.add(f);
  }

  this.update = function() {
    this.pos.add(this.gravity);
    this.gravity.add(this.acc);
    this.acc.mult(0);
  }

}