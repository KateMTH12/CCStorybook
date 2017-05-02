function Words() {
  this.loc = 0;
  this.thoughtbubble;
  this.thoughtbubble = loadImage('thoughtbubble.png');
  this.a = 0;
  this.stuff2;
  this.stuff;
  this.display = function(x, x1, atPark, diner) {
    this.loc = x;
    noStroke();
    fill(0, 0, 0, this.a);
    if (atPark === true) {
      this.stuff = "Hey Orange this person, Blue always has the "
      this.stuff2 = "same order as you.Are you guys friends?";
      text(this.stuff, this.loc - 500, 200);
      text(this.stuff2, this.loc - 500, 250);
      if (abs(x - x1) < 50) {
        image(this.thoughtbubble, x, height - 500);
        text("Who???", x - 50, height - 520);
      }
    }
    if (diner === true) {
      this.stuff = 'Hey you going to the Oranges party tonight?';
      text(this.stuff, 100, height - 400);

      if (abs(x - x1) < 50) {
        image(this.thoughtbubble, x, height - 300);
        text("Who???", x - 50, height - 320);
      }


    }
  }
  this.update = function(x, x1) {
    if (abs(x - x1) < 50) {
      this.a = 255;
    } else {
      this.a = 0;
    }
  }
}