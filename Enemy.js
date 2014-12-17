function Enemy(x,y,collisionGroups,collisionFilters){
	GameEntity.call(this,x,y,collisionGroups,collisionFilters);
	IShooter.call(this);
}

Enemy.prototype = {
	this.xSpeed = 5;
	this.ySpedd = 0;
	this.hitBox = new Rectangle(x-2,y-2,x+2,y+2);
	shoot : function() {
		levelScreen.addEntity(bulletFactory.createBullet(10*this.x+this.y));
	},
	update : function() {
		level = 0;
		score = game.score;
		while (score > 100) {
			score -= 100;
			level++;
		}
		this.hitBox.moveTo(this.x-level*this.xSpeed,this.y-level*this.ySpeed);
		if(this.hitTest(levelScreen.player)) {
			game.numLifes--;
			levelScreen.player.isSecondWeaponAvailable = false;
			delete this;
		}
	},
	render : function( graphics ) {
		graphics.drawImage(assetManager.getImage("enemy1"),this.x,this.y);
	},
	hitTest : function( entity ) {
		if(this.canCollideWith(entity) && entity.hitBox.intersect(this.hitBox)) {
			return true;
		}
		return false;
	}
};
Enemy.prototype = jQuery.extend(
	{},
	GameEntity.prototype,
	IShooter.prototype,
	Enemy.prototype
);