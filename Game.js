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
	this.currentScreen = new LoadScreen();
	this.currentScreen.initialize();
};

var game = new Game();
game.start();
while (true){
	game.update();
	game.render(document.getElementById("canvas").getContext("2d"));
}