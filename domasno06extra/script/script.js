let recepieName = prompt(`whats the name of the recepie`)
while(recepieName == ""){
    recepieName = prompt(`whats the name of the recepie`)
}
let ingredientsNumber = parseInt(prompt(`how many ingredients are there`));
while(isNaN(ingredientsNumber)){
    ingredientsNumber = parseInt(prompt(`how many ingredients are there`));
}
let ingredientsArray = [];
    
 for(let i = 0; i < ingredientsNumber; i++ ){
        ingredientsArray.push(prompt(`name of ingredient ${i + 1}`));
    }
//------------------------ vo lista -------------------------------------
document.getElementById("recepieName").innerText = `${recepieName}`;
document.getElementById("recepie").innerHTML = `<ul><b>INGREDIENTS</> </ul>`;
for(let i = 0; i < ingredientsArray.length; i++ ){
    document.getElementById("recepie").innerHTML += `<li> ${i + 1} ${ingredientsArray[i]} </li> `;
}
document.getElementById("recepie").innerHTML += `</ul> </br> </br> </hr> </hr> </br>`;
  
/// ----------------------- vo tabela -----------------------------------


document.getElementById("tHead").innerText =  `${recepieName}`;

for(let i = 0; i < ingredientsArray.length; i++ ){
    document.getElementById("table").innerHTML += `<tr>
    <td>${i + 1}</td>
    <td>${ingredientsArray[i]}</td>
</tr>`;}
