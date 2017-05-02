/*There are a lot of variables because of all the images I imported, but I drew them
all myself in illustrator, except the tree and backgrounds which were coded.Some of the commented out code was because I tried t put the
trree and flowfield in the running code some are things that didn't work out*/
var x = 0;
var y = 50;
var switchem = false;
var last = 0;
var block;
var bobble;
var scene = 0;
var city;
var indoors;
var park;
var indoors;
var rlgl;
var end;
var counting = 0;

var blockL;
var blockLL;
var blockStill;
var blockR;
var blockRR;

var bobL;
var bobLL;
var bobStill;
var bobR;
var bobRR;

var atPark = false;
var diner = false;
var font;

var walkSign;
var stopWalking;

var stairs = false;
var left = false;
var fromCenter = false;
var changeDirect = false;
var last;

var block;
var bobble;

var end = false;
/*
var inc = 0.1;
var scl = 10;
var cols, rows;

var zoff = 0;

//var fr;

var days = [];

var flowfield;
*/

var bees = [];
var hive;
var trees;
var days;
var night;
var rain = [];
/*var tree = [];
var leaves = [];
*/
var bus;
var count = 0;
var bench;

var cashier;
var stopFlip;
var walkFlip;

var two;
var blueTable;
var yellowTable;
var piano;

var orangeroom;
var blueroom;
var soccer;
var light;
var bird;

var blueCar;
var redCar;
var words;

function preload() {
  //Chose a comic type font because it fit my style.
  font = loadFont('ActionMan.ttf');
  cashier = loadImage('cashier.png');
  stopFlip = loadImage('flipstop.png');
  walkFlip = loadImage('flipwalk.png');
  trees = loadImage('trees.png');
  hive = loadImage('hive.png');
  bus = loadImage('bus.png');
  blockL = loadImage('blockL.png');
  days = loadImage('day.png');
  night = loadImage('night.png');
  blockLL = loadImage('blockLL.png');
  blockStill = loadImage('blockStill.png');
  blockR = loadImage('blockR.png');
  blockRR = loadImage('blockRR.png');
  bench = loadImage('bench.png');
  piano = loadImage('piano.png');
  two = loadImage('dinnerTwo.png');
  blueTable = loadImage('bluetable.png');
  yellowTable = loadImage('yellowtable.png');
  bobL = loadImage('bobL.png');
  bobLL = loadImage('bobLL.png');
  bobStill = loadImage('bobStill.png');
  bobR = loadImage('bobR.png');
  bobRR = loadImage('bobRR.png');

  walkSign = loadImage('walking.png');
  stopWalking = loadImage('stop.png');
  light = loadImage('light.png');
  blueroom = loadImage('blueroom.png');
  orangeroom = loadImage('orangeroom.png');
  soccer = loadImage('soccer.png');
  redCar = loadImage('redCar.png');
  blueCar = loadImage('blueCar.png');
}

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 50);
  textFont(font);
  textSize(30);
  //Timer counted seconds for animations
  setInterval(timer, 1000)
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
  //Creating instances so all the code would work together
  block = new Block();
  bobble = new Bobble();
  city = new City();
  rlgl = new RLGL();
  house = new House();
  indoors = new Indoors();
  park = new Park();
  bird = new Bird();
  words = new Words();

  /*
  cols = floor(width / scl);
  rows = floor(height / scl);
  //fr = createP('');
  //days = new Day();
  flowfield = new Array(cols * rows);

  for (var i = 0; i < 300; i++) {
    days[i] = new Day();
  }
*/
  /*var a = createVector(width / 2, height);
  var b = createVector(width / 2, height - 100);
  var root = new Branch(a, b);

  tree[0] = root;
  */
  background(0);
  noCursor();
  //background(240);
}

