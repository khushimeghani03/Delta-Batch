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
