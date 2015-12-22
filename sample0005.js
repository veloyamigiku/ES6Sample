// setterを省略して読み取り専用のプロパティを定義する
class Animal {
  get age() {
    console.log('getterが呼び出されました。');
    return this._age = 10;
  }
}

var ani = new Animal();
console.log(ani.age);
// setterがないので、値を設定できない
ani.age = -10;
