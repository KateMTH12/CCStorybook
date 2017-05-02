function Indoors(){
  /*This draws the inside of the diner*/
	this.display = function(){
		fill(232,335,124);
		noStroke();
		rect(width/2,height/2, width,height);
		strokeWeight(28);
		stroke(139,69,19);
		line(width/2,0,width/2,height);
	}
}