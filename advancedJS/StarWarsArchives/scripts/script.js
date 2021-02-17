let navigationService = {
    peopleBtn: document.getElementById("peopleBtn"),
    shipBtn: document.getElementById("shipsBtn"),
    planetBtn: document.getElementById("planetBtn"),
    nextBtn: document.getElementById("nextBtn"),
    previousBtn: document.getElementById("prevBtn"),
    showingPage: document.getElementById("whatPage"),
    currentPage: 1,
    pageType: "",
    calls: 0,
    day: new Date().getDay(),
    limiter: false,
    direction: false,
    
    apiCallLimiter: function(limit = 10){   
        if(navigationService.calls < limit && navigationService.day === new Date().getDay()){
           navigationService.calls++
        }
        else if(navigationService.day !== new Date().getDay()){
            navigationService.day = new Date().getDay();
           navigationService.calls = 0;
        }
        else{
            navigationService.limiter = true;
            alert(`you have exceded the calls for today`);
            window.location.href = "./view/tomorow.html";
        }
    },

    registerListeners: function(){
        this.peopleBtn.addEventListener(`click` , function(){
            if(navigationService.pageType === "people") return ;
            uiService.toggleLoader(true);
            startWarsApiService.getPeople(navigationService.currentPage = 1)
            navigationService.pageType = "people"
        })
        this.shipBtn.addEventListener(`click` , function(){
            if(navigationService.pageType === "ships") return ;
            uiService.toggleLoader(true);
            startWarsApiService.getShips(1);
            navigationService.currentPage = 1
            navigationService.pageType = "ships"
        })
        this.planetBtn.addEventListener(`click` , function(){
            if(navigationService === "planets") return;
            uiService.toggleLoader(true);
            startWarsApiService.getPlanets(navigationService.currentPage = 1);
            navigationService.pageType = "planets"
        })

        this.nextBtn.addEventListener(`click` , navigationService.nextPage);
        this.previousBtn.addEventListener(`click` , navigationService.previousPage)

    },
    nextPage: function(){
        navigationService.currentPage++;
        uiService.toggleLoader(true);
        if(navigationService.pageType === "people"){
        startWarsApiService.getPeople(navigationService.currentPage);
        } else if (navigationService.pageType === "ships"){
            startWarsApiService.getShips(navigationService.currentPage);
        } else {
            startWarsApiService.getPlanets(navigationService.currentPage);
        }
    },
    previousPage: function(){
        navigationService.currentPage--;
        uiService.toggleLoader(true);
        if(navigationService.pageType === "people"){
        startWarsApiService.getPeople(navigationService.currentPage);
        } else if (navigationService.pageType === "ships") {
            startWarsApiService.getShips(navigationService.currentPage);
        } else {
            startWarsApiService.getPlanets(navigationService.currentPage);
        }
    },
    navButtonsCheck: function(response){
        if(response.next === null){
            this.nextBtn.style.display = "none"
        } else {
            this.nextBtn.style.display = "block"
        }

        if(response.previous === null){
            this.previousBtn.style.display = "none"
        } else {
            this.previousBtn.style.display = "block"
        }
    },
    
       
     
  
};


let startWarsApiService = {
    url: "https://swapi.dev/api/",
    getPeople: function(page){
        if(navigationService.limiter === true) return;
        let peopleUrl = `${this.url}people/?page=${page}`;
        fetch(peopleUrl)
        .then(response => response.json())
        .then(data => {
            uiService.loadPeoplePage(data.results);
               navigationService.navButtonsCheck(data);
              whatPage.innerHTML = page;
        })
        .catch(error => uiService.showError())
        .finally(response => {uiService.toggleLoader(false)})

        navigationService.apiCallLimiter()
    },
    
    
    getShips: function(page){
        if(navigationService.limiter === true) return;
        let starShipUrl = `${this.url}starships/?page=${page}`;
        fetch(starShipUrl)
        .then(response => response.json())
        .then(data => {
            uiService.loadShipsPage(data.results);
               navigationService.navButtonsCheck(data)
               whatPage.innerHTML = page;
        })
        .catch(error => uiService.showError())
        .finally(response => {uiService.toggleLoader(false)})

        navigationService.apiCallLimiter()
        },
        
    getPlanets: function(page){
        if(navigationService.limiter === true) return;
        let planetsUrl = `${this.url}planets/?page=${page}`;
        fetch(planetsUrl)
        .then(response => response.json())
        .then(data => {
            uiService.loadPlanetsPage(data.results);
               navigationService.navButtonsCheck(data)
               whatPage.innerHTML = page;
        })
        .catch(error => uiService.showError())
        .finally(response => {uiService.toggleLoader(false)})
        navigationService.apiCallLimiter()
    },     
    } 
        
        
