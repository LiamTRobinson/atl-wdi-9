console.log('tamagotchi file is loaded');

//your constructor function here
function Tamagotchi(name, creatureType) {
	this.foodInTummy = 10;
	this.restedness = 10;
	this.health = 10;
	this.name = name;
	this.creatureType = creatureType;
}

Tamagotchi.prototype.cry = function() {
	this.foodInTummy -= 1;
	console.log(`"WAHH!!!" ${this.name}'s getting hungry. Current food in tummy: ${this.foodInTummy}`);
}

Tamagotchi.prototype.puke = function() {
	this.health -= 1;
	console.log(this.foodInTummy);
	console.log(`"BLEHHHH!" ${this.name} threw up! Current health: ${this.health}`);
}

Tamagotchi.prototype.yawn = function() {
	this.restedness -= 1;
	console.log(`"YAAAAWWN!" ${this.name} is getting tired. Current restedness: ${this.restedness}`);
}

Tamagotchi.prototype.hungerTimer = function(x) {
	var _this = x;
	_this.ahungerTimer = setInterval(function() { _this.cry() }, 6000)
}

Tamagotchi.prototype.yawnTimer = function(x) {
	var _this = x;
	_this.ayawnTimer = setInterval(function() { _this.yawn() }, 10000)
}

Tamagotchi.prototype.sickTimer = function(x){
	var _this = x;
	_this.asickTimer = setInterval(function(){ _this.puke() }, 20000)
}

Tamagotchi.prototype.start = function() {
	this.sickTimer(this);
	this.yawnTimer(this);
	this.hungerTimer(this);
}

Tamagotchi.prototype.stop = function() {
	clearInterval(this.ahungerTimer);
	clearInterval(this.ayawnTimer);
	clearInterval(this.asickTimer);
}

//create new Tamagotchis

//test out your Tamagotchies below via console.logs
