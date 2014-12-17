var GameOverScreen=Class.create(GameScreen,{



update:function(){

},

render:function(graphics){
graphics.fillStyle = "#ff0000"; //Toutes les prochaines formes pleines seront rouges.
graphics.fillRect(0,0, window.screen.availWidth,window.screen.availHeight);

graphics.font = "18px Helvetica";
graphics.fillText("Game Over", 0,30);
},

dispose:function(){

}

});

var gameoverscreen=new GameOverScreen();
canvas = document.getElementById("canvas");
ctx = canvas.getContext('2d');
gameoverscreen.render(ctx);
