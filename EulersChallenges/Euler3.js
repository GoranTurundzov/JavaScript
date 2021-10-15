console.log("Euler Challenge 3:")

function EulerThree(numberTo){
    let primeFactor = 2;
    let number = numberTo;
    while(number != 1){
        if(number % primeFactor == 0){
            number = number / primeFactor
        } 
        else {
            primeFactor++
        }

       
    }
    console.log(primeFactor)
}

EulerThree(600851475143)