var ChoiceScreen = Class.create(GameScreen, {

	left: true,
	right: false,
	
	update: function() {

		if(Input.isKeyDown(Input.LEFT) || Input.isKeyDown(Input.RIGHT)) {
			this.left = !this.left;
			this.right = !this.right;
		}
		if(Input.iskeyDown(Input.SHOOT) {
			game.setScreen(new LevelScreen());
		}
	},

	render: function(ctx) {
	
		ctx.clearRect ( 0 , 0 , game.width, game.height );
		ctx.drawImage(assetsManager.getImage("choice"), 0, 0,1920,1080,0,0,game.width,game.height);
		ctx.drawImage(assetsManager.getImage("player1"), 3*game.width/10, 3*game.height/4, 48*3, 32*3);
		ctx.drawImage(assetsManager.getImage("player2"), 7*game.width/10 , 3*game.height/4, 48*3, 32*3);
	
		
		if(this.left) {
			ctx.strokeStyle="blue";   
  			ctx.lineWidth="2";   
  			ctx.rect(3*game.width/10, 3*game.height/4, 48*3, 32*3);
  			ctx.stroke();
		} else {
			ctx.strokeStyle="blue";   
  			ctx.lineWidth="2";   
  			ctx.rect(7*game.width/10, 3*game.height/4, 48*3, 32*3);
  			ctx.stroke();			

		} 
		
	}
	
});


