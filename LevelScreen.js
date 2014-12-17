var LevelScreen = Class.create({
	bullets: [],
	player : null,
	enemies: [],
	bonuses: [],
	infiniteBackground: null,
	initialize: function() {
		player = new Player(game.width/20,game.height/2,["Player"],["EnemyBullet","Bonus","Enemy"]);
		infiniteBackground = new InfiniteBackground(0,0,[],[]);
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