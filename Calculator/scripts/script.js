let buttons = document.getElementsByTagName("button");
let output = document.getElementById("current");
let previous = document.getElementById(`previous`);
for(let button of buttons){
    button.addEventListener(`click` ,function(e){
        let input = e.target.innerText;
        printValue(input)
    });
}
function printValue(value){
    if(value != "CE" && value != "=" && value !="DEL"){
        previous.innerHTML += value;
    }
    if(value == "DEL"){
       let newVal = previous.innerHTML.slice(0 , -1);
       previous.innerHTML = newVal
    }
    if(value == "CE"){
        output.innerHTML = "";
        previous.innerHTML = "";
    }
    if(value == "="){
        let totalResult = previous.innerHTML;
        if(eval(totalResult)){      
              output.innerHTML = eval(totalResult);
            } 
    
    }
     
}

