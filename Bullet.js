function Bullet(x,y,angle){
	GameEntity.call(this,x,y);
	this.angle = angle;
}

Bullet.prototype = {
	this.xSpeed = 3;
	this.ySpedd = 3;
	canCollideWith : function( entity ) {
		switch (Object.getPrototypeOf(entity)) {
			case Player.prototype :
				return true;
			case Enemy.prototype :
				return true;
			default :
				return false;
		}
	}
	update : function() {
		level = 0;
		score = game.score;
		while (score > 100) {
			score -= 100;
			level++;
		}
		if (this.angle == 45) {	
			this.hitBox.moveTo(this.x-level*this.xSpeed,this.y-level*this.ySpeed);
		}
		if (this.angle == 0) {	
			this.hitBox.moveTo(this.x-level*this.xSpeed,this.y);
		}
		if (this.angle == -45) {	
			this.hitBox.moveTo(this.x-level*this.xSpeed,this.y+level*this.ySpeed);
		}
		if(this.hitTest(player) && this.angle == 0) {
			game.numLifes--;
			delete this;
		}
		for(i = 0; i<enemies.length;++i) {
			if(enemies[i] != null && this.hitTest(enemies[i])) {
				delete enemies[i];
				delete this;				
			}	
		}
	}
	render : function( graphics ) {
		graphics.drawImage("./assests/image/Bullet01.png",this.x,this.y);
	}
	hitTest : function( entity ) {
		if(this.canCollideWith(entity) && entity.hitBox.intersect(this.hitBox)) {
			return true;
		}
		return false;
	}
};
Bullet.prototype = $.extend(
	{},
	GameEntity.prototype,
	Bullet.prototype
);