function Enemy(x,y){
	GameEntity.call(this,x,y);
	IShooter.call(this);
}

Enemy.prototype = {
	this.xSpeed = 5;
	this.ySpedd = 0;
	shoot : function() {
		bulletFactory.createBullet(-1);
	}
	canCollideWith : function( entity ) {
		switch (Object.getPrototypeOf(entity)) {
			case Player.prototype :
				return true;
			case Bullet.prototype :
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
		this.hitBox.moveTo(this.x-level*this.xSpeed,this.y-level*this.ySpeed);
		if(this.hitTest(player)) {
			game.numLifes--;
			delete this;
		}
	}
	render : function( graphics ) {
		graphics.drawImage("./assests/image/Enemy01.png",this.x,this.y);
	}
	hitTest : function( entity ) {
		if(this.canCollideWith(entity) && entity.hitBox.intersect(this.hitBox)) {
			return true;
		}
		return false;
	}
};
Enemy.prototype = $.extend(
	{},
	GameEntity.prototype,
	IShooter.prototype,
	Enemy.prototype
);