console.log("Euler challenge 1");
function EulerOne(numberTo){
    let result = 0;

    for(let i = 0 ; i < numberTo ; i++){
        if(i % 3 == 0 || i % 5 == 0){
            result += i;
        }
    }
    
    console.log(result);
}
EulerOne(1000);