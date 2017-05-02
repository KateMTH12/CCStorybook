function City() {
  this.display = function() {
    /*strokeWeight(0.5);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    this.updatePrev();
    */
    rectMode(CENTER);
    ellipseMode(CENTER);
    noStroke();
    fill(255);
    rect(width / 2, height / 2, width, height);
    strokeWeight(1);
    fill(120, 20, 240);
    rect((width / 4), height - 300, 2 * (width / 9), 600);
    fill(120, 150, 30);
    rect(width - (width / 4), height - 300, 2 * (width / 9), 600);
    rect(width/14,height-450,width/7,900);
    rect(width/2-200,height-200,width/5,400);
    rect(width/2+130,height-350,width/6.5,700);
    rect(width-width/10,height-600,width/5,1200);
  }
  this.door = function(x, y) {
    fill(0, 255, 0);
    rect(x, y, 80, 300);
  }
  this.telephone = function(){
    for(var i = 50;i<width;i+= 450){
      fill(255,0,0);
      rect(i,height-200,30,400);
    }
    for(var i = -400;i<width;i+= 450){
      stroke(0);
      noFill();
      strokeWeight(3);
      arc(i+225,height-350,450,100,0,PI);
    }
  }
}