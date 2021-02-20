let navigationService = {
    output: document.getElementById("printResult"),
    firstName: document.getElementById("firstName"),
    lastName: document.getElementById("lastName"),
    email: document.getElementById("email"),
    ageSelector: document.getElementById("ageSelector"),
    gradeSelector: document.getElementById("gradeSelector"),
    genderSelector: document.getElementById("genderSelector"),
    sortBtn: document.getElementById("sortTable"),
    studentsBover2: document.getElementById("maleStudents"),
    averageAgeSelected: document.getElementById("averageAgeShown"),
    averageGradeSelected: document.getElementById("averageGradeSown"),
    citySelector: document.getElementById("citySelect"),
    url: "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json",
    student: [],

}


let apiServices = {
   
    getStudents: function(url){
        fetch(url)
        .then(data => data.json())
        .then(students => {
            // uiService.printStudents(student)
            uiService.malesStatStartWithBandAverageGrareOver2(students)
            uiService.femaleOver24Average(students)
            uiService.manageData(students);
            uiService.fillCity(students);
            uiService.fillAge(students);
            uiService.clearAverage()
            students.map(student => uiService.fillAverages(student))
            uiService.averageGrdeAge()
            navigationService.sortBtn.addEventListener("click" , function(){
                uiService.clearAverage()
                
                 navigationService.output.innerHTML = ""
                students.map(student => {
                    
                    if(navigationService.citySelector.value === "#" && navigationService.ageSelector.value === "#"){
                        if (student.gender !== navigationService.genderSelector.value && student.averageGrade >= navigationService.gradeSelector.value){
                            uiService.printStudents(student)
                            uiService.fillAverages(student)
                        }
                    }
                    else if(navigationService.citySelector.value === "#" && navigationService.ageSelector.value !== "#"){
                        if (student.gender !== navigationService.genderSelector.value && student.averageGrade >= navigationService.gradeSelector.value && navigationService.ageSelector.value == student.age){
                            uiService.printStudents(student)
                            uiService.fillAverages(student)

                        }
                    }
                    else if(navigationService.citySelector.value !== "#" && navigationService.ageSelector.value === "#"){
                        if (student.gender !== navigationService.genderSelector.value && student.averageGrade >= navigationService.gradeSelector.value && navigationService.citySelector.value == student.city){
                            uiService.printStudents(student) 
                            uiService.fillAverages(student)
                        }
                    }
                    else if(student.gender !== navigationService.genderSelector.value && student.averageGrade >= navigationService.gradeSelector.value && navigationService.citySelector.value == student.city && navigationService.ageSelector.value == student.age){
                        uiService.printStudents(student)
                        uiService.averageAge += student.age;
                        uiService.averageGrade += student.averageGrade;
                        uiService.students++;
                       
                    }
                    
                })
                
                    
                    if(navigationService.output.innerHTML == ""){
                        navigationService.output.innerHTML = `<tr> <td colspan=7 > There are no entries that match this critera </td> </tr>`
                    }
                    uiService.averageGrdeAge()
                    
                })
                
             
           
        })
    }
}

let uiService = {
    printStudents: function(student){
            
            navigationService.output.innerHTML +=       `
            <tr>
                <td> ${student.firstName} </td>
                <td> ${student.lastName}</td>
                <td> ${student.email} </td>
                <td> ${student.gender} </td>
                <td> ${student.city} </td>
                <td> ${student.averageGrade} </td>
                <td> ${student.age} </td>
            </tr>`
        
    },
    fillCity: function(data){
        let cities = [];
        
      for(city of data){
          cities.push(city.city)
      }
      cities.sort((a, b) => {if(a < b ) return -1})
     
      
      let singleCIties = Array.from(new Set(cities))
    
   
      for(value of singleCIties){
          navigationService.citySelector.innerHTML += `<option value="${value}"> ${value} </option>`
      }
    },
    fillAge: function(data){
        let ages = [];
        for(age of data){
            ages.push(age.age)
        }
        let singleAges = Array.from(new Set(ages));
        singleAges.sort((a , b ) => a - b);
        for(age of singleAges){
            navigationService.ageSelector.innerHTML += `<option value="${age}" > ${age} </option>`
        }

    },
    manageData: function(data){
        data.map(student => uiService.printStudents(student))
       
    },
    femaleOver24Average: function(data){
        let result = data
        .filter(student => student.age >= 24)
        .filter(student => student.gender === "Female")
        .map(student => student.averageGrade )
        let totalGrades = result.reduce((sum , number) => (sum += number))
        let average = totalGrades / result.length
        document.getElementById("inputOutput").value = average;
    },
    malesStatStartWithBandAverageGrareOver2: function(data){
        navigationService.studentsBover2.innerHTML = "";
        let result = data
        .filter(student => student.averageGrade >= 2)
        .filter(student => student.firstName[0] == "B" )
        .map(student => `
          <div class="row white padding">
            <div class="col-md-2"> ${student.firstName}        </div>
            <div class="col-md-2"> ${student.lastName}          </div>
            <div class="col-md-2"> ${student.email}             </div>
            <div class="col-md-2"> ${student.averageGrade}    </div>
            <div class="col-md-2"> ${student.age}     </div>
          </div>
          `
        )
        navigationService.studentsBover2.innerHTML = result
    },
    averageAge: 0,
    averageGrade: 0,
    students: 0,
    fillAverages: function(student){
        uiService.averageAge += student.age;
        uiService.averageGrade += student.averageGrade;
        uiService.students++;
    },
    clearAverage: function(){
    uiService.averageAge = 0;
    uiService.averageGrade = 0;
    uiService.students = 0;
    },
    averageGrdeAge: function(){
        let averageAge = uiService.averageAge / uiService.students;
        let averageGrade = uiService.averageGrade / uiService.students;
        navigationService.averageAgeSelected.value = averageAge ;
        navigationService.averageGradeSelected.value = averageGrade ;
     
    }
    

}

apiServices.getStudents(navigationService.url);
uiService.femaleOver24Average

