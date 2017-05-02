function Bird() {
  /*This animates a bird as it flies across the screen. I made two birds and two different flight
  patterns. It probably would have made more sense to use classes, but since I only have two
  this is fine. There is no acceleration so they jsut fly on a pretty standard loop.*/
  this.birdie;
  this.birdie = loadImage('bird.png');
  this.birdFlap1;
  this.birdFlap2;
  this.birdFlap1 = loadImage('fly1.png');
  this.birdFlap2 = loadImage('fly2.png');
  this.travel = createVector(width / 3, height / 3);
  this.flight = createVector(5, 0);
  this.bird2;
  this.bird2 = loadImage('bluebird.png');
  this.bird2flap;
  this.bird2flap = loadImage('bluebirdFlap.png');
  this.traveler = createVector(width - width / 4, height - height / 5);
  this.flighter = createVector(-3, -2);
  this.display = function(counting) {
    /*if (abs(height / 5 - this.travel.x) > 5) {
      image(this.birdie, this.travel.x, this.travel.y);
    }*/
    /*This allows for it to create really basic animation as it appears to move by flipping between two similar frames.*/
    if (counting % 2 === 0) {
      image(this.birdFlap1, this.travel.x, this.travel.y);
      image(this.bird2, this.traveler.x, this.traveler.y);

    } else {
      image(this.birdFlap2, this.travel.x, this.travel.y);
      image(this.bird2flap, this.traveler.x, this.traveler.y);
    }
  }
  this.update = function() {
    /*Keeps it onscreen and moving*/
    this.travel.add(this.flight);
    if (this.travel.x > width) {
      this.travel.x = 0;
    }
    this.traveler.add(this.flighter);
    if (this.traveler.x < 0 || this.traveler.y < 0) {
      this.traveler.x = width;
      this.traveler.y = height - height / 300;
    }
  }
}