function Bonus(x,y,collisionGroups,collisionFilters){
	GameEntity.call(this,x,y,collisionGroups,collisionFilters);
}

Bonus.prototype = {
	this.xSpeed = 1;
	this.ySpedd = 0;
	this.hitBox = new Rectangle(x-1,y-1,x+1,y+1);
	update : function() {
		level = 0;
		score = game.score;
		while (score > 100) {
			score -= 100;
			level++;
		}
		this.hitBox.moveTo(this.x-level*this.xSpeed,this.y-level*this.ySpeed);
		this.x-=level*this.xSpeed;
		this.y-=level*this.ySpeed;
		if(this.hitTest(levelScreen.player)) {
			levelScreen.player.isSecondWeaponAvailable = true;
		}
	},
	render : function( graphics ) {
		graphics.drawImage(assetManager.getImage("bullet2"),this.x,this.y);
	},
	hitTest : function( entity ) {
		if(this.canCollideWith(entity) && entity.hitBox.intersect(this.hitBox)) {
			return true;
		}
		return false;
	}
};
Bonus.prototype = jQuery.extend
(	{},
	GameEntity.prototype,
	Bonus.prototype
);