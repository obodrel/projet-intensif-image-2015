function Player(x,y){
	GameEntity.call(this,x,y);
	IShooter.call(this);
}

Player.prototype = {
	this.xSpeed = 5;
	this.ySpedd = 5;
	this.weaponId = input.WEAPON_1;
	shoot : function() {
		if( input.isKeyDown(input.SHOOT)) {
			bulletFactory.createBullet(this.weaponId);
		}
	},
	canCollideWith : function( entity ) {
		switch (Object.getPrototypeOf(entity)) {
			case Enemy.prototype :
				return true;
			case Bullet.prototype :
				return true;
			case Bonus.prototype :
				return true;
			default :
				return false;
		}
	},
	update : function() {
		if( input.isKeyDown(input.UP)) { 
			this.hitBox.moveTo(this.x,this.y-level*this.ySpeed);
		}
		if( input.isKeyDown(input.LEFT)) { 
			this.hitBox.moveTo(this.x-level*this.xSpeed,this.y);
		}
		if( input.isKeyDown(inputDOWN)) { 
			this.hitBox.moveTo(this.x,this.y+level*this.ySpeed);
		}
		if( input.isKeyDown(input.RIGHT)) { 
			this.hitBox.moveTo(this.x+level*this.xSpeed,this.y);
		}
	},
	render : function( graphics ) {
		graphics.drawImage("./assests/image/Spaceship01.png",this.x,this.y);
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