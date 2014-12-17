var Bonus = Class.create(GameEntity,{
	xSpeed : 1,
	ySpedd : 0,
	initialize : function(x,y,collisionGroups,collisionFilters) {
		this.x=x;
		this.y=y;
		this.collisionGroups= collisionGroups;
		this.collisionFilters= collisionFilters;
		hitbox = new Rectangle(x-1,y-1,x+1,y+1);
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