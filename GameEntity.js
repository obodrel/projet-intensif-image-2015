var GameEntity = Class.create({
	x : 0,
	y : 0,
	collisionGroups : 0,
	collisionFilters : 0,
	initialize : function(x,y,collisionGroups,collisionFilters){
		this.x=x;
		this.y=y;
		this.collisionGroups= collisionGroups;
		this.collisionFilters= collisionFilters;
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
	},
	update : function() {

	},
	shoot : function() {

	},
	render : function() {

	}
});