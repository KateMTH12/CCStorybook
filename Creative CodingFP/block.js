function Block() {
  this.head = createVector(3 * (width / 4), height - 40);
  this.movement = createVector(0, 0);
  this.jump = -15;
  this.grav = 0.6;
  this.multFact = 0.9;
  this.maxSpeed = 5;
  this.counter = 0;
  this.crossed = false;
  this.last = false;

  this.display = function() {
    if (this.head.x >= width) {
      this.head.x = 0;
this.switched();
    } else if (this.head.x <= 0) {
      this.head.x = width;
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
    fill(0, 0, 255);
    rect(this.head.x, this.head.y, 30, 80);
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

  this.update = function() {
    this.movement.y += this.grav;
    this.movement.y *= this.multFact;
    this.head.add(this.movement);
  }
  this.switched = function(){
    this.counter++;
  }
}