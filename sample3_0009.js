// 可変長引数

function sum(...args) {
	let result = 0;
	for(let arg of args) {
		result += arg;
	}
	return result;
}

console.log(sum(100, 10));
console.log(sum(100, 10, 0, -1, 5));
