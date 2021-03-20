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
       let resultFinal = (previous.innerHTML.match(/([0-9]+)|\+|-|\*|\//g))
    
       let i = -1;

	if(!resultFinal || resultFinal.length == 1) output.innerHTML = previous.innerHTML;

	while(i++ < resultFinal.length - 1){

		if(resultFinal[i] == '*'){
			resultFinal = calculate(i, resultFinal);
			i = i-1;
		}

	}
	i = -1;
	while(i++ < resultFinal.length - 1){
		if(resultFinal[i] == '/'){
			resultFinal = calculate(i, resultFinal);
			i--;
		}
	}
	i = -1;
	while(i++ < resultFinal.length - 1){
		if(resultFinal[i] == '+'){
			resultFinal = calculate(i, resultFinal);
			i--;
		}
		if(resultFinal[i] == '-'){
			resultFinal = calculate(i, resultFinal);
			i--;
		}
	}

	output.innerHTML = resultFinal[0];
}
   }
   function calculate(op, array){
	t1 = op-1;
	t2 = op+1;
	switch(array[op]){
		case '*':
			array[t1] = parseFloat(array[t1]) * parseFloat(array[t2]);
			break;
		case '/':
			array[t1] = parseFloat(array[t1]) / parseFloat(array[t2]);
			break;
		case '+':
			array[t1] = parseFloat(array[t1]) + parseFloat(array[t2]);
			break;
		case '-':
			array[t1] = parseFloat(array[t1]) - parseFloat(array[t2]);
			break;
	}
	array[op] = false;
	array[t2] = false;
 
	return sortArray(array);
}
    
function sortArray(array){
	let sorted = [];
	let i = -1;
	while(++i < array.length){
		if(array[i] !== false) sorted.push(array[i]);
	}
	return sorted;
}