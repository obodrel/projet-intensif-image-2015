var LevelScreen = Class.create({
	this.bullets = [];
	this.player = new Player(game.width/20,game.height/2,["Player"],["EnemyBullet","Bonus","Enemy"]);
	this.enemies = [];
	this.bonuses = [];
	this.infiniteBackground = new InfiniteBackground(0,0,[],[]);

	initialize: function() {
	},

	update: function() {
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
	}

	addEntity  : function(entity) {
		switch(entity.getPrototypeOf()) {
			Player.prototype:
				this.player = entity;
				break;
			InfiniteBackground.prototype:
				this.infiniteBackground = entity;
				break;
			Bullet.prototype:
				this.bullets.push(entity);
				break;
			Enemy.prototype:
				this.enemies.push(entity);
				break;
			Bonus.prototype:
				this.bonuses.push(entity);
				break;
			default:
				break;
		}
	}

});