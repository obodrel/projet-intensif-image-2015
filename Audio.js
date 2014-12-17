var Audio = Class.create({
	playBGM:function(){
		if(game.score<=100){
 			document.getElementById("audio").src = assetsManager.getAudio("lvl1");;
		} else {
			document.getElementById("audio").src = assetsManager.getAudio("lvl2");;
		}
		document.getElementById("audio").play();
	},
	playFX:function(id){
		audio.play(assetsManager.getAudio(id));
	}
});

var  audio = new Audio();
