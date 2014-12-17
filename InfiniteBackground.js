var InfiniteBackground = Class.create(GameEntity, {
	initialize: function($super, params){
		$super({
			x : params.x,
			y : params.y,
			z : params.z,
			collisionGroup : params.collisionGroup,
			collisionFilters : params.collisionFilters
		});
		
		this.image= params.image || new Image();
		this.virtualDepth= params.Depth || 0;
		this.offsetX= params.offsetX || 0;
		this.offsetY = params.offsetY || 0;		
	}
});
	
InfiniteBackground.prototype.update = function(){
	
};
	
InfiniteBackground.prototype.render = function(htmlCanvas){
	
};
