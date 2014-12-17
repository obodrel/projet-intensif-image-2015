var Bonus = Class.create(GameEntity,{
	xSpeed : 1,
	ySpedd : 0,
	initialize : function(x,y,collisionGroups,collisionFilters) {
		hitbox = new Rectangle(x-1,y-1,x+1,y+1);
	},
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
		if(this.hitTest(game.currentScreen.player)) {
			game.currentScreen.player.isSecondWeaponAvailable = true;
		}
	},
	render : function( graphics ) {
		graphics.drawImage(assetsManager.getImage("bullet2"),this.x,this.y);
	}
});
Bonus.prototype = new GameEntity;