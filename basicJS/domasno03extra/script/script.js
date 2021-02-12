// ----------- Task 01 --------------
// Write a JS function that will decide if a number entered by user is even or odd
// Example: isOddOrEven(3)
// Output 'Number 3 is odd number.'

function isOddOrEven() {
    var oddeven = parseInt(document.querySelector("#oddOrEven").value);
    if ((oddeven % 2) !== 0){
        document.oddEven.oddEvenResult.value = `this number is odd`;
        console.log(`this number is odd`);
    }
    else if ((oddeven % 2) === 0 ){
        console.log(`this number is even`);
        document.oddEven.oddEvenResult.value = `this number is even`;
    }
    
}
document.getElementById("isOddOrEven").addEventListener("click", isOddOrEven);

// ------------ Task 02 --------------
// Write a function that takes an integer minutes and converts it to seconds.
// Example: convert(5)
// output 300

function minutesToSeconds() {
    var minutes = parseInt(document.querySelector("#minutes").value);
    var seconds = minutes * 60;
    console.log(`${minutes} minuti se ${seconds} sekundi`);
    document.minutesSeconds.minutesResult.value = `${seconds} seconds`;
}
document.getElementById("minutesToSeconds").addEventListener("click", minutesToSeconds);
// ------------ Task 03 -------------
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.
// Example: points(38, 8) 
// output 100

function twoThreePointers() {
    var twoPoints = parseInt(document.querySelector("#twoPointers").value);
    var threePpoints = parseInt(document.querySelector("#threePointers").value);
    result = (twoPoints * 2) + (threePpoints * 3);
    console.log(result);
    document.pointsCounter.pointsResult.value = `${result} points total`;
}
document.getElementById("twoThreePointers").addEventListener("click", twoThreePointers);

function Points(x , y){
    total = (x * 2) + (y * 3);
    console.log(total);
}

Points(38, 8);


// ------------ Task 04 ------------ 
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// Example: howManyLegs(5, 2, 8)
// output: 50

function legzies(x , y , z) {
    chicken = x * 2;
    cow = y * 4;
    pig = z * 4;
    howMany = chicken + cow + pig;
    console.log(howMany);
}
legzies(5,2,8)

function animalLegs(){
    chicken = parseInt(document.querySelector("#chicken").value) * 2;
    cow = parseInt(document.querySelector("#cow").value) * 4;
    pig = parseInt(document.querySelector("#pig").value) * 4;
    result = chicken + cow + pig;
    console.log(result);
    document.legsCount.legsResult.value = `${result} legs in total`;
}
document.getElementById("animalLegs").addEventListener("click", animalLegs);
// ------------ Task 05 ------------
// Some basic arithmetic operators are +, -, *, /, and %. In this challenge you will be given three parameters, num1, num2, and an operator. Use the operator on number 1 and 2.
// Example: calculate(3, 7, '*')
// output: 21

function calculator(){
    number1 = parseInt(document.querySelector("#number1").value);
    number2 = parseInt(document.querySelector("#number2").value);
    operator = document.querySelector("#operator").value;
    if(operator === "+"){
        result = number1 + number2;
    }
    else if(operator === "-"){
        result = number1 - number2;
    }
    else if (operator === "*"){
        result = number1 * number2;
    }
    else if (operator === "/"){
        result = number1 / number2;
    }
    else {
        result = `please select an operator`
    }
    console.log(result);
    document.calculate.calculatorResult.value = result;
}
document.getElementById("calculator").addEventListener("click", calculator);

// ------------- Task 06 -----------
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// Example: comp("ABC", "DE")
// output false


function wordCompare(){
    var word1 = document.querySelector("#word1").value;
    var length1 = word1.length;
    var word2 = document.querySelector("#word2").value;
    var length2 = word2.length;
    if(length1 === length2){
        document.comparison.biggerSmaller.value = "=";
        console.log(length1 === length2);
    }
    else if(length1 < length2){
        document.comparison.biggerSmaller.value = "<";
        console.log(length1 === length2);
    }
    else if(length1 > length2){
        document.comparison.biggerSmaller.value = ">";
        console.log(length1 === length2);
    }
    
}
document.getElementById("wordCompare").addEventListener("click", wordCompare);
// ------------- Task 07 -----------
//A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break. So you need two parameters, one for user age and other for the bartender being on break or not.
// Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
// Example: shouldServeDrinks(17, true) output false
// Example: shouldServeDrinks(19, false) output true
// Example: shouldServeDrinks(30, true) output false

