function Bonus(x,y){
	GameEntity.call(this,x,y);
}

Bonus.prototype = {
	this.xSpeed = 1;
	this.ySpedd = 0;
	canCollideWith : function( entity ) {
		switch (Object.getPrototypeOf(entity)) {
			case Player.prototype :
				return true;
			default :
				return false;
		}
	},
	update : function() {
		level = 0;
		score = game.score;
		while (score > 100) {
			score -= 100;
			level++;
		}
		this.hitBox.moveTo(this.x-level*this.xSpeed,this.y-level*this.ySpeed);
		if(this.hitTest(player)) {
			player.weaponId = input.WEAPON_01;
		}
	},
	render : function( graphics ) {
		graphics.drawImage("./assests/image/Enemy02.png",this.x,this.y);
	},
	hitTest : function( entity ) {
		if(this.canCollideWith(entity) && entity.hitBox.intersect(this.hitBox)) {
			return true;
		}
		return false;
	}
};
Bonus.prototype = jQuery.extend(
	{},
	GameEntity.prototype,
	Bonus.prototype
);