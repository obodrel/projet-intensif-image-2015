var GameOverScreen=Class.create(GameScreen,{

	render:function(graphics){
		graphics.drawImage(assetsManager.getImage("gameover"), 0, 0,1920,1080,0,0,game.width,game.height);
	},
	
});


