function Words() {
  /*I wrote this code to have the text pop up. I chose to add this so it would have more of a narrative
  I used boooleans to decide what would be said at what scene and distance to decide when it would pop up.*/
  this.close = false;
  this.loc = 0;
  this.thoughtbubble;
  this.thoughtbubble = loadImage('thoughtbubble.png');
  this.a = 0;
  this.stuff2;
  this.stuff;
  //x is the x coordinate for the obect the character should run in to for it to pop up
  //x1 is the characters x coordinate
  //y is the characters y coordinate
  //scene is a number relating to what scene in the story it is
  //cha is which character 1 is blockhead 2 is bobble
  this.display = function(x, x1, y, scene, cha) {
    this.loc = x;
    noStroke();
    fill(0, 0, 0, this.a);
    /*For some reason using cases wasn't working for me I think it's because 
    I didn't have a case for each at one point, so I just went with an if statement which worked fine.
    I had originally wanted to minimize text, but I got feedback that it helped the story so I added more.
    switch (scene) {
      case '1':
        this.stuff = 'Hey you going to the Oranges party tonight?';
        text(this.stuff, this.loc - 400, 100);
        if (abs(x - x1) < 50) {
          image(this.thoughtbubble, x, y - 290);
          text("Who???", x - 50, y - 300);
        }
        break;

      case '4':
        this.stuff = "Hey Orange this person, Blue always has the ";
        this.stuff2 = "same order as you. Are you guys friends?";
        text(this.stuff, 100, 200);
        text(this.stuff2, 100, 250);

        if (abs(x - x1) < 50) {
          image(this.thoughtbubble, x, y - 290);
          text("Who???", x - 50, y - 300);
        }
        break;

      case '2':
        this.stuff = "Hey get out of the road!!!";
        text(this.stuff, 100, 200);
        if (abs(x - x1) < 50) {
          image(this.thoughtbubble, x, y - 290);
          text("Me???", x - 50, y - 300);
        }
        break;
      case '3':
        if (abs(x - x1) < 50) {
          image(this.thoughtbubble, x, y - 290);
          text("I'm so bored!!!", x - 50, y - 300);
        }
    }*/
    if (scene === 1) {
      if (cha === 1) {
        this.stuff = 'Hey you going to Blues party tonight?';
        text(this.stuff, this.loc - 400, 100);
        if (abs(x - x1) < 50) {
          image(this.thoughtbubble, x, y - 290);
          text("Who???", x - 50, y - 320);
        }
      } else {
        this.stuff = "Can't wait for tonight!";
        text(this.stuff, this.loc - 400, 100);
      }
    }
    if (scene === 2) {
      fill(255,255,255,this.a);
      this.stuff = "Hey get out of the road!!!";
      text(this.stuff, 150, 200);
      image(this.thoughtbubble, x, y - 290);
      text("Me???", x - 25, y - 300);

    }
    if (scene === 3) {
      if (abs(x - x1) < 50) {
        image(this.thoughtbubble, x, y - 290);
        text("I'm so", x - 50, y - 325);
        text("bored!!!", x - 50, y - 275);
      }
    }
    if (scene === 4) {
      if (cha === 1) {
        if (x === (width - width / 4)) {
          this.stuff = "Hey Orange long time no see";
          text(this.stuff, 2 * width / 3, height / 2 - 50);
        } else {
          this.stuff = "Hey Orange this person, Blue always has the ";
          this.stuff2 = "same order as you. Are you guys friends?";
          text(this.stuff, 100, height / 2 - 100);
          text(this.stuff2, 100, height / 2-50);

          if (abs(x - x1) < 50) {
            image(this.thoughtbubble, x, y - 290);
            text("Who???", x - 50, y - 320);
          }
        }
      } else {
        if (x === (width - width / 4)) {
          this.stuff = "Blue, you should really branch out and try this dish.";
          text(this.stuff, width/2 + 100, height / 2 - 50);
        } else {
          this.stuff = "Hey Blue, the regular? Black coffee";
          this.stuff2 = "and hashbrowns?";
          text(this.stuff, 100, height / 2 - 50);
          text(this.stuff2, 100, height / 2);
        }
      }
    }
    if(scene === 6){
      if(cha === 1){
        fill(241,139,42,this.a);
        text("Wait are you Blue?",x-100,y-290);
      }else{
        fill(13,129,168,this.a);
        text("Yes, you must be Orange!",x,y-240);
      }
    }
  }

  //this changes the opacity of the words based on distance from
  //target
  this.update = function(x, x1) {
    if (abs(x - x1) < 50) {
      this.a = 255;
      this.close = true;
    } else {
      this.a = 0;
      this.close = false;
    }
  }
}