function RLGL() {
  this.redLight = false;
  this.yellowLight = false;
  this.display = function(counting) {
    noStroke();
    fill(80);
    rect(width / 2, height - (height / 12), width, height / 6);
    fill(10);
    strokeWeight(1);
    rect((width / 2) - 150, 60, 40, 120);
    rect((width / 2) + 150, 60, 40, 120);
    if (counting % 10 < 4) {
      fill(255, 0, 0, 80);
      //ellipse((width / 2) - 150, 30, 30, 30)
      ellipse((width / 2) + 150, 30, 30, 30)
      fill(255, 229, 79, 80);
      //ellipse((width / 2) - 150, 60, 30, 30)
      ellipse((width / 2) + 150, 60, 30, 30)
      fill(0, 255, 30, 255);
      //ellipse((width / 2) - 150, 90, 30, 30)
      ellipse((width / 2) + 150, 90, 30, 30)
      this.redLight = false;
      this.yellowLight = false;
    } else if (counting % 10 < 6) {
      fill(255, 0, 0, 80);
      //ellipse((width / 2) - 150, 30, 30, 30)
      ellipse((width / 2) + 150, 30, 30, 30)
      fill(255, 229, 79, 255);
      //ellipse((width / 2) - 150, 60, 30, 30)
      ellipse((width / 2) + 150, 60, 30, 30)
      fill(0, 255, 30, 80);
      //ellipse((width / 2) - 150, 90, 30, 30)
      ellipse((width / 2) + 150, 90, 30, 30)
      this.redLight = false;
      this.yellowLight = true;
    } else if (counting % 10 < 10) {
      fill(255, 0, 0, 255);
      //ellipse((width / 2) - 150, 30, 30, 30)
      ellipse((width / 2) + 150, 30, 30, 30)
      fill(255, 229, 79, 80);
      //ellipse((width / 2) - 150, 60, 30, 30)
      ellipse((width / 2) + 150, 60, 30, 30)
      fill(0, 255, 30, 80);
      //ellipse((width / 2) - 150, 90, 30, 30)
      ellipse((width / 2) + 150, 90, 30, 30)
      this.redLight = true;
      this.yellowLight = false;
    }
  }
  strokeWeight(28);
  stroke(255,247,89);
  line(width/2,height,width/2,height-50);
}