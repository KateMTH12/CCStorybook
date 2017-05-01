function City(){
	this.display = function(){
		rectMode(CENTER);
		noStroke();
		fill(255);
		rect(width/2,height/2,width,height);
		strokeWeight(1);
		fill(120,20,240);
		rect((width/4),height-300,2*(width/5),600);
		fill(120,150,30);
		rect(width-(width/4),height-300,2*(width/5),600);
	}
	this.door= function(x,y) {
    fill(0, 255, 0);
    rect(x, y, 60, 100);
  }
}