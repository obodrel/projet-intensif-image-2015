var LevelScreen = Class.create({
	bullets: [],
	player : null,
	enemies: [],
	bonuses: [],
	infiniteBackground: null,
	initialize: function() {
		player = new Player(game.width/20,game.height/2,["Player"],["EnemyBullet","Bonus","Enemy"]);
		infiniteBackground = new InfiniteBackground(0,0,[],[]);
		for ( i = 0; i<Math.floor((Math.random() * 20) + 10);i++) {
			this.addEntity(new Enemy(game.width - game.width/20,Math.floor((Math.random() *game.height) + 1),["Enemy"],["AllyBullet","Player"]));
		} 

	},
	update: function() {
		for(bullet in this.bullets) {
			bullet.update(canvas);
		}
		for(bonus in this.bonuses) {
			bonus.update(canvas);
		}
		for(enemy in this.enemies) {
			enemies.update(canvas);
		}
		this.player.update(canvas);
		this.infiniteBackground.update(canvas);
		if( Math.floor((Math.random() * 20) + 1) == 12 ) {
			this.addEntity(new Bonus(game.width/2,game.height/2,["Bonus"],["Player"]));
		} 
	},

	render: function(canvas) {
		for(bullet in this.bullets) {
			bullet.render(canvas);
		}
		for(bonus in this.bonuses) {
			bonus.render(canvas);
		}
		for(enemy in this.enemies) {
			enemies.render(canvas);
		}
		this.player.render(canvas);
		this.infiniteBackground.render(canvas);
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