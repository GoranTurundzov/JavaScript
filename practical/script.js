//Task 1
//Write a JavaScript program to check whether a matrix is a diagonal matrix or not. 
//In linear algebra, a diagonal matrix is a matrix in which the entries outside 
//the main diagonal are all zero (the diagonal from the upper left to the lower right).
//Hint: Matrix == 2 dimensional array(array of arrays)
 let matrix = [
     [1 , 0, 0, 0], 
     [0 ,2 ,0 ,0] 
     ,[0 , 0 , 3 , 0 ],
      [0 ,0 , 0 , 4]];
 let matrix2 = [[1 , 0, 0, 0], [0 , 0,0 ,2] ,[0 , 0 , 3 , 0 ], [0 ,0 , 0 , 4]];
 function isMartixDiagonal(martix) {
    for (let i = 0; i < martix.length; i++) {
        for (let y = 0; y < martix.length; y++) {
            if (i !== y && martix[i][y] !== 0) 
              return false;
        }
    }
    return true;
}
 
console.log(isMartixDiagonal(matrix));
console.log(isMartixDiagonal(matrix2));


//Task 2
//Write a JavaScript program to remove duplicate items from an array
 let duplicateArray = [1, 1, 2, 2 , 3 ,3 ,4 ,4 ,5 , 10 ,5, 6, 6, 7 , 7, 8, 8, 9, 9, 1 , 2 , 3 , 5 ,6 , 10 ];
 function removeDuplicates(array){
     for(let i = 0 ; i < array.length ; i++){
         for(let y = i+1 ; y < array.length; y++){
             if(array[i] === array[y]){
                 array.splice(y , 1 )
             }
         }
        
     }
     return array
 }
 console.log(`task 2  :  ${removeDuplicates(duplicateArray)}`);
//Task 3
//Write a JavaScript program which accept a number as input and insert dashes (-) between 
//each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.
let numberDashes = [0 ,2 ,5 ,4 ,6 ,4 ];
function evenNumbers(number) {
        let result = '';
        for (let i = 0; i < number.length; i++) {
            for (let y = i + 1; y <= number.length; y++) {
                if (number[i] % 2 === 0 && number[y] % 2 === 0) {
                    result += number[i] + '-';
                } else {
                    result += number[i];
                }
               break
            }
        }
        return result;
    }
    console.log(`Task 3 ${evenNumbers(numberDashes)}`);
    console.log(numberDashes)
