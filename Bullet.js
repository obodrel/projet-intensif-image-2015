var Bullet = Class.create(GameEntity,{
	xSpeed : 3,
	ySpeed : 3,
	initialize : function(x,y,collisionGroups,collisionFilters,angle){
		this.x=x;
		this.y=y;
		this.collisionGroups= collisionGroups;
		this.collisionFilters= collisionFilters;
		this.angle = angle;
		hitBox = new Rectangle(x-1,y-1,x+1,y+1);
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
		if(this.x<0 || this.x>game.width || this.y<0 || this.y>game.height){
			delete this;
		}
		if(this.hitTest(game.currentScreen.player) && this.angle == 0) {
			game.numLifes--;
			delete this;
		}
		for(i = 0; i<game.currentScreen.enemies.length;i++) {
			if(game.currentScreen.enemies[i] != null && this.hitTest(enemies[i])) {
				delete game.currentScreen.enemies[i];
				delete this;				
			}	
		}
	},
	render : function( graphics ) {
		graphics.drawImage(assetsManager.getImage("bullet1"),this.x,this.y);
	}
});
