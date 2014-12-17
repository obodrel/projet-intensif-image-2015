function BulletFactory(){
}

BulletFactory.prototype = {
	createBullet(weaponId) {
		if (weaponId == 1) {
			return (new Bullet(levelScreen.player.x+1,player.y,0));
		}
		if (weaponId == 2) {
			bullet[] = new Bullet[2];
			bullet[0] = new Bullet(levelScreen.player.x+1,player.y+1,-45);
			bullet[0] = new Bullet(levelScreen.player.x+1,player.y-1,45);
			return bullet;
		}
		if(weaponId == -1) {
			return null;
		}
	}
}