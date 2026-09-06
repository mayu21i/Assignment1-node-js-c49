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
//Q4
let nums =  [1, 2, 3, 4, 5];

let evenNums = nums.filter(num => num % 2 === 0);
console.log(evenNums);

//Q5

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6] ;

function mergedArrs(arr1 , arr2){
    return [...arr1 , ...arr2];
}
let newArr = mergedArrs(arr1 , arr2);
console.log(newArr);

//Q6

function getDay(num) {
    switch (num) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid day";
    }
}
console.log(getDay(2));

//Q7

let strs = ["a", "ab", "abc"] ;

let strsLength = strs.map(str => str.length);
console.log(strsLength);


//Q8
function divisibleBy3and5(num){
    if(num % 3 === 0 && num % 5 === 0){
        return"Divisible by both";
    }
    else{
        return "Not divisible by both";
    }
}
console.log(divisibleBy3and5(15));

//Q9

let sqareOfNum = num => num * num ;
console.log(sqareOfNum(5));

//Q10
let person = {
    name :'John',
    age : 25
}
function func(person){
    const {name , age} = person ;
    return name + ' is ' + age + ' years old';
}

console.log(func(person));

//Q11

function sum(...nums){
    return nums.reduce((total , num) => total + num , 0);
}
console.log(sum(1, 2, 3, 4, 5));

//Q12


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
console.log(maxNum(arr));
//Q14
let obj = {
    name :'John',
    age : 30
}
function getKeys(obj){
    return Object.keys(obj);
}

console.log(getKeys(obj));

//Q15

function splitWords(str) {
    return str.split(" ");
}

console.log(splitWords("The quick brown fox"));


