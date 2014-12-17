var LoadScreen = Class.create(GameScreen, {

	initialize: function() {
		assetsManager.load();
	},
	
	update: function() {
		if (assetsManager.isFinishedLoading())
		{
			game.setScreen(new LevelScreen());
		}
	},

	render: function(graphics) {
		graphics.fillStyle = "#00ff00";
		graphics.fillRect(0,0, game.width,game.height);
		graphics.fillStyle = "#ff0000";
		graphics.font = "18px Helvetica";
		graphics.fillText("Loading", 0,30);
	}
});

