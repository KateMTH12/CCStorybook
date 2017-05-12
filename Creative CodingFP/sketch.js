/*There are a lot of variables because of all the images I imported, but I drew them
all myself in illustrator, except the tree and backgrounds which were coded.Some of the commented out code was because I tried t put the
trree and flowfield in the running code some are things that didn't work out
I found the music on jamendo.com and here is the info for the artist.
CREDITS
"Flowing Air" is a composition of the italian composer Mattia Vlad Morleo.

Subscribe to the Mattia Vlad Morleo’s Youtube channel to be always notified of every news: http://bit.ly/2gEGh8y

Follow Mattia Vlad Morleo on the Social Network:
Facebook: http://www.facebook.com/MattiaVladMorleoOfficial
Instagram: http://www.instagram.com/mattiamorleo
Twitter: http://www.twitter.com/MattiaMorleo
*/
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

var scene;
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
var treeNight;
var arrow;
var blueCar;
var redCar;
var words;
var nightBus;
//var pause;
var music;

function preload() {
  music = loadSound('FlowingAir.mp3');

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
  treeNight = loadImage('treeNight.png');
  arrow = loadImage('arrow.png');
  nightBus = loadImage('nightBus.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
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
  //attempt at making a walking delay
  //pause = setTimeout(delayer, 5000);
  setInterval(song, 223000);
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
  if(counting%223 === 0){
    music.play();
  }
  //block.counter helps move throught the scenes
  /*These booleans at the beginning change the maxSpeed and what text will pop up*/
  if (block.counter > 20) {
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

  if (block.counter % 10 < 3) {
    //I changed the night day timer so it would cycle
    if (floor(block.counter / 10) % 2 === 1) {
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
    scene = 1;
    if (floor(block.counter / 10) % 2 === 1) {
      image(treeNight, width / 2, height / 2 - 100)
    } else {
      image(trees, width / 2, height / 2 - 100);
    }
    park.display();

    image(hive, width / 5, height / 3);
    image(bench, width / 3, height - 100);
    image(bench, width - width / 3, height - 100);
    if (block.counter < 10) {
      image(bus, width - 300, height - 180);
    } else {
      image(nightBus, width - 300, height - 180);
    }
    image(soccer, width / 7, height - 20);
    //calls the birds
    bird.display(counting);
    bird.update();
    //calls the words which pop up when you are near the bus stop
    //I added a lot more text throughout
    words.update(width - 300, block.head.x);
    words.display(width - 300, block.head.x, block.head.y, scene, 1);
    words.update(width - 300, bobble.head.x);
    words.display(width - 300, bobble.head.x, bobble.head.y, scene, 2);
    /*
    Attempts at making them pause when reading so they would run in to
    each other but still be controlled by one person. It didn't work out as
    expected, but you could still try it, it doesn't crash the program.
    if(words.close === true){
      block.stop();
    }*/
    /*if(block.head.x === width-width/4){
      pause;
    }*/
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
    scene = 2;
    if (floor(block.counter / 10) % 2 === 1) {
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
      words.update(0, 0);
      words.display(block.head.x, 0, block.head.y, scene, 1);
      words.display(bobble.head.x, 0, bobble.head.y, scene, 2);
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
    scene = 3;
    house.display();
    house.stairs();
    image(orangeroom, width / 3, height - 150);
    image(blueroom, width - width / 3, height - 100);
    words.update(width / 3, block.head.x);
    words.update((width - width / 3), bobble.head.x);
    words.display(width / 3, block.head.x, block.head.y, scene, 1);
    words.display((width - width / 3), bobble.head.x, bobble.head.y, scene, 2);
    words.update(width / 4, bobble.head.x);
    words.update((width - width / 4), block.head.x);
    words.display(width / 4, bobble.head.x, bobble.head.y, scene, 1);
    words.display((width - width / 4), block.head.x, block.head.y, scene, 2);
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
    scene = 4;
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
    words.display(width / 2.5, bobble.head.x, bobble.head.y, scene, 2);
    words.update(width - width / 4, block.head.x);
    words.display(width - width / 4, block.head.x, block.head.y, scene, 1);
    words.update(width / 2.5, block.head.x);
    words.display(width / 2.5, block.head.x, bobble.head.y, scene, 1);
    words.update(width - width / 4, bobble.head.x);
    words.display(width - width / 4, bobble.head.x, bobble.head.y, scene, 2);
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
  //At the beginning so you know who you control
  if (counting < 10) {
    if (counting % 2 === 0) {
      image(arrow, bobble.head.x, bobble.head.y - 200);
    }
  }
  //starts the end of the game where they realize they 
  //are in one world together and are neighbors
  if (end === false) {
    stroke(0);
    strokeWeight(28);
    line(width / 2, 0, width / 2, height);
  }
  //used to figure out if I can climb the stairs
  fromCenter = block.center;
  //Ending message
  if (end === true) {
    words.update(block.head.x, bobble.head.x);
    words.display(block.head.x, bobble.head.x, block.head.y, 6, 1);
    words.update(bobble.head.x, block.head.x);
    words.display(bobble.head.x, block.head.x, bobble.head.y, 6, 2);
  }
}

function timer() {
  //for animation
  counting++;
}

/*attempt at delay function
function delayer() {
  block.Stop();
}
*/
function song() {
  music.play();
}

function keyPressed() {
  //Creates raindrops for each when keys are pressed
  rain.push(new Rain(block.head.x, block.head.y, block.head.x, block.head.y - 300));
  rain.push(new Rain(bobble.head.x, bobble.head.y, bobble.head.x, bobble.head.y - 300));

  //mirrored movement
  if (keyCode === LEFT_ARROW) {
    bobble.Left();
    if (end === false) {
      block.Right();
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
    bobble.Right();
    if (end === false) {
      block.Left();
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
  //fixed the syntax so it works
  if (end === true) {
    if (keyCode === 65) {
      block.Left();
    }
    if (keyCode === 68) {
      block.Right();
    }
  }
  //leftover put it elsewhere because it was slowing down the code
  //bees.push(new Bees(random(49), random(10)));
}