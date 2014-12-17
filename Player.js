var Player = Class.create(GameEntity,IShooter,{
	xSpeed : 5,
	ySpedd : 5,
	weaponId : Input.WEAPON_1,
	isSecondWeaponAvailable : false,
	initialize : function(x,y,collisionGroups,collisionFilters){
		GameEntity.call(this,x,y,collisionGroups,collisionFilters);
		IShooter.call(this);
		hitBox = new Rectangle(x-2,y-2,x+2,y+2);
	},
	shoot : function() {
		if( Input.isKeyDown(Input.SHOOT)) {
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
		if( Input.isKeyDown(Input.UP)) { 
			this.hitBox.moveTo(this.x,this.y-level*this.ySpeed);
			this.y-=level*this.ySpeed;
		}
		if( Input.isKeyDown(Input.LEFT)) { 
			this.hitBox.moveTo(this.x-level*this.xSpeed,this.y);
			this.x-=level*this.xSpeed;
		}
		if( Input.isKeyDown(InputDOWN)) { 
			this.hitBox.moveTo(this.x,this.y+level*this.ySpeed);
			this.x-=level*this.xSpeed;
		}
		if( Input.isKeyDown(Input.RIGHT)) { 
			this.hitBox.moveTo(this.x+level*this.xSpeed,this.y);
			this.x+=level*this.xSpeed;
		}
		if( Input.isKeyDown(Input.WEAPON_1)) { 
			weaponId = 1;
		}		
		if( this.isSecondWeaponAvailable && Input.isKeyDown(Input.WEAPON_2)) { 
			weaponId = 2;
		}		
	},
	render : function( graphics ) {
		graphics.drawImage("player1",this.x,this.y);
	}
});