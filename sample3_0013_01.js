// ライブラリ
export class Animal {
	constructor(name, sex) {
		this.name = name;
		this.sex = sex;
	}

	toString() {
		return this.name + ' is ' + this.sex + '.';
	}
}
