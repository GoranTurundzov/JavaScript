
let firstNameInput = document.getElementById("firstName");
let lastNameInput = document.getElementById("lastName");
let ageInput = document.getElementById("age");
let btn = document.getElementById("showList");
let div = document.getElementById("display");

function CreateStudent(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    }

function studentIs(){
    let student = new CreateStudent(firstNameInput.value, lastNameInput.value ,ageInput.value)
    console.log(Object.keys(student))
    for(let key of Object.keys(student)){
        div.innerText += ` ${key} = ${student[key]} \n `
    }
}
btn.addEventListener('click' , studentIs);
 

