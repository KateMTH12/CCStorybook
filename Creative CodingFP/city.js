function City() {
  /*This draws the city, probably should have used classes here as well. The clouds follow the characters
  just for fun.*/
  this.cloud;
  this.cloud = loadImage('cloud.png');
  this.display = function() {
    /*strokeWeight(0.5);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
    */
    rectMode(CENTER);
    ellipseMode(CENTER);
    noStroke();

    strokeWeight(1);
    fill(0, 255, 255);
    rect(width / 14, height - 450, width / 7, 900);
    fill(137, 120, 230);
    rect(width / 2 - 200, height - 200, width / 5, 400);
    fill(10, 97, 213);
    rect(width / 2 + 130, height - 350, width / 6.5, 700);
    fill(97, 23, 137);
    rect(width - width / 10, height - 600, width / 5, 1200);
    fill(120, 20, 240);
    rect((width / 4), height - 300, 2 * (width / 9), 600);
    fill(120, 230, 130);
    rect(width - (width / 4), height - 300, 2 * (width / 9), 600);
  }
  this.door = function(x, y) {
    rect(x, y, 80, 300);
  }
  /*This draws the wires and telephone poles using a for loop.*/
  this.telephone = function() {
    for (var i = 50; i < width; i += 450) {
      fill(97, 97, 97);
      rect(i, height - 200, 30, 400);
    }
    for (var j = -400; j < width; j += 450) {
      stroke(0);
      noFill();
      strokeWeight(3);
      arc(j + 225, height - 350, 450, 100, 0, PI);
    }
  }
  this.clouds = function(x,y) {
    image(this.cloud,x,y);
  }
}