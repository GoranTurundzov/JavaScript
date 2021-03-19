////  HOMEWORK #1
console.log(`
Homework #1
`);

function returnArray(array){
    let returnArray = "";
    for (let i = 0; i < array.length; i++){
        returnArray = returnArray + array[i] + " ";
    }
    return returnArray;
}

let randomArray = ["Hello" , "there" , "from" ,"the" ,"students", "of" ,  "SEDC" , "group" , 1] ;
console.log(returnArray(randomArray));



/// HOMEWORK #2
console.log(`
Homework #2
`);
function loopHomework2(){
    for(let i = 1; i <= 20; i++ ){
        evenodd = i % 2;
        if(evenodd === 0 ){
            console.log(i);
            console.log("\n ")
        }
        else{
            console.log(i);
            console.log(" ")
        }
    }

}
loopHomework2();

// HOMEWORKD #3 
console.log(`
Homework #3
`);

function maxMin(array){
    let max = array[0];
    let min = array[0];
    for(let i = 1; i < array.length; i++){
        console.log(array[i]);
        if(array[i] > max){
            max = array[i];
        }
        else if(array[i] < min){
            min = array[i];
        }
    }
    return `min is ${min} max is ${max}`;
}

let brojki = [ 5 , 7 ,8 ,9,2, 8,10 ,111, 552, 663, 636,55, 1];
console.log(maxMin(brojki));
/////   adition on the 3rd
console.log(`
Homework #3 additional
`);

function maxMinAllTypes(array){
    let max = array[0];
    let min = array[0];
    for(let i = 1; i < array.length; i++){
        if(typeof array[i] !== "number"){
            console.log(`${array[i]} is not a number `)
           
         array[i] = array[i].length;
         console.log(`now it it, it's ${array[i]}`)
            
        }
      
            console.log(array[i]);
            if(array[i] > max){
                max = array[i];
            }
            else if(array[i] < min){
                min = array[i];
            }
    }
    return `min is ${min} max is ${max}`;
}
let allTypes = [5 , 2 , 55, 123124, 555 , 55132, "A",  "asda", "nsasdasdfihoariasdasdasdasoharioa" ];
console.log(maxMinAllTypes(allTypes))


console.log(`

homework #4 

`);

let firstNames = ["Goran" , "Zoran" , "Damjan" , "Marija" , "Elena"];
let lastNames = ["Turundzov" , "Bratmunagoran" , "Stojanovski" , "Cvetanovska" , "Petrovska" ];
function combineNames(firstname , lastname){
    fullname = [];
    for(let i = 1; i <= firstname.length; i++){
        fullname.push(`${i}.${firstname[i-1]} ${lastname[i-1]}`);
        
    }
    
    return fullname;
    
    
}
console.log(combineNames(firstNames , lastNames));