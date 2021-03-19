function Person(firstName , lastName , age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = () => {
        console.log(`Hello my name is ${this.firstName} ${this.lastName} and I am ${this.age} old`)
    }
}

function Student(firstName , lastName , age ,academyName , studentID ){
    Object.setPrototypeOf(this , new Person(firstName , lastName , age))
    this.academyName = academyName === undefined ? `SEDC` : academyName === "" ? `SEDC` : academyName
    this.studentID =studentID;
    this.study = () => {
        return (`The student ${this.firstName} is studying in the ${academyName}`)
    }
    this.attendingAcademy = () => {
        return this.academyName
    }
}

let goran = new Student(`Goran` , `Turundzov` ,`27` , `SEDC` , `002`)
let zoran = new Student(`Zoran` , `Bratmunagoran` , 50 , `SEDC` , `010`)
console.log(goran.study())
console.log(zoran.study())


//////////////////////////// EXERCISE 2 /////////////////

function DesignStudent(firstName , lastName , age , studentID , isStudentOfTheMonth){
    Object.setPrototypeOf(this , new Student(firstName , lastName , age ,academyName = `SEDC-Design`, studentID ))
    this.isStudentOfTheMonth = isStudentOfTheMonth;
    this.attendAdobeExam = () => {
        return `The student ${this.firstName} is doing an adobe exam!`
    }
}

function CodeStudent(firstName , lastName , age , studentID){
    Object.setPrototypeOf(this , new Student(firstName , lastName , age ,academyName = `SEDC-Code`, studentID))
    this.hasIndividualProject = false;
    this.hasGroupProject = false;
    this.doProject = (type) => {
        if(type === `individual`){this.hasIndividualProject = true; }
        else if (type === `group`){this.hasGroupProject = true}
        else if(type === `none`){}
        else if(type === `both`){
            this.hasIndividualProject = true;
            this.hasGroupProject = true;
        }
        
        if(this.hasGroupProject === true && this.hasIndividualProject === false){
            return `Student ${this.firstName} has a Group project`
        }else if(this.hasGroupProject === false && this.hasIndividualProject === true){
            return `Student ${this.firstName} has an Individual project`
        }else if(this.hasGroupProject === true && this.hasIndividualProject === true){
            return `The student ${this.firstName} has both group and individual project`
        }else{
            return `The student ${firstName} has no projects whatsoever. Please assign the student a project`
        }
    }
}



function NetworkStudent(firstName , lastName , age ,  studentID , academyPart){
    Object.setPrototypeOf(this, new Student(firstName , lastName , age ,academyName = `Sedc-Network` , studentID))
    this.academyPart = academyPart;
    this.attendCiscoExam = () => {
        return `The student ${this.firstName} is doing a Cisco exam!`
    }
}

let vanessa = new DesignStudent(`Vanessa` , `Vanesovska` , 21 , `015`)
let vilipce = new CodeStudent(`Vilipce` , `Vilipkovski` , 40  , `001`)
let eugene = new NetworkStudent(`Eugene` , `Smith` , 30 , `110` , 5)
console.log(vilipce)
console.log(vilipce.doProject(`none`))
console.log(vanessa)
console.log(vanessa.attendAdobeExam())
console.log(eugene)
console.log(eugene.attendCiscoExam())
