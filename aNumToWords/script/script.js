

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
        parseFloat(valueInput.value)) || valueInput.value.includes(" ")){
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
            output.value = `Please enter a valied number between 0 and 9999999999 `
            break;
            
    
}
   }
}



buttonMkd.addEventListener(`click` , function(){
     printNumberMkd();
})
buttonEng.addEventListener(`click` , function(){
    numToWord()
})


valueInput.addEventListener(`keydown` , function(){
    valueInput.style.backgroundColor = ` rgba(255, 2, 2, 0.39)`
})
valueInput.addEventListener(`keyup` , function(){
    valueInput.style.backgroundColor = ` white`
})



let singleDigitMkd = ["", "еден", "два", "три", "четири", "пет", "шест", "седум", "осум", "девет"];
let teensMkd =  ["десет", "единаесет", "дванаесет", "тринаесет", "четиринаесет", "петнаесет", "шестнаесет", "седумнаесет", "осумнаесет", "деветнаесет"];
let dubleDigitsMkd = ["", "десет", "дваесет", "триесет", "четириесет", "педесет", "шеесет", "седумдесет", "осумдесет", "деведесет"];
let multiDigitsMkd = [ "сто", "стотини", "илјади", "милион" , "милјарда" ];
let iregularsMkd = ["двесте" , "триста" , "илјада"];

function singleDIgitNumMkd(number){
    return singleDigitMkd[number]
}
function dubleDigitsNumMkd(number){
    return number[0] == 0 ? singleDigitMkd[number[1]]
    : number[0] == 1 ? teensMkd[number[1]]
    : number[0] >= 2 && number[1] == 0 ? dubleDigitsMkd[number[0]]
    : `${dubleDigitsMkd[number[0]]} и ${singleDigitMkd[number[1]]}`
}
function tripleDIgitNumMkd(number){
    return number[0] == 0 ? `${dubleDigitsNumMkd(`${number[1]}${number[2]}`)}`
    : number[0] == 1 ? `${multiDigitsMkd[0]} ${dubleDigitsNumMkd(`${number[1]}${number[2]}`)}`
    : number[0] == 2 ? `${iregularsMkd[0]} ${dubleDigitsNumMkd(`${number[1]}${number[2]}`)}`
    : number[0] == 3 ?  `${iregularsMkd[1]} ${dubleDigitsNumMkd(`${number[1]}${number[2]}`)}`
    : `${singleDigitMkd[number[0]]}${multiDigitsMkd[1]} ${dubleDigitsNumMkd(`${number[1]}${number[2]}`)}`
}
function fourDigitsMkd(number){
    return number[0] == 0 ?  tripleDIgitNumMkd(`${number[1]}${number[2]}${number[3]}`)
    : number[0] == 1 ? `${iregularsMkd[2]} ${tripleDIgitNumMkd(`${number[1]}${number[2]}${number[3]}`)}`
    : `${singleDigitMkd[number[0]]} ${multiDigitsMkd[2]} ${tripleDIgitNumMkd(`${number[1]}${number[2]}${number[3]}`)}`
}
function fiveDigitsMkd(number){
    return number[0] == 0 ?  fourDigitsMkd(`${number[1]}${number[2]}${number[3]}${number[4]}`)
    : `${dubleDigitsNumMkd(`${number[0]}${number[1]}`)} ${multiDigitsMkd[2]} ${tripleDIgitNumMkd(`${number[2]}${number[3]}${number[4]}`)}`
}
function sixDigitsMkd(number){
    return number[0] == 0 ? fiveDigitsMkd(`${number[1]}${number[2]}${number[3]}${number[4]}${number[5]}`)
    :`${tripleDIgitNumMkd(`${number[0]}${number[1]}${number[2]}`)} ${multiDigitsMkd[2]} ${tripleDIgitNumMkd(`${number[3]}${number[4]}${number[5]}`)}`
}
function sevenDigitsMkd(number){
    return number[0] == 0 ? sixDigitsMkd(`${number[0]}${number[1]}${number[2]}${number[3]}${number[4]}${number[5]}`)
    : number[0] == 1 ? `${singleDigitMkd[number[0]]} ${multiDigitsMkd[3]} ${sixDigitsMkd(`${number[1]}${number[2]}${number[3]}${number[4]}${number[5]}${number[6]}`)}`
    :`${singleDigitMkd[number[0]]} ${multiDigitsMkd[3]}и ${sixDigitsMkd(`${number[1]}${number[2]}${number[3]}${number[4]}${number[5]}${number[6]}`)}`
}
function eightDigitsMkd(number){
    return number[0] == 0 ? sevenDigitsMkd(`${number[1]}${number[2]}${number[3]}${number[4]}${number[5]}${number[6]}${number[7]}`)
    : `${dubleDigitsNumMkd(`${number[0]}${number[1]}`)} ${multiDigitsMkd[3]}и ${sixDigitsMkd(`${number[2]}${number[3]}${number[4]}${number[5]}${number[6]}${number[7]}`)} `
   
}
function nineDigitsMkd(number){
    return  number[0] == 0  ?  eightDigitsMkd(`${number[1]}${number[2]}${number[3]}${number[4]}${number[5]}${number[6]}${number[7]}${number[8]}`)
    : `${tripleDIgitNumMkd(`${number[0]}${number[1]}${number[2]}`)} ${multiDigitsMkd[3]}и ${sixDigitsMkd(`${number[3]}${number[4]}${number[5]}${number[6]}${number[7]}${number[8]}`)}`
}
function tenDigitsMkd(number){
    return number[0] == 0 ? nineDigitsMkd(`${number[1]}${number[2]}${number[3]}${number[4]}${number[5]}${number[6]}${number[7]}${number[8]}${number[9]}`)
    : number[0] == 1 ? `${singleDIgitNumMkd(number[0])} ${multiDigitsMkd[4]} ${nineDigitsMkd(`${number[1]}${number[2]}${number[3]}${number[4]}${number[5]}${number[6]}${number[7]}${number[8]}${number[9]}`)}`
    : `${singleDIgitNumMkd(number[0])} ${multiDigitsMkd[4]}и ${nineDigitsMkd(`${number[1]}${number[2]}${number[3]}${number[4]}${number[5]}${number[6]}${number[7]}${number[8]}${number[9]}`)}`
}


function printNumberMkd(){
    let number = valueInput.value
    if(number == 0){
        output.value = `Нула`
    }else if(isNaN(
        parseFloat(valueInput.value)) || valueInput.value.includes(" ")){
        output.value = `Ве молиме внесете број помегју 0 и 9999999999`
    }
    else{
        switch(valueInput.value.length){
            case 1:
                output.value = singleDIgitNumMkd(valueInput.value);
                break;
            case 2:
                output.value = dubleDigitsNumMkd(valueInput.value);
                break;
            case 3 :
                output.value = tripleDIgitNumMkd(valueInput.value);
                break;
            case 4 :
                output.value = fourDigitsMkd(valueInput.value);
                break;
            case 5 :
                output.value = fiveDigitsMkd(valueInput.value);
                break;
            case 6 :
                output.value = sixDigitsMkd(number);
                break;
            case 7 :
                output.value = sevenDigitsMkd(number);
                break;
            case 8 :
                output.value = eightDigitsMkd(number);
                break;
            case 9 :
                output.value = nineDigitsMkd(number);
                break;
            case 10 :
                output.value = tenDigitsMkd(number);
                break;
            default:
                output.value = `Ве молиме внесете број помегју 0 и 9999999999`
        }
    }

}


