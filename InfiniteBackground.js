
var InfiniteBackground = Class.create(GameEntity, {
	initialize : function(x,y,z,collisionGroup,collisionFilters,virtualDepth,offsetX,offsetY){
		//$super(x,y,z,collisionGroup,collisionFilters);
		//GameEntity.call(this,x,y,z,collisionGroup,collisionFilters);

		this.virtualDepth= virtualDepth;
		this.offsetX= game.width/3;
		this.offsetY = game.height/3;
	},
	
	update: function(ctx){
		if(this.offsetX>0){
			this.offsetX-=1;
			ctx.clearRect(0,0,game.width, game.height);
			ctx.drawImage(this.image, -game.width/3+this.offsetX, 0,game.width/3,game.height);
			ctx.drawImage(this.image, this.offsetX, 0,game.width/3,game.height);
			ctx.drawImage(this.image, game.width/3+this.offsetX, 0,game.width/3,game.height);
			ctx.drawImage(this.image, game.width-game.width/3+this.offsetX, 0,game.width/3,game.height);
		}else
			this.offsetX=game.width/3;
	},
	
	render : function( ctx ){
		var img = new Image();
		img.src = "./assets/images/Background01.png";
	
		this.image = img;
		ctx.drawImage(this.image, -game.width/3+this.offsetX, 0,game.width/3,game.height);
		ctx.drawImage(this.image, this.offsetX, 0,game.width/3,game.height);
		ctx.drawImage(this.image, game.width/3+this.offsetX, 0,game.width/3,game.height);
		ctx.drawImage(this.image, game.width-game.width/3+this.offsetX, 0,game.width/3,game.height);
	}
});

	
