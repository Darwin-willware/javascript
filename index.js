console.log("hello World!");

const str = 'hi hello list to me some mistakes get made';

const arrData = ['hi',900,'kello','pom','noset',300,700,'todo','killer'];

function stringManipulation(){

}

//function Declaration
function arrayManipulation(){
console.log(arrData.values());
console.log(arrData.keys())
}

//function Expression
const callFunc = function(num){
    return num*num;
}
console.log(callFunc(8));

//In A language where a function can be treated as variables are called as first order functions
//in these cases a function can be passed to any other function and can be returned from a function so we are treating it as a variable
function firstOrder(fn,int){
    console.log(fn(int));
}
firstOrder(callFunc,35);

//IIFE  Immediately invokable function Expression
(function square(num){console.log(num+num)}(34));

(function (x){ return (function (y){console.log(x)})(2)})(1);

//closures
var num1 =20,num2=30,name='G7 Animator';

function multiply(){
    return num1*num2;
}


console.log(multiply());
function getScore(){
    var num1=2,num2=7;
    function add(){
        return name+' scored '+(num1+num2);
    }

    return add();
}
console.log(getScore());

for(let i=0;i<5;i++){
    setTimeout(()=>{console.log("arrow function",i)},i*1000);
    setTimeout(function (){console.log(" function",i)},i*1000);
}
for(var i=0;i<5;i++){
    setTimeout(()=>{console.log("var arrow function",i)},i*1000);
    setTimeout(function (){console.log("var function",i)},i*1000);
}

function x(){
    var a =8;
    function y(num){
        console.log('y getting',num,'--',++a);
        return 0;
    }
return y;
}

function checker(){
    let b= 10;
    console.log('tester',b++);
}
var z = x();
let m = x();
z(11);
m(22);
m(22);
m(22);
z(11);
console.log('z',z(11));
console.log('m',m(22));
console.log('m',m(22));
console.log('m',m(22));
console.log('z',z(11));


var k = checker;

k();
k();
checker();
checker();

