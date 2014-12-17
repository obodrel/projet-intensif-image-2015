function Rectangle(x1,y1,x2,y2){
	this.x1 = x1;
	this.x2 = x2;
	this.y1 = y1;
	this.y2 = y2;
}

Rectangle.prototype = {
	this.x  = (x1 - x2)/2;
	this.y  = (y1 - y2)/2;
	intersect : function(rect) {
		if ( rect.x2 >= this.x1 && rect.y2 >= this.y1
			|| rect.x1 <= this.x2 && rect.y1 <= this.y2 
			|| rect.x1 <= this.x2 && rect.y2 >= this.y1
			|| rect.x2 >= this.x1 && rect.y1 <= this.y2 ) {
			return true;
		}
		return false;
	},
	moveTo : function(x,y) {
		this.x1 += (this.x-x);
		this.x2 += (this.x-x);
		this.y1 += (this.y-y);
		this.y2 += (this.y-y);
	}
}