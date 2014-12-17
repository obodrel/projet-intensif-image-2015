var LevelScreen = Class.create({
	bullets: [],
	player : null,
	enemies: [],
	bonuses: [],
	infiniteBackground: null,
	initialize: function() {
		this.player = new Player(game.width/20,game.height/2,["Player"],["EnemyBullet","Bonus","Enemy"]);
		//console.log(this.player);
		this.infiniteBackground = new InfiniteBackground(0,0,[],[]);
		for ( i = 0; i<Math.floor((Math.random() * 20) + 10);i++) {
		this.addEntity(new Enemy(game.width - game.width/20,Math.floor((Math.random() *game.height) + 1),["Enemy"],["AllyBullet","Player"]));
		}
		audio.playBGM();
	},
	update: function() {
		for(i = 0;i<this.bullets.size;i++) {
			bullets[i].update();
		}
		for(i = 0;i<this.bonuses.size;i++) {
			bonuses[i].update();
		}
		for(i = 0;i<this.enemies.size;i++) {
			enemies[i].update();
		}
		this.player.update();
		this.infiniteBackground.update();
		if( false && Math.floor((Math.random() * 20) + 1) == 12 ) {
			this.addEntity(new Bonus(game.width/2,game.height/2,["Bonus"],["Player"]));
		}
	},

	render: function(canvas) {
		this.infiniteBackground.render(canvas);
		for(i = 0;i<this.bullets.size;i++) {
			bullets[i].render(canvas);
		}
		for(i = 0;i<this.bonuses.size;i++) {
			bonuses[i].render(canvas);
		}
		for(i = 0;i<this.enemies.size;i++) {
			enemies[i].render(canvas);
		}

		this.player.render(canvas);
	},

	dispose: function() {
	},

	addEntity  : function(entity) {
		switch(Object.getPrototypeOf(entity)) {
			case Player.prototype:
				this.player = entity;
				break;
			case InfiniteBackground.prototype:
				this.infiniteBackground = entity;
				break;
			case Bullet.prototype:
				this.bullets.push(entity);
				break;
			case Enemy.prototype:
				this.enemies.push(entity);
				break;
			case Bonus.prototype:
				this.bonuses.push(entity);
				break;
			default:
				break;
		}
	}

});