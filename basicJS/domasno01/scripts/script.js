// calculate the remainder of two numbers 

var num1 = 3552;
var num2 = 35;
var remain = num1 % num2;
console.log("ostatokot od delenjeto na " + num1 + " so " + num2 + " e " + remain)




// legs

var chicken = 2;
var cow = 4;
var pig = 4;
// if we have 3 chickens 5 cows and 2 pigs 
var legs = chicken * 3 + cow * 5 + pig * 2;
console.log("zbirot na noze na 2 kokoski 5 kravi i 2 prasinja e " + legs + " noze");


// Rectangle
var sideA = 5;
var sideB = 4;
var perimeter = sideA * 2 + sideB * 2
console.log("plostinata na pravoagolnik so strani  a=5cm b=4cm e " + perimeter + "cm");

// equilateral triangle
var sideAtri = 5;
var altitute = (sideAtri * Math.sqrt(3)) / 2;
console.log("visinata na ramnostran triagolnik so strana od 5 cm e " + altitute + "cm");

////////////////////////////////////////////
//// vezbanje //////


// ostatok na imiput //
function left() {
    var remain1 = parseInt(document.querySelector("#remain1").value);
    var remain2 = parseInt(document.querySelector("#remain2").value);
    var resultRemain = remain1 % remain2;
   // console.log(resultRemain);
    document.querySelector("#resRemain").innerHTML = resultRemain  
};
//// zivotni i noze ////
function animals() {
    var chicken = 2 * parseInt(document.querySelector("#chickens").value);
    var cow = 4 * parseInt(document.querySelector("#cows").value);
    var pig = 4 * parseInt(document.querySelector("#pigs").value);
    var howManyLegs = chicken + cow + pig;
    document.querySelector("#legzies").innerHTML = howManyLegs;  
}
////ramnostran triagolnik
function tiangle(){
    var a = parseInt(document.querySelector("#triangleSide").value);
    var TriAltitude = (a * Math.sqrt(3)) / 2;
    document.querySelector("#altitude").innerHTML = TriAltitude

}
////PRAVOAGOLNIK PLOSTINA
function parameter() {
    var recA = parseInt(document.querySelector("#sideARec").value);
    var recB = parseInt(document.querySelector("#sideBRec").value);
    var parameterRec = recA * 2 + recB * 2;
    document.querySelector("#calculations").innerHTML = parameterRec;
}
// digitronce
function calculator() {
    var inputA = parseInt(document.querySelector("#value1").value);
    var inputB = parseInt(document.querySelector("#value2").value);
    var option = document.querySelector("#operator").value;
    var calculate;

    if(option == "add"){
        calculate = inputA + inputB;
    }
    else if(option == "min"){
        calculate = inputA - inputB;
    }
    else if(option == "dev") {
        calculate = inputA / inputB;
    }
    else if(option == "mult") {
        calculate = inputA * inputB;
    }

    console.log(calculate);
}