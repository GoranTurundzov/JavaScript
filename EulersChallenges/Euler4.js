console.log("Euler Challenge 4")


function EulerFour(){
    let result = 0;
    for(i = 999; i > 99 ; i --){
        for(j = i; j > 99 ; j--){
            if((i*j).toString().split("").join() == (i*j).toString().split("").reverse().join() && i * j > result)

            result = i*j;
            
        }
    }
  
    console.log(result);
}
EulerFour();
