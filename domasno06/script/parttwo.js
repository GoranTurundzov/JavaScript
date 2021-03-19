let inputArray0 = document.querySelector("#arrayAdd0");
let inputArray1 = document.querySelector("#arrayAdd1");
let inputArray2 = document.querySelector("#arrayAdd2");
let inputArray3 = document.querySelector("#arrayAdd3");
let inputArray4 = document.querySelector("#arrayAdd4");
let inputArray5 = document.querySelector("#arrayAdd5");
let buttonAdd = document.getElementById("button");
let textArea = document.getElementById("texta");
let array = ["Goran" , "Hello" , 1230 , "Goran2" , "It's me" , 666];
    
document.querySelector("#texta").innerText += array;
function addArray(){
   
    inputArray0.value = array[0];
    inputArray1.value = array[1];
    inputArray2.value = array[2];
    inputArray3.value = array[3];
    inputArray4.value = array[4];
    inputArray5.value = array[5];
    
}

console.log(textArea);
buttonAdd.addEventListener("click" , addArray);