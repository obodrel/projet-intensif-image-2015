var InfiniteBackground = Class.create(GameEntity, {
	initialize: function($super, params){
		superParams={
			params.x,
			params.y,
			params.z,
			params.collisionGroup,
			params.collisionFilters};
		$super(superParams);
		this.image= params.image || new Image();
		this.virtualDepth= params.Depth || 0;
		this.offsetX= params.offsetX || 0;
		this.offsetY = params.offsetY || 0;		
	}
	
	update : function(){
	
	}
	
	render : function(htmlCanvas){
	
	}
}