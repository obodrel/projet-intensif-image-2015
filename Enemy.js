var Enemy = Class.create(GameEntity,IShooter,{
	xSpeed : 5,
	ySpedd : 0,
	initialize : function(x,y,collisionGroups,collisionFilters){
		GameEntity.call(this,x,y,collisionGroups,collisionFilters);
		IShooter.call(this);
		hitBox = new Rectangle(x-2,y-2,x+2,y+2);
	},
	shoot : function() {
		game.currentScreen.addEntity(bulletFactory.createBullet(10*this.x+this.y));
	},
	update : function() {
		level = 0;
		score = game.score;
		while (score > 100) {
			score -= 100;
			level++;
		}
		this.hitBox.moveTo(this.x-level*this.xSpeed,this.y-level*this.ySpeed);
		if(this.hitTest(game.currentScreen.player)) {
			game.numLifes--;
			game.currentScreen.player.isSecondWeaponAvailable = false;
			delete this;
		}
	},
	render : function( graphics ) {
		graphics.drawImage(assetManager.getImage("enemy1"),this.x,this.y);
	}
});