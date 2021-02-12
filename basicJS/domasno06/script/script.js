let firstDiv = document.getElementById("first");
let secondDiv = document.getElementsByClassName("anotherDiv")[0];
let thirdDiv = firstDiv.nextElementSibling.nextElementSibling;
let div1H1 = firstDiv.firstElementChild;
let div1P = firstDiv.lastElementChild;
let div2P = secondDiv.firstElementChild;
let div2text = secondDiv.lastElementChild;
let div3H1 = thirdDiv.firstElementChild;
let div3H3 = document.getElementsByTagName("h3")[0];
let button1 = document.getElementById("buttonChange");
let button2 = document.getElementById("changeBack");

function homeworkChange1(){
    firstDiv.style.backgroundColor = "red";
    secondDiv.style.backgroundColor = "blue";
    thirdDiv.style.backgroundColor = "green";
    div1H1.innerText = "Nov Naslov";
    div1P.innerText = "So nov naslov odi nov paragraf";
    div2P.innerText = "PART 2 OF THE HOMEWORK HERE!";
    div2text.innerHTML = `
    <h1 style="color: chartreuse;">HOMEWORK 2</h1>
    <a href="./homeworkpart2.html">
    <button  style="background-color: darkorchid";>TAKE ME TO HOMEWORK 2</button></a> 
    <h2 style="color: pink;>Naslovi</h2>`;
    div3H1.innerText = `Sir yes sir, changed it is!`;
    div3H3.innerText += ` Okey sir`
}
function reloadScreen(){
    location.reload();
}
button1.addEventListener("click" , homeworkChange1);
button2.addEventListener("click" , reloadScreen);






