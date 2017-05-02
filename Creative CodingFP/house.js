 function House() {
   this.display = function() {
     noStroke();
     fill(255);
     rect(width / 2, height / 2, width, height);
     strokeWeight(1);
     fill(161, 196, 255);
     rect(width / 2, height / 2, width, height);
   }
   this.stairs = function() {
     this.x = 20;
     this.y = height - 75;
     this.h = 150;
     for (var i = 0; i < 6; i++) {
       fill(94, 58, 26);
       rect(this.x, this.y, 60, this.h);
       rect(width - this.x, this.y, 60, this.h);
       this.x += 60;
       this.y += 10;
       this.h -= 20;
     }
   }
 }