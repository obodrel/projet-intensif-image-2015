var Audio = Class.create({

function playBGM(id){

if(game.score<=100){
 var audio=assetsManager.getAudio("lvl1")
 audio.play();
}

else {
 var audio=assetManager.getAudio("lvl2");
 audio.play();
}
}

function playFX(id){

}


});

var  audio = new Audio();
