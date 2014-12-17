var AssetManager = Class.create({

	assets: [],
	loaded: -2,
	toLoad: 0,
	
	add: function(id, asset) {
		this.assets[id]=asset;
		this.loaded ++;
	},
	
	addImage: function(id, src) {
		var image = new Image();
		image.src = src;
		var self = this;
		image.onload = function(){
			self.add(id,image);
		};
		this.toLoad ++;
	},
	
	getImage: function(id) {
		return this.assets[id];
	},
	
	addAudio: function(id, src) {
		sound = new Audio(src);
		var self = this;
		sound.oncanplaythrough = function(){
			self.add(id,sound);
		};
		this.toLoad ++;
	},
	
	getAudio: function(id) {
		return this.assets[id];
	},
	
	load: function() {
		this.addImage("bg1"      ,"./assets/images/Background01.png");
		this.addImage("bg2"      ,"./assets/images/Background02.png");
		this.addImage("bullet1"  ,"./assets/images/Bullet01.png");
		this.addImage("bullet2"  ,"./assets/images/Bullet02.png");
		this.addImage("bullet3"  ,"./assets/images/Bullet03.png");
		this.addImage("enemy1"   ,"./assets/images/Enemy01.png");
		this.addImage("enemy2"   ,"./assets/images/Enemy02.png");
		this.addImage("explosion","./assets/images/Explosion01.png");
		this.addImage("player1"  ,"./assets/images/Spaceship01.png");
		this.addImage("player2"  ,"./assets/images/Spaceship02.png");
		this.addImage("gameover" ,"./assets/images/GameOver.png");
		this.addImage("supernova" ,"./assets/images/Supernova.jpg");
		this.addImage("title"    ,"./assets/images/Title.png");
		this.addImage("choice"   ,"./assets/images/Choice.png");
		this.addAudio("explosionsound","./assets/audio/fx/Explosion.mp3");
		this.addAudio("loose"    ,"./assets/audio/fx/Loose.mp3");
		this.addAudio("weapon"   ,"./assets/audio/fx/WeaponChange.mp3");
		this.addAudio("lvl1"     ,"./assets/audio/music/Level01.mp3");
		this.addAudio("lvl2"     ,"./assets/audio/music/Level02.mp3");
		this.loaded+=2;
	},
	
	isFinishedLoading: function() {
			return (this.loaded >= this.toLoad);
	}
});

var assetsManager = new AssetManager();
