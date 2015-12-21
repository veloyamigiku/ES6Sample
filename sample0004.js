// setter/getterを使ってプロパティを定義します。
class Animal {
  set age(value) {
    console.log('setterが呼び出されました。');
    if (value < 0) {
      throw new RangeError('ageは正数で');
    }
    this._age;
  }
  
  get age() {
    console.log('getterが呼び出されました。');
    return this._age;
  }
}

var ani = new Animal();
ani.age = 10;
console.log(ani.age);
ani.age = -10;
console.log(ani.age);
