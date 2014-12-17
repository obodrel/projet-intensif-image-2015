function BulletFactory(){
}

BulletFactory.prototype = {
	createBullet(weaponId) {
		if (weaponId == 1) {
			return (new Bullet(game.currentScreen.player.x+1,player.y,0,["AllyBullet"],["Enemy"]));
		}
		if (weaponId == 2) {
			bullet[] = new Bullet[2];
			bullet[0] = new Bullet(game.currentScreen.player.x+1,player.y+1,-45,["AllyBullet"],["Enemy"]);
			bullet[0] = new Bullet(game.currentScreen.player.x+1,player.y-1,45,["AllyBullet"],["Enemy"]);
			return bullet;
		}	
		return (new Bullet(weaponId/10,weaponId%10,180,["EnemyBullet"],["Player"]));
	}
}