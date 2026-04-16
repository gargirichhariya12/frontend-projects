//The constructor initializes object properties.
class person {
    constructor(name, age){
        this.name= name;
        this.age = age;
    }
    greet(){
        console.log(`hey my name is ${this.name} and my age is ${this.age}`)
    }
}

const p1 = new person('Gargi', 21)

p1.greet()

//Methods are functions defined inside a class.
class calculator {
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
    add(a, b){
        return a + b;
    }
    sub(a, b){
        return b - a;
    }
}

const calc = new calculator();
console.log(calc.add(4,7),calc.sub(3,9));

//Classes can also be defined as expressions.
const Animals = class {
    speek(){
        console.log("heehee")
    }
}

const A = new Animals();
A.speek();

//Static methods belong to the class itself, not the instance.

class MathUtil {
    static add(a,b) {
        return a + b;
    }
}
// wrong for the static method
// const math = new MathUtil();
// console.log(math.add(2, 7));

console.log(MathUtil.add(5, 6))

//Getters and Setter. getters is to get the value and setter is to set new value 

class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

const u = new User("Aman");

console.log(u.name);

u.name = "Rahul";

console.log(u.name);

//class inheritance 

class Fullname {
    constructor(name, age){
        this.name = name;
        this.age = age ;
    }
    speek(name){
        console.log(`hi my name is ${this.name}`);
    }
}

class human extends Fullname {
    tell(age){
        console.log(this.age);
    }
}

const D = new human('Gargi', 23);

D.speek();
D.tell();