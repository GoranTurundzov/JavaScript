console.log("Euler challenge 2");
function EulerTwo(numberTo){
    let theArray = [];
    let result = 0;
    let finalResult = 0;
    while(result < numberTo ){
        let i = 0;
        if(theArray.length < 3){
            theArray.push(i);
            i++;
            result = i;
            continue;
        }
        theArray.push(result);
        console.log(result);
        result = theArray[theArray.length-1] + theArray[theArray.length-2]
        if(result % 2 == 0){
            finalResult += result;
        }
    }
    console.log("result " + finalResult);
}
EulerTwo(4000000);