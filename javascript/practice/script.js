// console.log("hellow")
// //lesson 1 functions

// greet('Gargi');
// //function  declarations
// function greet(name){
//     console.log("my name is " + name)
// }
// //Arrow function , Reference error
// let hello = (name) => {
//     console.log("my name is " + name)
// }
// hello("vansh")

// // Function Constructor,  Reference error

// let F2 = new Function('name', 'console.log("my name is " + name)' )
// F2('jay')


// const myFunction = function name(x, y) {
//     console.log( x * y);
// }
// myFunction(5,6)


// // Call-Back -> simple meaning is that i'll call u back later

// let call = (message) => {
//     document.getElementById('demo').innerHTML = message
// }

// setTimeout( () => {call('work hard')}, 4000)


// //Array method jese ki forEach vo function ko bar bar call karta h arr ke har element ke liye

// console.log(document.getElementById('arr'));
// let array = [32, 45, 67,78];

// let text = '';

// array.forEach(value => {
//     text += value +  " "
// });
// document.getElementById('arr').innerText = text;

// let sum = 0;
// array.forEach(val => {
//     sum += val;
//     console.log(sum);
// })

// //Sequence Control

// let mydisplay = (show)=> {
//     console.log(show)
// }

// let mySum = (num1, num2)=>{
//  let sum = num1+ num2;
//  return sum;
// }

// let res = mySum(4,6);
// mydisplay(res);

// let mySumShow = (num1, num2) => {
//     let sum = num1 + num2;
//     mydisplay(sum)
// }

// mySumShow(7, 9);

// let mySum2= (num1, num2, mydisplay)=>{
//     let  sum = num1 + num2;
//     mydisplay(sum);
// }
// mySum2(9, 8, mydisplay)


// // this and call

// const person = {
//     fullName : function (){
//         console.log( this.firstName + " " + this.lastName);
//     }
// }

// const person1 = {
//     firstName :"Gargi",
//     lastName: "Ruchhariya"
// }
// const person2 = {
//     firstName :"Vansh",
//     lastName: "Nandane"
// }

// person.fullName.call(person1)


// function showName() {
//   console.log(this.name);
// }

// const per = { name: "John" };

// showName();
// showName.call(per);

//apply()

// const person = {
//     fullName : function(){
//          console.log(this.firstName + " " + this.lastName);
//     }
// }
// const person1 = {
//     firstName: "Gargi",
//     lastName: "Richhariya"
// }

// person.fullName.apply(person1)

//Example with Arguments
const person = {
    fullName: function(city, country){
        console.log(this.firstName + " " + this.lastName + " from " + city + ", " + country);
    }
}

const person1 = {
    firstName: "Gargi",
    lastName: "Ruchhariya"
}

person.fullName.apply(person1,["Indore","India"])

function sum(...numbers){
  console.log(numbers.sort((a,b)=>b - a));
}

sum(1,5,2,3,4);

function greet(name = "Guest"){
  console.log("Hello " + name);
}

greet();