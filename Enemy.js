var Enemy = Class.create(GameEntity,{
	xSpeed : 5,
	ySpedd : 0,
	initialize : function(x,y,collisionGroups,collisionFilters){
		this.x=x;
		this.y=y;
		this.collisionGroups= collisionGroups;
		this.collisionFilters= collisionFilters;
		this.hitBox = new Rectangle(x-2,y-2,x+2,y+2);
		console.log("to");
	},
		hitTest : function( entity ) {
		if(this.canCollideWith(entity) && entity.hitBox.intersect(this.hitBox)) {
			return true;
		}
		return false;
	},
	canCollideWith : function(entity) {
		for(groups in this.collisionGroup) {
			if (groups in entity.collisionFilters) {
				return true;
			}
		}
		return false;
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
		console.log("toto");
		graphics.drawImage(assetsManager.getImage("enemy1"),this.x,this.y);
	}
});
//Enemy.prototype = new GameEntity;