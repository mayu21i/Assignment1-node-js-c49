//Q1
let str = "123" ;
console.log(Number(str) + 7);

//Q2
let  val = 0 ;
if(!Boolean(val)){
    console.log("Invalid");
}

//Q3

for(let i = 1 ; i <= 10 ; i++){
    if(i % 2 === 0){
        continue;
    }
    console.log(i);
}
//Q8
function divisibleBy3and5(num){
    if(num % 3 === 0 && num % 5 === 0){
        return"Divisible by both";
    }
    else{
        return "Not divisible by both";
    }
}

//Q9

let sqareOfNum = num => num * num ;
//Q10
let person = {
    name :'John',
    age : 25
}
function func(person){
    const {name , age} = person ;
    return name + ' is ' + age + ' years old';
}
//Q13
let arr = [1, 3, 7, 2, 4] ;

function maxNum(arr){
    let maxi = arr[0];
    for(let i = 1 ; i < arr.length ; i++){
        if(maxi < arr[i]){
            maxi = arr[i];
        }
    }
    return maxi
}
//Q14
let obj = {
    name :'John',
    age : 30
}
function getKeys(obj){
    return Object.keys(obj);
}


