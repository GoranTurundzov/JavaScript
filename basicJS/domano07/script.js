let columns = document.getElementById("columns");
let rows = document.getElementById("rows");
let table = document.getElementById("table");
let btn = document.getElementById("btn");



btn.addEventListener('click' , createTable);


function createTable(){
    table.innerHTML += `<tr> <th colspan="${columns.value}">JavaScript Generated Table</th></tr>`;
    for(let i = 1; i <= rows.value; i++){
        table.innerHTML += "</tr>";
        let tds = "";
        for(let j = 1; j <= columns.value; j++){
            tds = tds + `<td> row ${i}  col ${j} </td>`;           
        }
        table.innerHTML += tds;
        table.innerHTML += `</tr>`;
    }
}