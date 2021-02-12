

let singleDigit = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let teens =  ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
let dubleDigits = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
let multiDigits = [ "hundred", "thousand","million","billion"];

let buttonEng = document.getElementById("toEnglish");
let buttonMkd = document.getElementById("toMacedonian");
let valueInput = document.getElementById("number");
let output = document.getElementById("output");

function singleDigitNum(number){
    return singleDigit[number]
}
function dubleDigitNum(number){
    if(number[0] == 1){
        return teens[number[1]]
    }
    else if(number[0] >= 2){
        if(singleDigit[number[1]] == "zero"){ 
            return dubleDigits[number[0]];
        }
        else {
            return `${dubleDigits[number[0]]}-${singleDigit[number[1]]}`
        }
        
    }
    else if(number[0] == 0){
        return `${singleDigit[number[1]]}`
    }
}
function tripleDigitNum(number){
    let numbers = dubleDigitNum(`${number[1]}${number[2]}`)
    if(number[0] == 0){
        return numbers
    }
    else if(number[2] == 0 && number[1] == 0){
        return `${singleDigit[number[0]]}-${multiDigits[0]}`
    }
    else if(number[2] !== 0 && number[1] !== 0)
       return `${singleDigit[number[0]]}-${multiDigits[0]}-${numbers}`
}
function thousands(number){
    let lastThreeDIgits = tripleDigitNum(`${number[1]}${number[2]}${number[3]}`)

    if(number[0] == 0){
        return `${lastThreeDIgits}`
    }
    else {
        return `${singleDigit[number[0]]}-${multiDigits[1]}-${lastThreeDIgits}`
    }
}

function tenThousands(number){
    let firstTwoDigits = dubleDigitNum(`${number[0]}${number[1]}`);
    let lastThreeDIgits = tripleDigitNum(`${number[2]}${number[3]}${number[4]}`);
    let lastFourDIgits = thousands(`${number[1]}${number[2]}${number[3]}${number[4]}`);
    if(number[0] == 0){
        return `${lastFourDIgits}`
    }
    else {
        return `${firstTwoDigits}-${multiDigits[1]}-${lastThreeDIgits}`
    }
   
}
function hundredTousands(number){
    let firstThreeDigits = tripleDigitNum(`${number[0]}${number[1]}${number[2]}`);
    let lastThreeDIgits = tripleDigitNum(`${number[3]}${number[4]}${number[5]}`);
    let lastFiveDigits = tenThousands(`${number[1]}${number[2]}${number[3]}${number[4]}${number[5]}`);
    if(number[0] == 0){
        return lastFiveDigits;
    }
    else{
        return `${firstThreeDigits}-${multiDigits[1]}-${lastThreeDIgits}`
    }
}
function singleMillion(number){
    let lastSixDigits = hundredTousands(`${number[1]}${number[2]}${number[3]}${number[4]}${number[5]}${number[6]}`)
    if(number[0] == 0){
        return lastSixDigits
    }
    else{
        return `${singleDigit[number[0]]}-${multiDigits[2]}-${lastSixDigits}`
    }
}
function tensMillion(number){
    let lastSixDigits = hundredTousands(`${number[2]}${number[3]}${number[4]}${number[5]}${number[6]}${number[7]}`)
    let lastSevenDigits = hundredTousands(`${number[1]}${number[2]}${number[3]}${number[4]}${number[5]}${number[6]}${number[7]}`)
    let firstTwoDigits = dubleDigitNum(`${number[0]}${number[1]}`);
    if(number[0] == 0){
        return lastSevenDigits
    }
    else{
        return `${firstTwoDigits}-${multiDigits[2]}-${lastSixDigits}`
    }

}
function hundredMillion(number){
    let lastSixDigits = hundredTousands(`${number[3]}${number[4]}${number[5]}${number[6]}${number[7]}${number[8]}`)
    let firstThreeDigits = tripleDigitNum(`${number[0]}${number[1]}${number[2]}`);
    let lastEightDigits = tensMillion(`${number[1]}${number[2]}${number[3]}${number[4]}${number[5]}${number[6]}${number[7]}${number[8]}`)
    if(number[0] == 0){
        return lastEightDigits
    } else{
        return `${firstThreeDigits}-${multiDigits[2]}-${lastSixDigits} `
    }
}
function billionNum(number){
    let lastEightDigits = hundredMillion(`${number[1]}${number[2]}${number[3]}${number[4]}${number[5]}${number[6]}${number[7]}${number[8]}${number[9]}`);
    if(number[0] == 0 ){
        return lastEightDigits
    }
    else{
               return `${singleDigit[number[0]]}-${multiDigits[3]}-${lastEightDigits}`
    }
}
function numToWord(){
    if(valueInput.value == 0){
        output.value = `ZERO`
    }
    else if(valueInput.value == ""){
        output.value = "Welcome to My number to word conventer"
    } 
    else if(isNaN(
        parseFloat(valueInput.value))){
        output.value = `Please enter a valied number between 0 and 9999999999`
    }
   else {
    switch(valueInput.value.length){
        case 1:
            output.value =  singleDigitNum(valueInput.value);
            break;
        case 2:
            output.value =  dubleDigitNum(valueInput.value);  
            break;
        case 3:
            output.value =  tripleDigitNum(valueInput.value);  
            break;
        case 4:
            output.value =  thousands(valueInput.value);  
            break;
        case 5:
            output.value =  tenThousands(valueInput.value);  
            break;
        case 6:
            output.value =  hundredTousands(valueInput.value); 
            break;
        case 7:
            output.value =  singleMillion(valueInput.value);  
            break;
        case 8:
            output.value =  tensMillion(valueInput.value);
            break;
        case 9:
            output.value =   hundredMillion(valueInput.value);  
            break;
        case 10:
            output.value =  billionNum(valueInput.value); 
            break;
        default:
            output.value = `Please enter a valied number between 0 and 9999999999`
            break;
            
    
}
   }
}



buttonMkd.addEventListener(`click` , function(){
    
    output.value = `WORK IN PROGRESS`
})
buttonEng.addEventListener(`click` , function(){
    numToWord()
})


valueInput.addEventListener(`keydown` , function(){
    valueInput.style.backgroundColor = ` rgba(255, 2, 2, 0.39)`
})
valueInput.addEventListener(`keyup` , function(){
    valueInput.style.backgroundColor = ` white`
    numToWord()
})