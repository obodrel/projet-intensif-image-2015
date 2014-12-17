var GameOverScreen=Class.create(GameScreen,{


initialize:function(){
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext('2d');
  
},


update:function(){

},

render:function(graphics){
graphics.fillRect(0,0, window.screen.availWidth,window.screen.availHeight);
graphics.font = "18px Helvetica";
graphics.fillText("Game Over", 0,30);
},

dispose:function(){

}

});

var gameoverscreen=new GameOverScreen();
gameoverscreen.render(ctx);
