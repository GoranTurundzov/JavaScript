class Animal{
    constructor(name , type , age , size ){
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }
    set type(input){
        input = input.toLowerCase();
        if(input !== "carnivore" && input !== "herbivore" && input !== "omnivore"){
            throw new Error(`There is no such type!`)
        } else {
            this._type = input
        }
    }
    get type (){
        return this._type;
    }
    
    eat(animal){
        if(animal instanceof Animal){
            if(animal.isEaten === true){return `This animal is already eaten`}
        if(this._type === `herbivore` ){
           return  `The animal ${this.name} is a herbivore and does not eat other animals`
        } else if(this._type !== `herbivore` && this.size > animal.size ){
            animal.isEaten = true ;
           return` The animal ${this.name} ate ${animal.name}.`
        }else if(this.type !== `herbivore` && (this.size * 2) <= animal.size){
            return `The animal ${this.name} tried to eat  ${animal.name} but it was too large.`
        }
    } else{
        return `The animal ${this.name} is eating ${animal}`
    }

}

}
let grass = `grass`;
let pig = new Animal(`Chriss P. Bacon` ,`herbivore` , 5 , 100)
let wolf = new Animal(`Wolf Mc'volf` , `carnivore` , 6 , 150 )
let cow = new Animal(`Moosky` , `herbivore` , 3 , 300)
console.log(pig)
console.log(wolf)
console.log(cow)
console.log(wolf.eat(pig))
console.log(wolf)
console.log(pig.eat(wolf))
console.log(wolf.eat(cow))
console.log(pig)
console.log(pig.eat(grass))

let tree = new Animal(`A tree` , `tree` , 100 , 500)