function draw() {
  //block.counter helps move throught the scenes
  /*These booleans at the beginning change the maxSpeed and what text will pop up*/
  if (block.counter > 40) {
    end = true;
  } else {
    end = false;
  }
  //background(225);
  if (block.counter % 10 != 5) {
    block.fullSpeed();
    bobble.fullSpeed();
  }
  if (block.counter % 10 != 6 && block.counter % 10 != 7) {
    stairs = false;
    //resets movement vectors
    block.resetter();
    bobble.resetter();
  } else {
    stairs = true;
  }

  if (block.counter % 10 != 3 && block.counter % 10 != 4) {
    atPark = false;
  }

  if (block.counter % 10 != 8 && block.counter % 10 != 9) {
    diner = false;
  }

  if (block.counter % 10 < 3) {
    if (block.counter > 30) {
      image(night, width / 2, height / 2 - 200);
    } else {
      image(days, width / 2, height / 2 - 200);
    }
    city.display();
    //door classes
    fill(0, 255, 0);
    city.door((width / 3), (height - 50));
    fill(255, 0, 120);
    city.door((2 * (width / 3)), (height - 50));
    //rainclouds follow over head
    city.clouds(block.head.x, block.head.y - 500);
    city.clouds(bobble.head.x, bobble.head.y - 500);
    city.telephone();
    //shows the rain
    for (var m = 0; m < rain.length; m++) {
      var r = rain[m];
      r.update();
      r.display();
    }
  } else if (block.counter % 10 < 5) {
    atPark = true;
    park.display();
    image(trees, width / 2, height / 2 - 100);
    image(hive, width / 5, height / 3);
    image(bench, width / 3, height - 100);
    image(bench, width - width / 3, height - 100);
    image(bus, width - 300, height - 180);
    image(soccer, width / 7, height - 20);
    //calls the birds
    bird.display(counting);
    bird.update();
    //callse the words which pop up when you are near the bus stop
    words.update(width - 300, block.head.x);
    words.display(width - 300, block.head.x, atPark, diner);
    //limits it to a max of 10 bees
    if (bees.length > 10) {
      bees.splice(0, 1);
    }
    //shows bees
    for (var n = 0; n < bees.length; n++) {
      var b = bees[n];
      b.behaviors();
      b.update();
      b.show();
    }

    //park.tree();
  } else if (block.counter % 10 < 6) {

    if (block.counter > 30) {
      //I wanted to switch between day and night as time went on.
      image(night, width / 2, height / 2 - 70);
    } else {
      image(days, width / 2, height / 2 - 70);
    }
    rlgl.display(counting);
    image(redCar, width / 4, height - 200);
    image(blueCar, width - width / 4, height - 200);
    /*decides animation to play RLGL*/
    if (rlgl.redLight === true) {
      block.Stop();
      bobble.Stop();
      image(stopWalking, 50, height / 3);
      image(stopFlip, width - 50, height / 3);
    } else if (rlgl.yellowLight === true) {
      block.halfSpeed();
      bobble.halfSpeed();
      //if (block.counter % 0.5 === 0) {
      image(stopWalking, 50, height / 3);
      image(stopFlip, width - 50, height / 3);
      //}
    } else {
      image(walkSign, 50, height / 3);
      image(walkFlip, width - 50, height / 3);

      block.fullSpeed();
      bobble.fullSpeed();
    }
  } else if (block.counter % 10 < 8) {
    house.display();
    house.stairs();
    image(orangeroom, width / 4, height - 150);
    image(blueroom, width - width / 4, height - 100);
    //if(fromCenter === true && left === true && )
    /*if (stairs === true && (block.head.x < 360 || block.head.x > width - 360)) {
      block.climb();
      block.up();
      bobble.climb();
      bobble.up();
  }
  if (block.head.x > 360 && block.head.x < width - 360) {
    block.resetter();
    bobble.resetter();
  }*/
  } else if (block.counter % 10 < 10) {
    diner = true;
    indoors.display();
    image(piano, width / 2, height - 80);
    image(cashier, width / 2.5, height - 90);
    image(two, width - width / 4, height - 100);
    image(blueTable, width / 4, height - 70);
    image(yellowTable, 50, height - 70);
    //for loop draws the lights
    for (var i = 100; i < width - 100; i += 150) {
      image(light, i, height / 5);
    }
    //words pop up
    words.update(width / 2.5, bobble.head.x);
    words.display(width / 2.5, bobble.head.x, atPark, diner);
  }
  strokeWeight(1);
  block.display();
  bobble.display();
  block.update();
  bobble.update();
  //ellipse(width-bobble.head.x, bobble.head.y,50,50);
  //if (abs(bobble.movement.x) < 3) {
  //animates the characters
  if (bobble.movement.x < 0) {
    if (counting % 2 === 0) {
      image(blockR, block.head.x, block.head.y - 60);
      image(bobL, bobble.head.x, bobble.head.y - 60);
    } else {
      image(blockRR, block.head.x, block.head.y - 60);
      image(bobLL, bobble.head.x, bobble.head.y - 60);
    }
  } else if (bobble.movement.x > 0) {
    if (counting % 2 === 0) {
      image(blockL, block.head.x, block.head.y - 60);
      image(bobR, bobble.head.x, bobble.head.y - 60);
    } else {
      image(blockLL, block.head.x, block.head.y - 60);
      image(bobRR, bobble.head.x, bobble.head.y - 60);
    }
  } else {
    image(blockStill, block.head.x, block.head.y - 60);
    image(bobStill, bobble.head.x, bobble.head.y - 60);
  }
  //thought about speeding them up
  //}
  /*if (abs(bobble.movement.x) > 3) {
    if (bobble.movement.x < 0) {
      if (counting % 0.5 === 1) {
        image(blockR, block.head.x, block.head.y - 60);
        image(bobL, bobble.head.x, bobble.head.y - 60);
      } else {
        image(blockRR, block.head.x, block.head.y - 60);
        image(bobLL, bobble.head.x, bobble.head.y - 60);
      }
    } else if (bobble.movement.x > 0) {
      if (counting % 0.5 === 1) {
        image(blockL, block.head.x, block.head.y - 60);
        image(bobR, bobble.head.x, bobble.head.y - 60);
      } else {
        image(blockLL, block.head.x, block.head.y - 60);
        image(bobRR, bobble.head.x, bobble.head.y - 60);
      }
    } else {
      image(blockStill, block.head.x, block.head.y - 60);
      image(bobStill, bobble.head.x, bobble.head.y - 60);
    }
  }
  //left over code from flow fields
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * QUARTER_PI * 9;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
      xoff += inc;
      stroke(0, 50);
    }
    yoff += inc;

    zoff += 0.0003;
  }
  for (var i = 0; i < days.length; i++) {
    days[i].follow(flowfield);
    days[i].update();
    days[i].edges();
    days[i].show(i);
  }
  */
  //starts the end of the game where they realize they are in one world together and are neighbors
  if (end === false) {
    stroke(0);
    strokeWeight(28);
    line(width / 2, 0, width / 2, height);
  }
  //used to figure out if I can climb the stairs
  fromCenter = block.center;

}

