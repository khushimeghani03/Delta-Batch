// Inline Comments
/* Mutliline 
Comments*/
// Declaring Varible
// var a ;
//console.log(a);
//Assigning 
// a =2;
//Declaring and Assigning 
// var b = 2;
// console.log(b);
// Add, sum, divide, multiply
// var sum = 45 + 4;
// var sub = 78 - 32;
// var multiply = 56 *2;
// var divide = 45 /5;
// console.log(sum);
// console.log(sub);
// console.log(multiply);
// console.log(divide);
//Increment or Decrement
// a = a + 1;
// console.log(a);
// b = b- 1;
// console.log(b);
// Declaring String
//var myName = "Hii my name is \"Khushi\"";
// var myName = 'Hii my name is "Khushi"';
// var myName = `"Hii my name is "Khushi"."`;
// console.log(myName);
// Concatenating of String
// var name = "Hello," + "How are you";
// console.log(name);
// var b = " Today is Thursday";
// name+=b;
// console.log(name);
//Length of String
// var myName = "Guddu";
// console.log(myName.length);
// var firstleter = myName[3];
// console.log(firstleter);
// Declaring and accessing arrays
//var arry = [45, "Khushi",[34,"Guddu"],[67,98,[23,"Khushuuuu"]]];
//console.log(arry);
//console.log(arry[3][2][1]);
//PUSH AND POP FUNCTION
// var arr = [43,67,98];
// arr.push(65);
// console.log(arr);
// arr.pop();
// console.log(arr);
//SHIFT AND UNSHIFT FUNCTION
// var array =[67,87,24,6576,4556];
// array.shift();
// console.log(array);
// array.unshift(9875);
// console.log(array);
//FUNCTIONS
// function myfun(a,b){
//     var c = a + b;
//     console.log(c);
// }
// myfun(67,32);
/*GLOBAL AND LOCAL VARIABLE 
WHEN DEFINE WITH SAME NAME LOCAL VARIABLE TAKES PRESIDENT OVER FUNCTION*/
// let  outerwear = "T-Shirt";
// function dress(){
//     var outerwear = "Trousers";
// }
// console.log(dress());
// console.log(outerwear);
/*NEXT IN LINE FUNCTION
HERE WE ARE PASSING AN ELEMENT TO AARAY
 AND ADD IT TO LAST OF IT AND REMOVE AND RETURN FIRST ELEMT OF ARRAY*/
// var testarr = [45,46,47,48]
// function nextInLine(arr,item){
//     testarr.push(49);
//     var a = testarr.shift;
//     return a;
// }
// console.log("Before: "+ JSON.stringify(testarr));
// console.log(testarr,49);
// console.log("After: "+ JSON.stringify(testarr));
//EQUALITY AND NOT EQUALITY OPERATOR
// function compare(a,b) {
    // if(a === b){
    //     return "it is equal";
    // }
    // return "It is not eqaul";
    // if(a == b){
    //     return "it is equal";
    // }
    // return "It is not eqaul";
//     if(a !==b){
//         return "it is equal";
//     }
//     return "It is not eqaul";
// }
// console.log(compare(5,5));
//LOGICAL && AND || OPERATOR
// function logic(val) {
//     if (val<50 && val >25) {
//         return true;
//     }
//     return false;
    
// }
// if (val<50 || val >25) {
//     return true;
// }
// return false;

// }
// console.log(logic(55));
//SWITCH STATEMENTS
// function kuchbhi(val) {
//     var ans = "";
//     switch (val) {
//         case "a":
//         case "b":
//             return "blue"    
//             break;
//         case "c":
//         case "d":
//             return "dog";
//         default:
//             return "stuff";
//             break;
//     }
    
// }
// console.log(kuchbhi("d"));
//CREATING OBJECTS
// var dog = {
//     2 : "tails",
//     "name" : "tom",
//     "legs" : 4,
// };
// dog.name = "happy Tom";
// dog.ears = 2;
// dog['color'] = 'brown';
//  console.log(dog.name);
//  console.log(dog.color);
//  console.log(dog.ears);
// console.log(dog['legs']);
// console.log(dog['tails']);
// var num = 2;
// var kuchbhi = dog[num];
// console.log(kuchbhi);
//delete dog.legs;
// USING OBJECTS FOR LOOKUPS can be used as switch cases
// function saylookup(val) {
//     var result = "";

//     //defining lookup object
//     var lookup = {
//         "alpha": "adams",
//         "Bravo": "Boston",
//         "Charlie": "Chicago",
//     };
//     result = lookup.hasOwnProperty(val);
//     return result;
// }
// console.log(saylookup("Chicago"));
//NESTED OBJECTS
// var myobj = {
//     "Name" : "Khushi",
//     "age": 20,
//     "cars" : {
//         "Car1": "Ferrari",
//         'car2': "BMW",
//         "car3": {
//             "small":"Ford",
//     }
// }
// };
// console.log(myobj.cars.car3.small);
//NESTED ARRAYS AND OBJECTS
// var arrobj = [ //ARRAY
//     {//OBJECT1
//         type: "flowers",
//         list:[ //ARRAY
//             "rose",
//             "tulip",
//             "dandelion"
//         ]
//     },
//     {//OBJECT2
//         type: "trees",
//         list:[ //ARRAY
//             "mango",
//             "banana",
//             "apple"
//         ]
//     }
// ];
// console.log(arrobj[0].list[2]);
//WHILE LOOP
// var i =0;
// var arr = [];
// while (i<5) {
//     arr.push(i);
//     i++;
// }
// console.log(arr);
// console.log(JSON.stringify(arr));
//ITERATE ARRAY
// var arr = [ 43,56,76,23,35,57,87];
// var count =0;
// for (var i =0; i<arr.length; i++){
//     count +=arr[i];
// }
// console.log(count);
//NESTED ARRAY WITH NESTED LOOP
// function mularr(arr) {
//     var product = 1;
//     for (var index = 0; index < arr.length; index++) {
//         for (var j = 0 ;j < arr[index].length; j++) {
//             product *= arr[index][j];
            
