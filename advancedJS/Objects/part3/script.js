class Animal{
    constructor(name , type , age , size ){
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }
    eat(animal){
        if(animal instanceof Animal){
        if(this.type === `herbivore` ){
           console.log( `The animal ${this.name} is a herbivore and does not eat other animals`)
        } else if(this.type !== `herbivore` && this.size > animal.size){
            this.isEaten = true ;
            console.log(` The animal ${this.name} ate ${animal.name}.`)
        }else if(this.type !== `herbivore` && this.size < animal.size){
            console.log(`The animal ${this.name} tried to eat  ${animal.name} but it was too large.`)
        }
    } else{
        console.log(`The animal ${this.name} is eating ${animal}`)
    }

}

}
let grass = `grass`;
let pig = new Animal(`Chriss P. Bacon` ,`herbivore` , 5 , 100)
console.log(pig)
let wolf = new Animal(`Wolf Mc'volf` , `carnivore` , 6 , 150 )
console.log(wolf)
let cow = new Animal(`Moosky` , `herbivore` , 3 , 300)
console.log(cow)
wolf.eat(pig)
console.log(wolf)
pig.eat(wolf)
wolf.eat(cow)
pig.eat(grass)