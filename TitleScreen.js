var TitleScreen = Class.create(GameScreen, {
	
	init: function() {
		
		
	},

	update: function() {
		if(Input.isKeyDown(Input.SHOOT)) {
			levelscreen.render();
			Game.setScreen(levelscreen);
		}
	},

	dispose: function() {
	
	},

	render: function(ctx) {

		canvas = context.canvas;
		height = canvas.height;
		width = canvas.width;				
		ctx.strokeStyle="#FF0000";
		ctx.strokeRect(0,0,width,height); 
		ctx.font = Math.floor(width/10)+"Calibri,Geneva,Arial";
    		ctx.strokeStyle = "rgb(0,0,0)";
		var txt = "Press space bar to play";
    		ctx.fillText(txt, width/3, height/2);

		
	}

});

var titlescreen = new TitleScreen();
var canvas = document.getElementById('canvas');
context = canvas.getContext('2d');
titlescreen.render(context);
