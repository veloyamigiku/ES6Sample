// setter/getter���g���ăv���p�e�B���`���܂��B
class Animal {
  set age(value) {
    console.log('setter���Ăяo����܂����B');
    if (value < 0) {
      throw new RangeError('age�͐�����');
    }
    this._age;
  }
  
  get age() {
    console.log('getter���Ăяo����܂����B');
    return this._age;
  }
}

var ani = new Animal();
ani.age = 10;
console.log(ani.age);
ani.age = -10;
console.log(ani.age);
