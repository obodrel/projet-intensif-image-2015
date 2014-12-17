var Bullet = Class.create(GameEntity,{
	xSpeed : 3,
	ySpeed : 3,
	initialize : function(x,y,collisionGroups,collisionFilters,angle){
		GameEntity.call(this,x,y,collisionGroups,collisionFilters);
		this.angle = angle;
		hitBox = new Rectangle(x-1,y-1,x+1,y+1);
	},
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
		if(this.hitTest(game.currentScreen.player) && this.angle == 0) {
			game.numLifes--;
			delete this;
		}
		for(i = 0; i<game.currentScreen.enemies.length;++i) {
			if(game.currentScreen.enemies[i] != null && this.hitTest(enemies[i])) {
				delete game.currentScreen.enemies[i];
				delete this;				
			}	
		}
	},
	render : function( graphics ) {
		graphics.drawImage(assetManager.getImage("bullet1"),this.x,this.y);
	}
});