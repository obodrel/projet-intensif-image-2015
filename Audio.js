self = this;
var Audio = Class.create({
	playBGM:function(){

		if(game.score<=100){
 			self.audio=assetManager.getAudio("lvl1")
 			audio.play();
		} else {
 			self.audio=assetManager.getAudio("lvl2");
 			audio.play();
		}
	},
	playFX:function(id){
		audio.play(assetManager.getAudio(id));
	}
});

var  audio = new Audio();
