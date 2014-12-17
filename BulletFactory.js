function BulletFactory(){
}

BulletFactory.prototype = {
	createBullet : function(weaponId) {
		if (weaponId == 1) {
			return (new Bullet(game.currentScreen.player.x+1,player.y,0,["AllyBullet"],["Enemy"]));
		}
		if (weaponId == 2) {
			bullet = [];
			bullet[0] = new Bullet(game.currentScreen.player.x+1,player.y+1,-45,["AllyBullet"],["Enemy"]);
			bullet[1] = new Bullet(game.currentScreen.player.x+1,player.y-1,45,["AllyBullet"],["Enemy"]);
			return bullet;
		}	
		return (new Bullet(weaponId/10,weaponId%10,180,["EnemyBullet"],["Player"]));
	}
}