var Player = Class.create(GameEntity,{
	xSpeed : 5,
	ySpeed : 5,
	weaponId : Input.WEAPON_1,
	isSecondWeaponAvailable : false,
	initialize : function(x,y,collisionGroups,collisionFilters){
		//(x,y,collisionGroups,collisionFilters);
		//x=0;
		this.hitBox = new Rectangle(x-2,y-2,x+2,y+2);
		console.log(this);
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
		var level = 3;
		if( Input.isKeyDown(Input.UP)) { 
			this.hitBox.moveTo(this.x,this.y-level*this.ySpeed);
			this.y-=level*this.ySpeed;
		}
		if( Input.isKeyDown(Input.LEFT)) { 
			this.hitBox.moveTo(this.x-level*this.xSpeed,this.y);
			this.x-=level*this.xSpeed;
		}
		if( Input.isKeyDown(Input.DOWN)) { 
			this.hitBox.moveTo(this.x,this.y+level*this.ySpeed);
			this.y+=level*this.xSpeed;
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
		graphics.drawImage(assetsManager.getImage("player"+perso),this.x,this.y);
	}
});
//Player.prototype = new GameEntity;