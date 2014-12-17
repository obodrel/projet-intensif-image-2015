var ChoiceScreen = Class.create(GameScreen, {
	
	update: function() {
		if(Input.isKeyDown(Input.LEFT)) {
			levelscreen.render();
			Game.setScreen(levelscreen);
		}
	},

	render: function(ctx) {

//		graphics.drawImage(assetsManager.getImage("choice"), 0, 0,1920,1080,0,0,game.width,game.height);

		ctx.drawImage(assetsManager.getImage("player1"), 3*game.width/10, 3*game.height/4, 48*3, 32*3);

		ctx.drawImage(assetsManager.getImage("player2"), 7*game.width/10 , 3*game.height/4, 48*3, 32*3);

	}
	
});


