var LoadScreen = Class.create(GameScreen, {

	initialize: function() {
		assetsManager.load();
	},
	
	update: function() {
		if (assetsManager.isFinishedLoading())
		{
			game.setScreen(new TitleScreen());

		}
	},

	render: function(graphics) {
	
		var image = new Image();
		image.src = "./assets/images/Load.png";
		image.onload = function(){
			graphics.drawImage(image, 0, 0,1920,1080,0,0,game.width,game.height);
		};
	}
});

