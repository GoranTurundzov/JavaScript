let navigationService = {
    output: document.getElementById("printResult"),
    firstName: document.getElementById("firstName"),
    lastName: document.getElementById("lastName"),
    email: document.getElementById("email"),
    ageSelector: document.getElementById("ageSelector"),
    gradeSelector: document.getElementById("gradeSelector"),
    genderSelector: document.getElementById("genderSelector"),
    sortBtn: document.getElementById("sortTable"),
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
            uiService.manageData(students);
            uiService.fillCity(students);
            uiService.fillAge(students);
            navigationService.sortBtn.addEventListener("click" , function(){
                 navigationService.output.innerHTML = ""
                for(student of students){
                    if(navigationService.citySelector.value === "#" && navigationService.ageSelector.value === "#"){
                        if (student.gender !== navigationService.genderSelector.value && student.averageGrade >= navigationService.gradeSelector.value){
                            uiService.printStudents(student)
                        }
                    }
                    else if(navigationService.citySelector.value === "#" && navigationService.ageSelector.value !== "#"){
                        if (student.gender !== navigationService.genderSelector.value && student.averageGrade >= navigationService.gradeSelector.value && navigationService.ageSelector.value == student.age){
                            console.log(navigationService.ageSelector.value)
                            uiService.printStudents(student)
                        }
                    }
                    else if(navigationService.citySelector.value !== "#" && navigationService.ageSelector.value === "#"){
                        if (student.gender !== navigationService.genderSelector.value && student.averageGrade >= navigationService.gradeSelector.value && navigationService.citySelector.value == student.city){
                            uiService.printStudents(student)
                        }
                    }
                    else if(student.gender !== navigationService.genderSelector.value && student.averageGrade >= navigationService.gradeSelector.value && navigationService.citySelector.value == student.city && navigationService.ageSelector.value == student.age){
                        uiService.printStudents(student)
                    }
                    }

                    if(navigationService.output.innerHTML == ""){
                        navigationService.output.innerHTML = `<tr> <td colspan=7 > There are no entries that match this critera </td> </tr>`
                    }


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
      console.log(cities);
      
      let singleCIties = Array.from(new Set(cities))
    
      console.log(singleCIties)
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
    }
}

apiServices.getStudents(navigationService.url);