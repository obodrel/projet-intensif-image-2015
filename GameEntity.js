var GameEntity = Class.create({
	initialize : function(params){
		this.x=params.x;
		this.y=params.y;
		this.z=params.z;
		this.collisionGroup= params.collisionGroup;
		this.collisionFilters= params.collisionFilters;
	},
	hitTest : function( entity ) {
		if(this.canCollideWith(entity) && entity.hitBox.intersect(this.hitBox)) {
			return true;
		}
		return false;
	},
	canCollideWith : function(entity) {
		for(groups in this.collisionGroup) {
			if (groups in entity.collisionFilters) {
				return true;
			}
		}
		return false;
	}
});