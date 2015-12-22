// getterを省略して書き込み専用のプロパティを定義する
class Animal {
  set age(value) {
    console.log('setterが呼び出されました');
    if (value < 0) {
      throw new RangeError('ageは正数で');
    }
    this._age = value;
  }
}

var ani = new Animal();
ani.age = 10;
// getterがないので値を取得できない
console.log(ani.age);
