function Park(){
	this.display = function(){
		noStroke();
		fill(34,97,37);
		rect(width/2,height-(height/12),width,height/6);
		strokeWeight(1);
		stroke(0);
	}
}