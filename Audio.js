var Audio = Class.create({

playBGM:function(id){

if(game.score<=100){
 var audio=assetsManager.getAudio("lvl1")
 audio.play();
}

else {
 var audio=assetManager.getAudio("lvl2");
 audio.play();
}
},

playFX:function(id){

}


});

var  audio = new Audio();