//Task 4
//Write a JavaScript program which prints the elements of the following array. Note: Use nested for loops.
//Sample array: var a = [[1, 2], [8, 11], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
function combineArray() {
let arrayTask4 =  [[1, 2], [8, 11], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
let result = "";
 for(array of arrayTask4){
     
        for(element of array){
            result = result + `  ${element}`
        }

    } document.getElementById("exercise4").innerText = result;
    }
    combineArray();
//Task 5
//Find all the palindroms in the array. A palindrom is a word that is equal to the reversed word. Ex : "Ana" , "Bob" "boob"
let palindromArray = [`Ana` , "Goran" , "Kapak" , "Pop" , "Stojan" , "Boob" , "Filip" , "FIF"];
let onlyPalindrom = [];
 function reverseString(array){
     let reversedString = "";
     for(let i = array.length - 1; i >= 0; i--){
        reversedString = reversedString +  array[i]
     }
     return reversedString;
 }
 reverseString("ASD")
 function onlyPalindromStrings(){

     for(let i = 0 ; i < palindromArray.length ; i++){
         let reversedAsd = reverseString(palindromArray[i])
         if(palindromArray[i].toLowerCase() === reversedAsd.toLowerCase() ){
             onlyPalindrom.push(palindromArray[i]);
         }
     }
     return onlyPalindrom
 }
 console.log(`Task 5 :  ${onlyPalindromStrings()}`);

//Task 6
//Create a new array that the elements are the lenghts of the elements in the previous array.
let arrayElements = ["hello" , "how" , "are" , "you" , " Doing"];
function createArrayOfPreviousArrayLength(array){
    let newLenghtArray = []
    for(element of array){
        newLenghtArray.push(element.length)
    }
    return newLenghtArray;
}
console.log(`Task 6 :  ${createArrayOfPreviousArrayLength(arrayElements)}`);

//BONUS

//Task FizzBuzz
//Part 1
//Create a function that will take a number as parameter and print in console all the numbers to that number.
//number divisible by 3 print Fizz
let divwith3 = [];
let divwith5 = [];
let divwith3And5 = [];
function divide3(number){

    for(let i = 1 ; i <= number ; i++)
        if((i % 3) === 0){
            divwith3.push(i)
        }
        return divwith3
}

//number divisible by 5 print Buzz
function divide5(number){
    for(let i = 1 ; i <= number ; i++)
        if((i % 5) === 0){
            divwith5.push(i)
        }
       return divwith5
}

function divide3And5(number){

    for(let i = 1 ; i <= number ; i++)
        if((i % 3) === 0 && (i % 5) === 0 ){
            divwith3And5.push(i)
        }
        return divwith3And5
}

console.log(`extra task DIVIDABLE WITH 3 : ${divide3(1000)} 
Dividable with 5 ${divide5(1000)}
DIVIDABLE with 3 and 5 ${divide3And5(1000)}`)
//number divisible by 3 and divisible by 5 print FizzBuzz

//Part 2
//Add input in the HTML and a button. On click of the button print the values up to the entered number.
let divideNumber = document.getElementById("numberToDivide");
document.getElementById("divider").addEventListener(`click` , function(){
    document.getElementById("with3").innerText =`Dividable with 3 from 1 to ${divideNumber.value}  :   ${divide3(divideNumber.value)}`;
    document.getElementById("with5").innerText =`Dividable with 5 from 1 to ${divideNumber.value}  :  ${divide5(divideNumber.value)}`;
    document.getElementById("with3And5").innerText =`Dividable with 3 and 5 from 1 to ${divideNumber.value}  :   ${divide3And5(divideNumber.value)}`;
    
})
//TASK Coin Denomination
//Given these coin denominations: 1¢, 5¢, 10¢, 20¢, 50¢, find the smallest number of coins needed for a given amount
let howMuch = document.getElementById("howMuch");
let calculateBtn = document.getElementById("calculateBtn");
let calculateBtnChange = document.getElementById("calculateBtnChange");
let results = document.getElementById("resultCalculate");
let coins = [50, 20, 10, 5 ,1];

calculateBtn.addEventListener(`click` , calculateCoins);

function calculateCoins(){
    let value = howMuch.value;
    result = 0;
    for(let i = 0; i < coins.length; i++){
        if(value >= coins[i]){
        result = `${result + Math.floor(value / coins[i])}x${coins[i]}cents \n `;
        value = (value % coins[i]);
       }
       if(value === 0 ){
           break;
       }
    }
    
    results.innerText = result
}
//Example 1: For 375 cents, 9 coins are needed
//Example 2: For 543 cents, 15 coins are needed
//bonus1 - Make the finite amount for each coin
let coinStatus = [ 
    [50 , 6],
    [20 , 5],
    [10 , 55],
    [5 , 1],
    [1 , 10]
]


function fixedCoins(coins , change){ 
    result = [];
    for (let coin of coins) {
        while (change >= coin[0] && coin[1] > 0) {
          change -= coin[0]; 
          coin[1]--; 
          result.push(coin[0])
        }
    }
  return result;
}



function sortArray(){
    let array = fixedCoins(coinStatus , howMuch.value);
    let result = "";
    let totalSum = array.reduce((a, b) => a + b , 0);
    for(coins of coinStatus){
        let count = "";
        for(element of array){
            
            if(coins[0] == element){
                count++
            }
          
        }
        if(count !== ""){
        result = result + `${coins[0]} x ${count}   `
    }}
    if(totalSum < howMuch.value){
        return `Not Enough money to return`
    }
    else {
        return result
    }
}

calculateBtnChange.addEventListener(`click` , function(){
     document.getElementById("resultChange").innerText = sortArray();
})
//bonus2 - Make a report how many coins of each kind were used to return a change
//bonus3 - Make an UI :)


//TASK Number Checker
//Part 1
//Write a function that will give stats about an integer number.
//The function should return an object with the stats as properties. The stats required are:

//1. Whats the value of the number (value property)
//2. How many digits the number has (numDigits property)
//3. Is the number odd or even (isEven property)
//4. Is the number positive (isPositive property)
//Part 2
//Write user interface for the number checker. It should include an entry field for the number as well as a 
//button to trigger the calculation. After the calculation, and appropriate response should be shown on the page.
let values = document.getElementById("values");
let valuesButton = document.getElementById("valuesValue");
let valuePrint = document.getElementById("seeValue")

function numberChecker(number){
    let numb = number;
    let digits = numb.length;
    let oddEven = "even";
    if((numb % 2) !== 0){
        oddEven = "odd";
    }

    let positive = "positive";
    if(numb < 0){
        positive = "negative";
    }
    return `The Number is ${numb} it consists of ${digits} digits, it is ${oddEven} and it is ${positive} `;
}


valuesButton.addEventListener(`click` , function(){
    if(!isNaN(values.value)){
       valuePrint.innerText =  numberChecker(values.value);
    }
})