// for of構文(Map,Set)

let m = new Map([
	['XML', 'eXtensible Markup Language'],
	['PHP', 'PHP:Hypertext Preprocessor'],
	['JSON', 'Javascript Object Notation']
	]);

let s = new Set(['XML', 'JavaScript', 'PHP']);

for (let str of m) {
	console.log(str);
}

for (let str of s) {
	console.log(str);
}
