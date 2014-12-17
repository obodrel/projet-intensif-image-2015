var Input = {
	
	pressed: {},

	DOWN: 40,
	UP: 38,
	LEFT: 37,
	RIGHT: 39,
	SHOOT: 32,
	WEAPON_1: 97,
	WEAPON_2: 98,

	
	isKeyDown: function(code) {		
		return this.pressed[code];
	},

	onKeyDown: function(keyDownCallback) {
		this.pressed[keyDownCallback.keyCode] = true;
	},

	onKeyUp: function(keyUpCallback) {
		delete this.pressed[keyUpCallback.keyCode];
	}

};
