function Player(x,y,collisionGroups,collisionFilters){
	GameEntity.call(this,x,y,collisionGroups,collisionFilters);
	IShooter.call(this);
}

Player.prototype = {
	this.xSpeed = 5;
	this.ySpedd = 5;
	this.weaponId = input.WEAPON_1;
	this.isSecondWeaponAvailable = false;
	this.hitBox = new Rectangle(x-2,y-2,x+2,y+2);
	shoot : function() {
		if( input.isKeyDown(input.SHOOT)) {
			if (this.weaponId == 1 ) {
				game.currentScreen.addEntity(bulletFactory.createBullet(this.weaponId));
			} else {
				for(e in bulletFactory.createBullet(this.weaponId)) {
					game.currentScreen.addEntity(e);
				}
			}
		}
	},
	update : function() {
		if( input.isKeyDown(input.UP)) { 
			this.hitBox.moveTo(this.x,this.y-level*this.ySpeed);
			this.y-=level*this.ySpeed:
		}
		if( input.isKeyDown(input.LEFT)) { 
			this.hitBox.moveTo(this.x-level*this.xSpeed,this.y);
			this.x-=level*this.xSpeed;
		}
		if( input.isKeyDown(inputDOWN)) { 
			this.hitBox.moveTo(this.x,this.y+level*this.ySpeed);
			this.x-=level*this.xSpeed;
		}
		if( input.isKeyDown(input.RIGHT)) { 
			this.hitBox.moveTo(this.x+level*this.xSpeed,this.y);
			this.x+=level*this.xSpeed;
		}
		if( input.isKeyDown(input.WEAPON_1)) { 
			weaponId = 1;
		}		
		if( this.isSecondWeaponAvailable && input.isKeyDown(input.WEAPON_2)) { 
			weaponId = 2;
		}		
	},
	render : function( graphics ) {
		graphics.drawImage("player1",this.x,this.y);
	},
	hitTest : function( entity ) {
		if(this.canCollideWith(entity) && entity.hitBox.intersect(this.hitBox)) {
			return true;
		}
		return false;
	}
};
Player.prototype = jQuery.extend(
	{},
	GameEntity.prototype,
	IShooter.prototype,
	Player.prototype
);