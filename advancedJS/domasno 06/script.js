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
    searchBar: document.getElementById("searchBar"),

}

document.getElementById("sortTable").addEventListener(`click`, () => {
    apiServices.getStudentsAsync(navigationService.url);
    })


let apiServices = {
    getStudents: function(url){
        fetch(url)
        .then(response => response.json())
        .then(students => {
            uiService.fillCity(students)
            uiService.fillAge(students)
            uiService.printStudents(students)
            document.getElementById("inputOutput").value = homeworkAssignments.femaleAverageOver24(students)
            navigationService.studentsBover2.innerHTML = homeworkAssignments.maleOnBWith2PlusAverage(students)
        })
    },
   
    getStudentsAsync: async function(url){
        let call = await fetch(url)
        let data = await call.json()
        let sortGender = await uiService.filterGender(data);
        let sortCity = await uiService.filterCity(sortGender);
        let sortGrade = await uiService.filterGrade(sortCity);
        let sortAge = await uiService.filterAge(sortGrade);
        
        await uiService.printStudents(sortAge);
        await uiService.printAverages(sortAge);
        
    }
}

let uiService = {
    
   filterGender: function(data){
       let filtered = data.filter((doc) => doc.gender != navigationService.genderSelector.value)

       return filtered
   },
 
   filterCity: function(data){
       if(navigationService.citySelector.value == "#"){
           return data
       }
     let filtered = data.filter((student) => student.city == navigationService.citySelector.value);
     return filtered     
   },
   filterGrade: function(data){
       let filtered = data.filter(student => student.averageGrade >= navigationService.gradeSelector.value)
       return filtered
   },
   filterAge: function(data){
       if(navigationService.ageSelector.value == "#"){
           return data
       }
       filtered = data.filter(student => student.age == navigationService.ageSelector.value)

       return filtered
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
printStudents: function(data){
    navigationService.output.innerHTML = "";
        if(data.length === 0){
            navigationService.output.innerHTML += `
            <tr> <td colspan=7> There are no results matching this criteria </td> </tr>` 
        } 
        data.map(student =>{
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
    })
},
averageAge: function(data){
    let totals =  data.reduce((total , age) => (total += age.age), 0)
  
   return (totals / data.length).toFixed(1)

},
averageGrade: function(data){
    let totals = data.reduce((total , grade) => (total += grade.averageGrade), 0)
    return (totals / data.length).toFixed(2)
},
printAverages: function(data){
    navigationService.averageAgeSelected.value = uiService.averageAge(data);
    navigationService.averageGradeSelected.value = uiService.averageGrade(data);
}
}


apiServices.getStudents(navigationService.url)


let homeworkAssignments = {
    femaleAverageOver24: function(data){
        let filtered = data.filter(student =>{
            if(student.age <= 24 && student.gender == "Female"){
                return student
            }
        })
        let average = filtered.reduce((total , student) => (total += student.averageGrade) , 0)
        return (average / filtered.length).toFixed(2)
    },
    maleOnBWith2PlusAverage: function(data){
        let filtered = data.filter(student => {
            if(student.firstName[0] == "B" && student.averageGrade >= 2 && student.gender == "Male"){
                return student
            }
            
        })
       result = filtered.map(student => `
       <div class="row white padding">
         <div class="col-md-2"> ${student.firstName}        </div>
         <div class="col-md-2"> ${student.lastName}          </div>
         <div class="col-md-4"> ${student.email}             </div>
         <div class="col-md-2"> ${student.gender}             </div>
         <div class="col-md-1"> ${student.averageGrade}    </div>
         <div class="col-md-1"> ${student.age}     </div>
       </div>
       `
     )
     return result
    }
}