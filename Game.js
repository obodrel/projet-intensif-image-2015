var Game = Class.create({
	score         : 0,
	numLifes      : 3,
	width         : window.innerWidth  - 5/100*window.innerWidth,
	height        : window.innerHeight - 5/100*window.innerHeight,
	currentScreen : new LoadScreen(),

	setScreen: function(gameScreen) {
		this.currentScreen = gameScreen;
	},

	update: function() {
		this.currentScreen.update();
	},

	render: function(canvasContext) {
		this.currentScreen.render(canvasContext)
	},
	
	loop: function(ctx){
		this.update();
		this.render(ctx);	
	},

	start: function() {
		if (this.width > 1920)
			this.width = 1920;
		if (this.height > 1080)
			this.height = 1080;
		if (this.width > 16/9 * this.height)
			this.width = 16/9 * this.height;
		if (this.height > 9/16 * this.width)
			this.height = 9/16 * this.width;
		document.getElementById("canvas").width  = this.width;
		document.getElementById("canvas").height = this.height;
		var ctx = document.getElementById("canvas").getContext("2d");
		setTimeout(this.currentScreen.initialize(), 0);
		setInterval(this.loop(ctx), 1);
		
		/*var background = new InfiniteBackground(0,0,0,[],[],1,0,0);
		background.render(ctx);*/
	}
});
var game = new Game();
