//Strings
const myVariable = "mathematics";
// The Length Property
console.log("Today is Tuesday".length);
var a;
console.log(a);
var b = 7; 
a =b;
console.log(b);
var x = 4;
var y = 8;
var z = "Khushi";
 x =  x+ 1;
 y = y+ 4;
 z = z + " String!!";
 console.log(x);
 console.log(y);
 console.log(z);
 var s = "i am a \"double qouted\" string in \"double qoutes\"";
 console.log(s);
 
 var k = 'i am a "double qouted" string in "double qoutes"';
 console.log(k);
 var a = "Khushi";
 var b = " is well";
 a+=b;
 console.log(a);
 var firstlength =0;;
 var first = "Hii , I am doing well";
 firstlength= first.length;
 console.log(firstlength);
 console.log(first.length);
 console.log("Hii".length);
var firstl ="";
firstl = a[5];
console.log(firstl);
var c = "Worldyyyii";
c[0]= "H";
console.log(c);

 var d = c[c.length-1];
console.log(d);
var ourArray = ["John", 45];
console.log(ourArray);
var myData = ourArray[1];
console.log(myData);
ourArray[0] = "Panda";
console.log(ourArray);
var myArray =[[1,4,5],[65,7,34],[[65,82],[87,76,2]]];
var myData = myArray[2][0][1];
console.log(myData);
ourArray.push("Happy");
console.log(ourArray);  
var removedArray = ourArray.pop();
console.log(removedArray);
console.log(ourArray);
var shiftArray = ourArray.shift();
console.log(shiftArray);
console.log(ourArray);
ourArray.unshift("Khushi","hello");
console.log(ourArray);
//Functions
function firstFunction(){
    console.log("heyya, World!!");
}
firstFunction();
function secondFunction(x,y){
    console.log(x*y);
}
secondFunction(45,50);
//Global and local Variable
var product ="T-shirt";
function shop(){
    var product="Shirt";
    return product;
}
console.log(shop());
console.log(product);
function minus(num){
    return num-7;
}
console.log(minus(25));
var processed =0;
function process(num){
    return num *5;
}
processed = process(76);
console.log(processed);
console.log(ourArray);
arry = JSON.stringify(ourArray);
console.log(arry);
//Implementing stand in line in js which is queue 
/* Queue has functionality which is item is added in last and removed from first
we will implement this using next in line function */
function nextInLine(arr, item){
SecondArr.push(item);
 return SecondArr.shift();
}
var SecondArr = [1, 3 ,4 ,5 ,7 ];
console.log("Before: " + JSON.stringify(SecondArr));
console.log(nextInLine(SecondArr,9));
console.log("After: " + JSON.stringify(SecondArr));