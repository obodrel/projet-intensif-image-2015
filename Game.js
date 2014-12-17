var Game = Class.create({
	score         : 0,
	numLifes      : 3,
	width         : window.screen.availWidth,
	height        : window.screen.availHeight,
	currentScreen : new LoadScreen(),

	setScreen: function(gameScreen) {
		this.currentScreen   = gameScreen;
	},

	update: function() {
		this.currentScreen.update();
	},

	render: function(canvasContext) {
		this.currentScreen.render(canvasContext)
	},
	
	loop: function() {
		this.update();
		this.render(document.getElementById("canvas").getContext("2d"));
		setTimeout(this.loop(), 10);
	},

	start: function() {
		document.getElementById("canvas").width  = this.width;
		document.getElementById("canvas").height = this.height;
		this.currentScreen.initialize();
		this.update();
		this.loop();
	}
});