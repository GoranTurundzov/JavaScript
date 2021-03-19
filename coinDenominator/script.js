let howMuch = document.getElementById("howMuch");
let calculateBtn = document.getElementById("calculateBtn");
let calculateBtnChange = document.getElementById("calculateBtnChange");
let results = document.getElementById("resultCalculate");
let coins = [50, 20, 10, 5 ,1];

calculateBtn.addEventListener(`click` , ()=>{
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
)
////FIXED COINS!!


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
        result = result + `${coins[0]} x ${count} ;  `
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