//         }
        
//     }
//     return product;

// }
// var product = mularr([[2,4],[65,45,23]]);
// console.log(product);
//DO WHILE LOOP
// var arr = [];
// var i = 10;
// do{
//     arr.push(i);
//     i++;
// }while (i<5)
// console.log(i,arr);               
//RANDOM FUNCTION used create random decimal number
// function randomfun() {
//     return Math.random();
// }   
// console.log(randomfun());
//RANDOM WHOLE NUMBER
// function randomwhole() {
//     return Math.floor(Math.random()*20);
// }
// console.log(randomwhole());
//PARSEINT FUNCTION
// function kuchbhi(str) {
//     return parseInt(str);
// }
// console.log(kuchbhi("56"));
//TERNARY OPERATOR
// function ternary(a,b) {
//     return a===b ? true: false;
// }
// console.log(ternary(5,5));
// function checksign(val) {
//     return val>0 ? "it is Positive" :val<0 ? "It is Negative" : "Zero";
// }
// console.log(checksign(9));
// console.log(checksign(-7));
// console.log(checksign(0));
//VAR V/S LET KEYWORD
// function scopeee() {
//     var i = "function scopee";
//     if(true)  {
//         //let i = "block scope";
//         console.log(i + " it is in block scope");
//     }
//     console.log(i + " it is in function scope");
// }
// scopeee();
// MUTATE CONSTATNT VARIABLE ARRAY
// const s = [2,5, 4];
// function editt() {
     // s = [45, 34, 76];
     // s[0] = 45;
     // s[1] =34;
     // s[2] = 56;
// }
// editt();
// console.log(s);
//OBJECT MUTATION
// function obj() {
//     "use strict";
//      const freezeobj = {
//         PI : 3.14
//      };
//      Object.freeze(freezeobj);
//      try {
//         freezeobj.PI = 99;
//      } catch (error) {
//         console.log(error);
//      }
//      return freezeobj.PI;
// }
// const PI = obj();
//ARROW FUNCTIONS TO WRITE ANNONYMOUS FUNCTION
// var magic = () => "hello!!!";
// console.log(magic());
// var concatenate = (arr1, arr2) => arr1.concat(arr2);
// console.log(concatenate([1,2],[3,4,5]));
//ARROW FUNCTION TO WRITE MAP FUNCTION AND FILTER FUNCTION
// const realnum = [4,5.6,-9.8,3.14,42,6,8.34,-2];
// const sqint = (arr) => {
//     const sint = arr.filter(num => Number.isInteger(num) && num>0).map(x => x*x);
//     return sint;
   
// }
// console.log(sqint(realnum));
//REST OPERATOR AND REDUCE FUNCTION
// const num = [1, 3,5 ,7,9];
// const sum = num.reduce((a,b)=> {
//     return a +b} );
// console.log(sum);
// const sum = (function(){
//     return function sum (...args){
//         return args.reduce((a,b) => a+b,0);};
// })();
// console.log(sum(1,2,3,4));
//SPREAD OPERATOR
// const arr = [4,5,6,7];
//  const arr1 = [...arr];
//     console.log(arr1);
//     arr1[0] = 1;
//     const arr2 = [2,3,...arr];
    
//     console.log(arr1);
//     console.log(arr2);
//DESTRUCTURING ASSIGNMENT
//  const person = {
//         name: "Khushi",
//         age: 20,
//  };
//     const {name: username, age: userage} = person;
//     console.log(username);
//     console.log(userage);
//destructuring assignment with nested objects
//  const local = {
//         today: {
//             min: 45,
//             max: 67,
//         },
//     };
//     const {today:{min: Min_temp}} = local;
//     console.log(Min_temp);
//DESTRUCTURING ARRAY 
// const[z,x,,,y]= [1,2,3,4,5];
// console.log(z,x,y);
// DESTRUCTURING ARRAY WITH REST OPERATOR  
// const x =[1,2,3,4,5,6,7,8,9,10];
// function assign(arr){
//     const [, , ...y] = arr;
//     return y;
// }

//  const y = assign(x);
//  console.log(x);
// console.log(y);
//USING DESTRUCTURING ASSIGNMENT TO PASS OBJECT AS AN ARGUMENT IN FUNCTION

// console.log(bio);const stat ={
//     max:45,
//     min :23,
//     name: "Khushi",
//     city: "Indore"
// };
// function call({name,city}) {
//     const bio = name + city;
//     return bio;
// }
// const bio =(call(stat));
// console.log(stat);
//string template literals
// const result = {
//     success: ["max length", "no-amd", "max arrow function"],
//     failure: ["no-var", "var on top","line-break"],
//     skipped: ["id-black-list", "no-dup-keys"]
// }
// function x(arr) {
//     const display = [];
//     for(var i =0; i< arr.length ; i++){
// display.push(`<li class = "text-warning">${arr[i] }</li>`);
//     }
//     return display; 
// } 
// const display = x(result.failure);
// console.log(display)
// console.log(result);;
// const createPerson = (name, age,gender)=>({name, age , gender});
// console.log(createPerson("Khushi",20,"Female"));
//CLASS I JS
// class Spaceshuttle{
//     constructor(planet){
//         this.planet = planet;
//     } 
// }
// const x = new Spaceshuttle("Jupiter");
// console.log(x.planet);
const capitaliseString = require('./stringfunction');
const cap = capitaliseString("helloooooo");
console.log(cap);
