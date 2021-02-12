//----HOMEWORK 1 -----
//Create a function tellStory()
//The function should accept an array of 3 strings as an argument: name, mood, activity(All strings)
//The function should return one big string with a story made from the arguments

//EXAMPLE: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end

//The value that is returned from the function should be printed in the console or in alert

let arguments = ["Goran" , "Energetic" , "Running"];
function tellStory(name, mood, activity){

    console.log(`This is ${name}. ${name} is a nice person. Today he is ${mood}. He is ${activity} all day. The end`);
}
let name = arguments[0];
let mood = arguments[1];
let activity = arguments[2];

tellStory(name, mood, activity);



//-------HOMEWORK 2 -------
//Write a function that will take an array or 5 numbers as an argument and return the sum.
//Print it in the console or in alert

//BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.


// example 1

let numbers = [1,2,5,4,5];
function sumNumbers(numbers){
    var sum = numbers.reduce(function(a, b){
        return a + b;
    }, 0);
    console.log(sum);
}

sumNumbers(numbers);   //Vo slucaj da se bara zbirn na brojkite vo arrayot


function sumNumbers1(numbers){
    var lenghtis = numbers.length;
    console.log(lenghtis);
}

sumNumbers1(numbers); // vo slucaj da se bara goleminata na arrayot



function validateNumber(numbers){
    for(let i = 0; i < numbers.length; i++){
        if(!isNaN(numbers[i])){
            console.log(`${numbers[i]} is a NUMBER`);
        }
        else {
            console.log(`ERROR THIS IS NOT A NUMBER`);
        }
    }
}
validateNumber(numbers);


let sum = 0;
//dvete zaedno sum i validate
function sumValidatedNumbers(numbers){
    for(let i = 0; i < numbers.length; i++){
        if(!isNaN(numbers[i])){
            console.log(`${numbers[i]} +`)
            sum = sum + numbers[i];
        }
        else {
            console.log(`ERROR THIS IS NOT A NUMBER`);
        }
    }
    console.log(`sum of the numbers = ${sum}`);
}

sumValidatedNumbers(numbers);