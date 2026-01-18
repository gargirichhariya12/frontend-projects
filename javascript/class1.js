let student = {
    name: "Alice",
    age: 20,
    major: "Computer Science",
    greet : function() {
        console.log("Hello, my name is " + this.name);
    }
}
Console.log(student.name); // Alice
student.greet(); // Hello, my name is Alice

//this is use to target the current object 
function Student(name, age, course) {
    this.name = name;
    this.age = age;
    this.course = course;
}
// creating an object using the constructor function
let student1 = new Student("Bob", 22, "Mathematics");