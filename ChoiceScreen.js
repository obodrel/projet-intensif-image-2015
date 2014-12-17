var perso = 0;
var ChoiceScreen = Class.create(GameScreen, {

	left: true,

	initialize: function() {
		console.log("init choice");
	},
	
	update: function() {

		if(Input.isKeyDown(Input.LEFT) || Input.isKeyDown(Input.RIGHT)) {
			this.left  = !this.left;
		}
		if(Input.isKeyDown(Input.SHOOT)) {
			if (this.left)
				perso = 1;
			else
				perso = 2;
			game.setScreen(new LevelScreen());
		}
	},

	render: function(ctx) {

		ctx.clearRect ( 0 , 0 , game.width, game.height );


		ctx.drawImage(assetsManager.getImage("choice"), 0, 0,1920,1080,0,0,game.width,game.height);
		ctx.drawImage(assetsManager.getImage("player1"), 3*game.width/10, 3*game.height/4, 48*3, 32*3);
		ctx.drawImage(assetsManager.getImage("player2"), 7*game.width/10 , 3*game.height/4, 48*3, 32*3);
		ctx.beginPath();
		ctx.globalAlpha=1;
		ctx.strokeStyle="blue";   
		ctx.lineWidth="2";   
		//console.log(this.left);
		if(this.left){
  			ctx.rect(3*game.width/10, 3*game.height/4, 48*3, 32*3);
		}
		else{ 
  			ctx.rect(7*game.width/10, 3*game.height/4, 48*3, 32*3);
		}
		ctx.stroke();
	}
});


