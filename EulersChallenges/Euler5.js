console.log("Euler Challenge 5:")

function EulerFive(numberTo){
    for(i = 20; i < Infinity; i = i + 2){
        for(j = numberTo; j > 1 ; j--){
           
            if(i % j != 0){
               break;
            }
            if(j == 2){
                
                console.log(i);
                return i;}
        }
        
    }
}
EulerFive(20);