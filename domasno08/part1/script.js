let aName = document.getElementById("animalName");
let kind = document.getElementById("kind");
let btn = document.getElementById("sayIt");
let output = document.getElementById("output");

function Animal(name , kind){
    this.name = name;
    this.kind = kind;
    this.speak = function(){
        if(kind === "dog"){
            return `Woof, I am a ${this.kind} and my name is ${this.name}, very woof to meet you`;
        }
        else if(kind == "cat"){
            return `Mewllow, I am a ${this.kind} and my name is ${this.name} but you can call me pspspsps`;
        }
        else if(kind == "mouse"){
            return `Don't be afraid. I am a ${this.kind} and my name is ${this.name}`;
        }
        else if(kind == "pig"){
            return `I am a ${this.kind} and my name is ${this.name} oink`;
        }
        else {
            return ` ${this.name}select an animal`;
        }
    }
}


btn.addEventListener(`click`, function(){
    if(aName.value !== ""){
    let newHello = new Animal(aName.value , kind.value);
        output.innerText = newHello.speak();
} })
