// Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4
/* This code was adpated from Shiffmans tutorial on steering to a text path.
I used it to have bees sawrm and appear when you hit the space bar.  I originally
changed the variable names, but I messed up the code and restarted with the orginal code.*/
function Vehicle(x, y) {
  /*takes in the x and y coordinates for the coordinate aka the bee hive the pos stores the vector
  position of each bee, the target is the hive and the vel and acc are for its movement the last
  two limit its movement*/
  this.pos = createVector(random(width), random(height));
  this.target = createVector(x, y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.maxspeed = 10;
  this.maxforce = 1;

  this.behaviors = function() {
    /*These are the bees behaviors like running at the hive, I kept flee to animate the bees around the hive
    Because the scalar for the flee is higher it runs away faster than it finds the hive so
    it keeps doing the dance around the hive.*/
    var arrive = this.arrive(this.target);
    var mouse = createVector(width / 5, height / 3);
    var flee = this.flee(mouse);

    arrive.mult(1);
    flee.mult(5);

    this.applyForce(arrive);
    this.applyForce(flee);
  }

  this.applyForce = function(f) {
    /*adds the vectors to make it speed up instead of a constant vel*/
    this.acc.add(f);
  }

  this.update = function() {
    /*updats the position and speed*/
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
  }

  this.show = function() {
    /*shows the bee as a black point*/
    stroke(0);
    strokeWeight(this.r);
    point(this.pos.x, this.pos.y);
  }


  this.arrive = function(target) {
    /*this is how it finds the hive d is how close we want to be to be satisfied,
    we then take the position relative to the hive on the screen to decide how fast the bee should
    fly. As you get closer the bee slows down*/
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    var speed = this.maxspeed;
    if (d < 100) {
      speed = map(d, 0, 100, 0, this.maxspeed);
    }
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  }

  this.flee = function(target) {
    /*This is similar to arrive, but instead it pushes you away from the hive
    I made the radius smaller so it wouldn't be flying too far away and it would still concentrate
    round the hive*/
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    if (d < 20) {
      desired.setMag(this.maxspeed);
      desired.mult(-1);
      var steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxforce);
      return steer;
    } else {
      return createVector(0, 0);
    }
  }
}