function Door() {
  this.display = function(x, y) {
    fill(0, 255, 0);
    rect(x, y, 60, 100);
  }
}

function Main() {
  fill(255);
  rect(0, 0, width, height);
}

function House() {
  fill(0);
  rect(0, 0, width, height);
}