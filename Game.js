var Game = Class.create({
	score         : 0,
	numLifes      : 3,
	width         : window.screen.availWidth,
	height        : window.screen.availHeight,
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
		document.getElementById("canvas").width  = this.width;
		document.getElementById("canvas").height = this.height;
		var ctx = document.getElementById("canvas").getContext("2d");
		setTimeout(this.currentScreen.initialize(), 0);
		setInterval(this.loop(ctx), 1);
	}
});
var game = new Game();