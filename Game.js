function Game () {
    this.score    = 0;
    this.numLifes = 3;
    this.width    = window.screen.availWidth;
    this.height   = window.screen.availHeight;
}

Game.prototype.setScreen = function(gameScreen) {
    this.currentScreen   = gameScreen;
};

Game.prototype.update = function() {
    this.currentScreen.update();
};

Game.prototype.render = function(canvasContext) {
    this.currentScreen.render(canvasContext)
};

Game.prototype.start = function() {
	document.getElementById("canvas").width  = this.width;
	document.getElementById("canvas").height = this.height;
	this.currentScreen = new LoadScreen();
	this.currentScreen.initialize();
	while (true){
		game.update();
		game.render(document.getElementById("canvas").getContext("2d"));
	}
};

var game = new Game();