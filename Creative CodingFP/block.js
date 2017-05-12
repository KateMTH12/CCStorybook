// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/cXgA1d_E-jY&
function Block() {
  /*This is all the blocks movement. The head is the basis for all movement. I adapted the jump code from
  Flappy Bird to create the jump. I keep track of when we cross center to help climb stairs. The counter
  keeps track of how many times it has gone back and forth so I can switch scenes. The climb is achieved
  by turning off gravity*/
  
  this.head = createVector(3 * (width / 4), height - (height / 16));
  this.movement = createVector(0, 0);
  this.jump = -15;
  this.grav = 0.6;
  this.multFact = 0.9;
  this.maxSpeed = 5;
  this.counter = 0;
  this.crossed = false;
  this.last = false;
  this.center = false;

  this.display = function() {
    if (this.head.x >= width) {
      this.head.x = 0;
      this.switched();
      this.center = false;
    } else if (this.head.x <= 0) {
      this.head.x = width;
      this.switched();
      this.center = false;
    }
    //I use a boolean to check if they have switched sides especially because in the middle it is a little glitchy depending on the speed.
    if (this.head.x < ((width / 2) + 14) && this.head.x > ((width / 2) - 14)) {
      this.last = this.crossed;
      this.crossed = true;
      this.center = true;

    } else {
      this.crossed = false;
    }
    if (this.crossed === true && this.last === false) {
      this.switched();
    }
    if (this.head.y > height - 40) {
      this.head.y = height - 40;
    } else if (this.head.y <= height - 200) {
      this.movement.y = 0;
    }
    //fill(0, 0, 255);
    //rect(this.head.x, this.head.y, width/40, height/8);
  }
  this.up = function() {
    this.movement.y += this.jump;
  }

  this.Left = function() {
    if (abs(this.movement.x) >= this.maxSpeed) {
      this.movement.x = 0;
    }
    this.movement.x -= 1;
  }

  this.Right = function() {
    if (abs(this.movement.x) >= this.maxSpeed) {
      this.movement.x = 0;
    }
    this.movement.x += 1;
  }
  //These three commands are for the red light green light game
  this.Stop = function() {
    this.movement.x = 0;
  }

  this.halfSpeed = function() {
    this.maxSpeed = 1;

  }

  this.fullSpeed = function() {
    this.maxSpeed = 5;
  }

  this.update = function() {
    this.movement.y += this.grav;
    this.movement.y *= this.multFact;
    this.head.add(this.movement);
  }
  this.switched = function() {
    this.counter++;
  }
  //this resets the jumping height and gravity after climbing the stairs
  this.resetter = function(){
    this.jump = -15;
    this.grav = 0.6;
  }
  //I "climbed" getting rid of gravity, but it isn't quite perfect climbing and takes
  //knowing the program to achieve an actual climbing effect.
  this.climb = function() {
    this.jump = -5;
    this.grav = 0;
  }
   this.down = function(){
    this.grav = 0.4;
  }
}