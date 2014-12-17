var TitleScreen = Class.create(GameScreen, {
	
	update: function() {
		if (Input.isKeyDown(Input.SHOOT))
			game.setScreen(new ChoiceScreen());
	},

	render: function(ctx) {
		ctx.drawImage(assetsManager.getImage("title"), 0, 0,1920,1080,0,0,game.width,game.height);
	}
	
});