function timer() {
  //for animation
  counting++;
}

function keyPressed() {
  //Creates raindrops for each when keys are pressed
  rain.push(new Rain(block.head.x, block.head.y, block.head.x, block.head.y - 300));
  rain.push(new Rain(bobble.head.x, bobble.head.y, bobble.head.x, bobble.head.y - 300));

//mirrored movement
  if (keyCode === LEFT_ARROW) {
    block.Right();
    if (end === false) {
      bobble.Left();
    }
    //makes you get down stairs if you change direction on the stairs
    last = left;
    left = true;
    if (last != left) {
      changeDirect = true;
    } else {
      changeDirect = false;
    }
    if (fromCenter === true) {
      //how to climb the stairs it is still not perfect, but it roughly simulates climbing
      //I did not write anything for coming from the sides and it still climbs when it shouldn't somethimes, if you change direction too much
      //or if you climb too fast or too slow it looks weird.
      if (left === true) {
        if (stairs === true && (block.head.x < 360 || bobble.head.x > width - 360)) {
          block.climb();
          block.up();
          block.Right();

          bobble.climb();
          bobble.up();
          bobble.Left();

        } else {
          block.resetter();
          bobble.resetter();
        }
        if (changeDirect === true) {
          block.down();
          block.up();
          block.Right();
          bobble.down();
          bobble.up();
          bobble.Left();
        }
      }
    }
  }
  if (keyCode === RIGHT_ARROW) {
    block.Left();
    if (end === false) {
      bobble.Right();
    }
    last = left;
    left = false;
    if (last != left) {
      changeDirect = true;
    } else {
      changeDirect = false;
    }
    if (fromCenter === true) {
      if (left === false) {
        if (stairs === true && (block.head.x < 360 || bobble.head.x > width - 360)) {
          block.climb();
          block.up();
          block.Left();
          bobble.climb();
          bobble.up();
          bobble.Right();
        } else {
          block.resetter();
          bobble.resetter();
        }
        if (changeDirect === true) {
          block.down();
          block.up();
          block.Left();
          bobble.down();
          bobble.Right();
          bobble.up();
        }
      }
    }
  }
  //makes the bees
  if (key === ' ') {
    bees.push(new Vehicle(width / 5, height / 3));
    //if (block.head.x << ((width / 3) + 30) && block.head.x >> (2 * (width / 3)) - 30) {
    block.up();
    bobble.up();

    //}
  }
  if (keyCode === DOWN_ARROW) {
    block.Stop();
    bobble.Stop();
  }
  //this is for the end game I wanted there to be seperate controls at the end so you had to think more about both
  if (end === true) {
    if (key === 65) {
      bobble.Left();
    }
    if (key === 68) {
      bobble.Right();
    }
  }
  //leftover put it elsewhere because it was slowing down the code
  //bees.push(new Bees(random(49), random(10)));
}