let uiService = {
    resultElement: document.getElementById("result"),
    loader: document.getElementById("loader"),
    loadPeoplePage: function(data) {
        this.resultElement.innerHTML = "";
        this.resultElement.innerHTML += `
            <div class="row yellow padding">
                <div class="col-md-3" id="sortNamePeople">Name</div>
                <div class="col-md-2" id="sortHeightPeople">Height</div>
                <div class="col-md-2" id="sortMassPeople">Mass</div>
                <div class="col-md-2" id="sortGenderPeople">Gender</div>
                <div class="col-md-2" id="sortBirthYear">Birth Year</div>
                <div class="col-md-1" id="sortFilms">Films</div>
            </div>
        `;
        data.map(person => {
            this.resultElement.innerHTML += `
            <div class="row white padding">
                <div class="col-md-3">${person.name}</div>
                <div class="col-md-2">${person.height}</div>
                <div class="col-md-2">${person.mass}</div>
                <div class="col-md-2">${person.gender}</div>
                <div class="col-md-2">${person.birth_year}</div>
                <div class="col-md-1">${person.films.length}</div>
            </div>
            `;
        })
                 document.getElementById("sortNamePeople").addEventListener("click", function(){   
                     
                     if(navigationService.direction === false){
                         data.sort((a,b) => {
                             navigationService.direction = true;
                            if(a.name < b.name) return -1;
                            if(a.name > b.name) return 1;
                           
                        });
                        uiService.loadPeoplePage(data);
                        
                    } else if (navigationService.direction === true) {
                        data.sort((a,b) => {
                            navigationService.direction = false;
                            if(a.name > b.name) return -1;
                            if(a.name < b.name) return 1;
                           
                            
                    });
                    uiService.loadPeoplePage(data);
                }

                 });
                
             
              
                 
                

    },
    
    loadShipsPage: function(data) {
        this.resultElement.innerHTML = "";
        this.resultElement.innerHTML += `
            <div class="row yellow padding">
                <div class="col-md-3" id="sortShips"> Name </div>
                <div class="col-md-2">Model</div>
                <div class="col-md-2">Manufacturer</div>
                <div class="col-md-2">Cost</div>
                <div class="col-md-2">Capacity</div>
                <div class="col-md-1">Class</div>
            </div>
        `;
        data.map(ship =>{
            this.resultElement.innerHTML += `
            <div class="row white padding">
                <div class="col-md-3">${ship.name}</div>
                <div class="col-md-2">${ship.model}</div>
                <div class="col-md-2">${ship.manufacturer}</div>
                <div class="col-md-2">${ship.cost_in_credits}</div>
                <div class="col-md-2">${ship.passengers}</div>
                <div class="col-md-1">${ship.starship_class}</div>
            </div>
            `;
        })
        
        document.getElementById("sortShips").addEventListener("click", function(){
            if(navigationService.direction === false){
                data.sort((a,b) => {
                    navigationService.direction = true;
                   if(a.name < b.name) return -1;
                   if(a.name > b.name) return 1;
                  
               });
               uiService.loadPeoplePage(data);
               
           } else if (navigationService.direction === true) {
               data.sort((a,b) => {
                   navigationService.direction = false;
                   if(a.name > b.name) return -1;
                   if(a.name < b.name) return 1;
                  
                   
           });
           uiService.loadPeoplePage(data);
       }
           
        });
    },
    loadPlanetsPage: function(data) {
        this.resultElement.innerHTML = "";
        this.resultElement.innerHTML += `
            <div class="row yellow padding">
                <div class="col-md-3" id="sortPlanets">Name</div>
                <div class="col-md-2">Population</div>
                <div class="col-md-2">Climate</div>
                <div class="col-md-2">Diameter</div>
                <div class="col-md-2">Gravity</div>
                <div class="col-md-1">Terrain</div>
            </div>
        `;

        data.map(planet =>{
            this.resultElement.innerHTML += `
            <div class="row white padding">
                <div class="col-md-3">${planet.name}</div>
                <div class="col-md-2">${planet.population}</div>
                <div class="col-md-2">${planet.climate}</div>
                <div class="col-md-2">${planet.diameter}</div>
                <div class="col-md-2">${planet.gravity}</div>
                <div class="col-md-1">${planet.terrain}</div>
            </div>
            `;
        })
        document.getElementById("sortPlanets").addEventListener("click", function(){
            if(navigationService.direction === false){
                data.sort((a,b) => { 
                    navigationService.direction = true;
                   if(a.name < b.name) return -1;
                   if(a.name > b.name) return 1;
                  
               });
               uiService.loadPeoplePage(data);
               
           } else if (navigationService.direction === true) {
               data.sort((a,b) => {
                   navigationService.direction = false;
                   if(a.name > b.name) return -1;
                   if(a.name < b.name) return 1;
                  
                   
           });
           uiService.loadPeoplePage(data);
       }
        });
    },
    toggleLoader: function(toggle){
        if(toggle) this.loader.style.display = "block";
        else  this.loader.style.display = "none";
    },
    showError: function(){
        alert(`The force is weak with you`)
    
    }




};


navigationService.registerListeners()
