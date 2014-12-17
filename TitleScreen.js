var TitleScreen = Class.create(GameScreen, {
	
	update: function() {
		if(Input.isKeyDown(Input.SHOOT)) {
			levelscreen.render();
			Game.setScreen(levelscreen);
		}
	},

	render: function(ctx) {

		var img = assetsManager.getImage("supernova")

		var mon_image = new Image();
		mon_image.src = "./assets/images/supernova.jpg";
		mon_image.onload=function(){
			ctx.drawImage(mon_image, 0, 0,1920,1080,0,0,game.width,game.height);
		}

	},
	
});

