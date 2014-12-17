function Bullet(x,y,collisionGroups,collisionFilters,angle){
	GameEntity.call(this,x,y,collisionGroups,collisionFilters);
	this.angle = angle;
}

Bullet.prototype = {
	this.xSpeed = 3;
	this.ySpedd = 3;
	this.hitBox = new Rectangle(x-1,y-1,x+1,y+1);
	update : function() {
		if (this.angle == 45) {	
			this.hitBox.moveTo(this.x-level*this.xSpeed,this.y-level*this.ySpeed);
			this.x-=level*this.xSpeed;
			this.y-=level*this.ySpeed;
		}
		if (this.angle == 0) {	
			this.hitBox.moveTo(this.x-level*this.xSpeed,this.y);
			this.x+=level*this.xSpeed;
		}
		if (this.angle == 180) {	
			this.hitBox.moveTo(this.x-level*this.xSpeed,this.y);
			this.x-=level*this.xSpeed;
		}
		if (this.angle == -45) {	
			this.hitBox.moveTo(this.x-level*this.xSpeed,this.y+level*this.ySpeed);
			this.x+=level*this.xSpeed;
			this.y+=level*this.ySpeed;
		}
		if(this.hitTest(levelScreen.player) && this.angle == 0) {
			game.numLifes--;
			delete this;
		}
		for(i = 0; i<levelScreen.enemies.length;++i) {
			if(levelScreen.enemies[i] != null && this.hitTest(enemies[i])) {
				delete levelScreen.enemies[i];
				delete this;				
			}	
		}
	},
	render : function( graphics ) {
		graphics.drawImage(assetManager.getImage("bullet1"),this.x,this.y);
	},
	hitTest : function( entity ) {
		if(this.canCollideWith(entity) && entity.hitBox.intersect(this.hitBox)) {
			return true;
		}
		return false;
	}
};
Bullet.prototype = jQuery.extend(
	{},
	GameEntity.prototype,
	Bullet.prototype
);