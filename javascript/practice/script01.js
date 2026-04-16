//everything about the objects
//objects are the collection of bot property and internal shorts and methods

const user = {
  name: "Rahul",
  age: 22,
  get fullName() {
    console.log( this.name + " " + this.age);
  }
};
user.fullName;

Object.getOwnPropertyDescriptor(user, "name")