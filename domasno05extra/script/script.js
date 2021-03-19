//Create a function that takes an number and creates array with all numbers till that number.
// createArray(5) ➞  [1, 2, 3, 4, 5]
// createArray(10) ➞  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// createArray(-5) ➞  []
console.log(`EXERCISE 0`);
function createArray(num){
    var numArray = [];
    if(num > 0){
    for(let i = 1; i <= num; i++ ){
       numArray.push(i);
        }
    }
    else if(num < 0){
        for(let i = -1; i >= num; i-- ){
            numArray.push(i);
         }
    } 
    return numArray;
    }


    console.log(createArray(5));
    console.log(createArray(10));
    console.log(createArray(-5));


//Create a function that takes an array and returns the first element.
// getFirstValue([1, 2, 3]) ➞ 1
// getFirstValue([80, 5, 100]) ➞ 80
// getFirstValue([-500, 0, 50]) ➞ -500

console.log(`EXERCISE 1`);
function getFirstValue(array){
    return array[0];
}

let arrayNum = [ 600, 616, 6666, 222, 363, 1];

console.log(getFirstValue(arrayNum));

//Write a function to reverse an array.
console.log(`EXERCISE 2`);
function reverseArray(array){
    var reverse = [];
    for(let i = 0; i < array.length; i++){
        reverse.unshift(array[i]);
    }
    return reverse;
}
console.log(reverseArray(arrayNum));

//Task 3: Find the Index
//Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

console.log(`EXERCISE 3`);
function findIndex(array , item){
    for(let i = 0 ; i < array.length; i++){
        if(item === array[i]){
            return `${item} found it is in the array INDEX ${i}`;
          
        }
    }
}

console.log(findIndex(arrayNum , 222));

//Task 4: Check if an Array Contains a Given Number
//Write a function to check if an array contains a particular number.
console.log(`EXERCISE 4`);
function checkElement(array , item){
    let falseTrue = false;
    for(let i = 0; i < array.length; i++){
        if(item === array[i]){
            falseTrue = true;
        }
    }
    return falseTrue;
}

let randomArray = ["first" , "2nd" , 3 , 5, 6, false , "no"];

console.log(checkElement(randomArray , "2nd"));

//Task 5: Negate the Array of Numbers
//Given an array of numbers, negate all elements contained within.
console.log(`EXERCISE 5`);
function negate(array){
    let negate = [];
    for(let i=0; i < array.length; i++){
        array[i] = -array[i];
        negate.push(array[i]);
    }
    return negate;
}

let arrayNums = [1 , 2, 5, 6, -2, -5];
console.log(negate(arrayNums));

//Task 6: Difference of Max and Min Numbers in Array
//Create a function that takes an array and returns the difference between the biggest and smallest numbers.
console.log(`EXERCISE 6`);
function minMaxDiff(array){
    let difference = Math.max(...array) - Math.min(...array);
    return `the difference between min ${Math.min(...array)} and Max ${Math.max(...array)} is ${difference}`;
}
let arrayInfinity = [Infinity, 6,3,7,8]
console.log(minMaxDiff(arrayInfinity));


// Task 7: Multiply by Length
// Create a function to multiply all values in an array by the amount of values in that array.
console.log(`EXERCISE 7`);

function multiplyByLength(array){
    let multiplyed = [];
    for(let i = 0;i < array.length; i++){
        multiplyed.push(array[i] * array.length)
    }
        return `original ${array} \n result ${multiplyed}`
}

let multiArray = [ 5 , 6, 7, 8,3,6,5]
console.log(multiplyByLength(multiArray));


//Task 8: Hurdle Jump
// Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles.

// A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.
console.log(`EXERCISE 8`);

function hurdleJump(hurdle , distance){
    if(Math.max(...hurdle) <= distance){
        return true;
    }
    else{
        return false;
    }
}

console.log(hurdleJump(multiArray , 9));

//Task 9: Generate a Countdown of Numbers in an Array
// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.
console.log(`EXERCISE 9`);
function countDown(num){
    let countdown = [];
    for(let i = num;i >= 0 ;i--){
    countdown.push(i)
}
return countdown;
}
console.log(countDown(9));

//Task 10: Odd Up, Even Down
//Create a function that goes through the array, incrementing (+1) for each odd number and decrementing (-1) for each even number.
console.log(`EXERCISE 10`);
function oddUpEvenDown(array){
    let result = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0 ){
            result.push(array[i] - 1);
        }
        else {
            result.push(array[i] + 1);
        }
    }
    
    return result ;
}

console.log(oddUpEvenDown(arrayNum));