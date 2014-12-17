var GameEntity = Class.create({
	initialize : function(params){
		this.x=params.x;
		this.y=params.y;
		this.z=params.z;
		this.collisionGroup= params.collisionGroup;
		this.collisionFilters= params.collisionFilters;
	}
});