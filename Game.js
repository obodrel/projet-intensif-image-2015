var Game = Class.create({
	score         : 0,
	numLifes      : 3,
	width         : window.innerWidth  - 5/100*window.innerWidth,
	height        : window.innerHeight - 5/100*window.innerHeight,

	currentScreen : 0,

	setScreen: function(gameScreen) {
		this.currentScreen.dispose();
		this.currentScreen = gameScreen;
	},

	update: function(){
		this.currentScreen.update();
	},

	render: function(canvasContext) {

		this.currentScreen.render(canvasContext);

	},

	start: function() {

		window.addEventListener('keydown', function(event) { Input.onKeyDown(event); }, false);		
		window.addEventListener('keyup', function(event) { Input.onKeyUp(event); }, false);		

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


		this.currentScreen = new LoadScreen();
		var self = this;
		setInterval(function(){
			//console.log("loop");
			self.update();
			self.render(ctx);
		}, 10);

	}
});
var game = new Game();
