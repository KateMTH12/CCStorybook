function Park() {
  this.angle = 0.56;
  this.display = function() {
    noStroke();
    fill(34, 97, 37);
    rect(width / 2, height - (height / 12), width, height / 6);
  }
  /*this.branch = function(len) {
    stroke(0);
    strokeWeight(1);
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 4) {
      push();
      rotate(this.angle);
      this.branch(len * 0.67);
      pop();
      push();
      rotate(-this.angle);
      this.branch(len * 0.67);
      pop();
      this.branch(len * 0.67);
    }
  }*/
}