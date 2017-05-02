function Bobble() {
  /*This code mirrors the bobble code I wrote them seperatly so they could be controlled seperatly at the end of 
  the story*/
  this.head = createVector(width / 4, height - (height/16));
  this.movement = createVector(0, 0);
  this.jump = -15;
  this.grav = 0.6;
  this.multFact = 0.9;
  this.maxSpeed = 5;
  this.counter = 0;
  this.crossed = false;
  this.last = false;

  this.display = function() {
    if (this.head.x <= 0) {
      this.head.x = width;
      this.counter++;
    } else if (this.head.x >= width) {
      this.head.x = 0;
      this.switched();
    }
    if(this.head.x<((width/2)+14) && this.head.x>((width/2)-14)){
      this.last = this.crossed;
      this.crossed = true;
    }else{
      this.crossed = false;
    }
    if(this.crossed === true && this.last === false){
      this.switched();
    }
    if (this.head.y > height - 40) {
      this.head.y = height - 40;
    } else if (this.head.y <= height - 200) {
      this.movement.y = 0;
    }
    //fill(255, 0, 0);
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

  this.Stop = function(){
    this.movement.x = 0;
  }

  this.halfSpeed = function(){
    this.maxSpeed = 1;    
  }

  this.fullSpeed = function(){
    this.maxSpeed =5;
  }

  this.update = function() {
    this.movement.y += this.grav;
    this.movement.y *= this.multFact;
    this.head.add(this.movement);
  }
  this.switched = function(){
    this.counter++;
  }
  this.resetter = function(){
    this.jump = -15;
    this.grav = 0.6;
  }
  this.climb = function() {
    this.jump = -5;
    this.grav = 0;
  }
  this.down = function(){
    this.grav = 0.4;
  }
}