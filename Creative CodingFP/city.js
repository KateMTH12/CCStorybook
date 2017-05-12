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
    //I redid the building sizes and positions so they would scale properly and cover the whole canvas
    strokeWeight(1);
    fill(0, 255, 255);
    rect(width / 8, height - height/3, width /4 , height/1.5);
    fill(137, 120, 230);
    rect(width / 4, height - height/2.5, 1.5*width / 5, height/1.15);
    fill(10, 97, 213);
    rect(3*(width / 8), height - height/2.5, width / 4, height/1.25);
    fill(97, 23, 137);
    rect(width - 3*(width / 8), height - height/5, width / 4, height/2.5);
    fill(120, 20, 240);
    rect(width-(width / 8), height - height/3.1, 4*width/9, height/1.55);
    fill(120, 230, 130);
    rect(width - (width / 4), height - height/2.8, width/3, height/1.4);
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
  //this makes the clouds that follow the people
  this.clouds = function(x,y) {
    image(this.cloud,x,y);
  }
}