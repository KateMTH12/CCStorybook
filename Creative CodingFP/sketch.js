var img;
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

var walkSign;
var stopWalking;

var stairs = false;
var left = false;
var fromCenter = false;
var changeDirect = false;
var last;

var block;
var bobble;
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

var tree = [];
var leaves = [];

var count = 0;

function mousePressed() {
  for (var i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }
    tree[i].finished = true;
  }
  count++;

  if (count === 6) {
    for (var j = 0; j < tree.length; j++) {
      if (!tree[j].finished) {
        var leaf = tree[j].end.copy();
        leaves.push(leaf);
      }
    }
  }


}

function preload() {
  blockL = loadImage('blockL.png');

  blockLL = loadImage('blockLL.png');
  blockStill = loadImage('blockStill.png');
  blockR = loadImage('blockR.png');
  blockRR = loadImage('blockRR.png');

  bobL = loadImage('bobL.png');
  bobLL = loadImage('bobLL.png');
  bobStill = loadImage('bobStill.png');
  bobR = loadImage('bobR.png');
  bobRR = loadImage('bobRR.png');

  walkSign = loadImage('walking.png');
  stopWalking = loadImage('stop.png');
}

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 18);
  img = createImage(width, height);
  setInterval(timer, 1000)
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
  block = new Block();
  bobble = new Bobble();
  city = new City();
  rlgl = new RLGL();
  house = new House();
  indoors = new Indoors();
  park = new Park();
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
  var a = createVector(width / 2, height);
  var b = createVector(width / 2, height - 100);
  var root = new Branch(a, b);

  tree[0] = root;
  background(0);
  noCursor();
  //background(240);
}

function draw() {
  //background(225);
  if (block.counter % 5 != 4) {
    block.fullSpeed();
    bobble.fullSpeed();
  }
  if (block.counter % 5 != 3) {
    stairs = false;
    block.resetter();
    bobble.resetter();
  } else {
    stairs = true;
  }
  if (block.counter % 5 === 0) {
    city.display();
    city.door((width / 3), (height - 50));
    city.door((2 * (width / 3)), (height - 50));
    city.telephone();
  } else if (block.counter % 5 === 1) {
    park.display();
    if (bees.length > 10) {
      bees.splice(0, 1);
    }
    for (var i = 0; i < tree.length; i++) {
      tree[i].show();
      //tree[i].jitter();
    }
    for (var n = 0; n < bees.length; n++) {
      var b = bees[n];
      b.behaviors();
      b.update();
      b.show();
    }

    //park.tree();
  } else if (block.counter % 5 === 4) {
    rlgl.display(counting);
    if (rlgl.redLight === true) {
      block.Stop();
      bobble.Stop();
      image(stopWalking, 50, height / 3);
    } else if (rlgl.yellowLight === true) {
      block.halfSpeed();
      bobble.halfSpeed();
      if (block.counter % 0.5 === 0) {
        image(stopWalking, 50, height / 3);
      }
    } else {
      image(walkSign, 50, height / 3);
      block.fullSpeed();
      bobble.fullSpeed();
    }
  } else if (block.counter % 5 === 3) {
    house.display();
    house.stairs();
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
  } else if (block.counter % 5 === 2) {
    indoors.display();
  }
  strokeWeight(1);
  block.display();
  bobble.display();
  block.update();
  bobble.update();
  //ellipse(width-bobble.head.x, bobble.head.y,50,50);
  //if (abs(bobble.movement.x) < 3) {
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


  stroke(0);
  strokeWeight(28);
  line(width / 2, 0, width / 2, height);
  fromCenter = block.center;

}

function timer() {
  counting++;
}

function keyPressed() {

  if (keyCode === LEFT_ARROW) {
    block.Right();
    bobble.Left();
    last = left;
    left = true;
    if (last != left) {
      changeDirect = true;
    } else {
      changeDirect = false;
    }
    if (fromCenter === true) {
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
    bobble.Right();
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
  if (key === ' ') {
    bees.push(new Vehicle(width / 5, height / 5));
    //if (block.head.x << ((width / 3) + 30) && block.head.x >> (2 * (width / 3)) - 30) {
    block.up();
    bobble.up();

    //}
  }
  if (keyCode === DOWN_ARROW) {
    block.Stop();
    bobble.Stop();
  }
  //bees.push(new Bees(random(49), random(10)));
}