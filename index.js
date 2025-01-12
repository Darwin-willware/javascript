// params(rest) vs arguments(spread)
// (method) Array<any>.reduce(callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue: any): any (+2 overloads)
function multiply(...nums) {
    return nums.reduce((product, num) => product * num, 1);
}

const arr = [5, 6, 2, 3]; 

console.log(multiply(...arr));


//Rest Parameter must be last formal Parameter
// const fn = (a,x,y,...nums,j,i,k) =>{
//     console.log(x,y);
// }

const refactored = (a,x,y,j,i,k,...nums)=>{
    console.log(x,y);
}
refactored(1,2,3,4,5,6,7,8,9,0,1,1,1,2);


//callBack Functions

function greetMe(name){
    console.log('Hi!',name);
}
function scoldMe(name){
    console.log('Hi stupid !',name);
}


function callGreet(callBack){
    var name = 'Hello Moto';
    callBack(name);
}

callGreet(greetMe);

callGreet(scoldMe);


//arrow function vs normal
// Syntax
// implicit Return
//Arguments
//this
x=26;
function fn(){
    x =23;
    console.log(arguments,this.x);
}
fn(1,2,3,4,5,6,89);
let fnArr = ()=>{ x =23; console.log(this.x)};
fnArr(2,4,5,6,);

let user ={
    userName:'kill bill',
    rc1:()=>{
        console.log(this.userName);
    },
    rc2: function (){
        console.log(this.userName);
    }
}

user.rc1();
user.rc2();


