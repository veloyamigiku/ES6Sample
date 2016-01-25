// アロー関数

var Person = function(name) {
	this.name = name;
	this.show = () => {
		console.log('hello ' + this.name);
	}
}

var p = new Person('leon');
setTimeout(p.show, 5000);
