function Academy(name, students, subjects, start, end){
    this.name = name;
    this.students = students === undefined ? [] : students;
    this.subjects = subjects === undefined ? [] : subjects;
    this.start = new Date(start)
    this.end = new Date(end)
    this.calculateClasses = () => {
        let result = 0;
        for(let subject of this.subjects){
           result = subject.numberOfClasses
            
        }
        return result
    };
    this.numberOfClasses = this.calculateClasses();
    this.PrintStudents = () => {
        for(let student of this.students){
            console.log(`Student: ${student}`)
        }
    };
    this.PrintSubjects = () => {
        for(let subject of this.subjects){
            console.log(`Subject ${subject}`)
        }
    }


}
//

function Subject(title, isElective, academy, students,){
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students === undefined ? [] : students;
    this.overideClasses= function(classes){
       this.numberOfClasses = classes <= 3 ? console.warn(`The least u can set classes to is 4`) : classes
    }
    this.academy.subjects.push(this)
}

function Student(firstName , lastName , age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
    this.academy = function(someAcademy){
        this.academy = someAcademy;
        someAcademy.students.push(this)
       
    }
    this.startSubject = (someSubject) => {
        if (this.academy === null){
            console.warn(`Student not enroled in any academy`)
        }
        else if  ( this.academy.subjects.filter(subject => subject.title === someSubject.title) === [])  {
           console.warn(`This Subject does not exist in this academy`)
        }else if(this.currentSubject !== null){
            this.completedSubjects.push(this.currentSubject);
            this.currentSubject = someSubject;
            someSubject.students.push(this)
        }
        else{
            this.currentSubject = someSubject;
            someSubject.students.push(this);
           
        }
       
    }

}
let sedc = new Academy(`SEDC` ,[] , [] , "12/12/2021" , "12/30/2021"  );
let html = new Subject(`HTML` , false , sedc, [] );
let css = new Subject(`CSS` , true , sedc , []  );
let javaScript = new Subject(`JavaScript` , false , sedc , []  );
let sql = new Subject(`sql` , false , sedc ,[] );
let student01 = new Student(`Goran` , `Turundzov` , 27)
let student02 = new Student(`Bob` , `Bobsky` , 33)


css.overideClasses(5)
student01.academy(sedc)
student01.startSubject(css)
student01.startSubject(html)
student02.academy(sedc)
student02.startSubject(javaScript)
student02.startSubject(html)
console.log(student02)
console.log(student01)

