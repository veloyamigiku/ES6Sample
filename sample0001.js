// class�\���̃T���v���ł��B
class Animal {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  
  toString() {
    return this.name + '��' + this.sex + '�ł��B';
  }
  
}

var ani = new Animal('����', '���X');
console.log(ani.toString());