function barTend(){
    var age = parseInt(document.querySelector("#drinkerAge").value);
    var onBreak = document.getElementsByName("onBreak");
    if(onBreak[0].checked){
        var Break = "on";
    }
    else if (onBreak[1].checked){
        var Break = "off";
    }
   
   
    if(age >= `18` && Break === "on"){
        console.log(`dont serve`);
        document.querySelector("#response").value = `Im on a break please wait for 5 minutes.`
    }
    else if (age >= `18` && Break ==="off"){
        console.log(`serve`);
        document.querySelector("#response").value = `What can I get you?`
    }
    else if(age < `18`){
        console.log(`you are too young`);
        document.querySelector("#response").value = `You are too young`
    }
    else{
        console.log(`age please`);
    }

    console.log(`${age} ${Break}`)
}
document.getElementById("barbutton").addEventListener("click" , barTend);

// ------------- Task 08 -----------
// Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
// Example: moodToday("happy") output "Today, I am feeling happy"
// Example: moodToday() output "Today, I am feeling neutral"


function imFeeling(){
    var ifeel = document.querySelector("#feeling").value;
    if( ifeel === "happy"){
        document.querySelector("#feelLike").value = `You are HAPPY!!!!!!!!!!! YAY`
    }
    else if ( ifeel === "sad"){
        document.querySelector("#feelLike").value = `Awwwwww you poor thing   :(`
    }
    else if (ifeel === "angry"){
        document.querySelector("#feelLike").value = `WHO IS BOTHERING YOU?? :@`
    }
    else if (ifeel === "lonely"){
        document.querySelector("#feelLike").value = `me too pal, me too`
    }
    else if( ifeel === "likeShit"){
        document.querySelector("#feelLike").value = `Who doesnt?`
    }
    else if (ifeel === "depressed"){
        document.querySelector("#feelLike").value = `It will pass, just think positive`
    }
    else if(ifeel === "topWorld"){
        document.querySelector("#feelLike").value = `That's because you are!`
    }
    else {
        document.querySelector("#feelLike").value = ` You are feeling neutral, or you are too shy to share your feelings`
    }
}

document.getElementById("fellingButton").addEventListener("click", imFeeling);

// ------------ Task 09 -----------
// Create a function that determines whether or not it's possible to split a pie fairly given these three parameters:
// Total number of slices.
// Number of recipients.
// How many slices each person gets.

//The function will be in this form: equalSlices(total slices, no. recipients, slices each)
// Example: equalSlices(11, 5, 2) output true (5 people x 2 slices each = 10 slices < 11 slices)
// Example: equalSlices(11, 5, 3) output false (5 people x 3 slices each = 15 slices > 11 slices)


function shareSlices(){
    var people = parseInt(document.querySelector("#people").value);
    var slices = parseInt(document.querySelector("#slices").value);
    var eachGets = slices / people;
    var leftover = slices % people;
    if(people > slices){
        document.querySelector("#eachGets").value = `Get more pizza`
    }
    else{
    document.querySelector("#eachGets").value = `Each gets ` + parseInt(eachGets) + ` slices`
        if (leftover != 0){
            document.querySelector("#leftOver").value = `${leftover} slices are left for whoever is hungry`
        }
    }
}
document.getElementById("shareSlices").addEventListener("click", shareSlices);
// ---------- Task 10 ----------
// For each of the 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function that takes n cups bought and return as an integer the total number of cups I would get.

// Example: totalCups(6) output 7
// Example: totalCups(12) output 14
// Example: totalCups(213) output 248


function coffeeCups(){
    var bought = parseInt(document.querySelector("#cups").value);
    var action = parseInt(bought / 6);
    // var addone = parseInt(action);
    // var totalcups = bought + action;
    // document.querySelector("#youGet").value = `you get ${action} extra for a total of ${totalcups}`


    for(i = 0;i < action;i++){
        
       bought =  bought + 1;
    }
    document.querySelector("#youGet").value = `${action} free for a total of ${bought} cups`
}


document.getElementById("coffeeCups").addEventListener("click", coffeeCups);