let navService = {

    navItems: document.getElementsByClassName("nav-item"),
    navSearch: document.getElementById("citySearchInput"),
    searchBtn: document.getElementById("citySearchBtn"),
    pages: document.getElementById("pages").children,
    tempSort: document.getElementById("tempSort"),
    loadingAni: document.getElementById("loader"),
    minuteCalls: 0,
    monthlyCalls: 0,
    minute: new Date().getMinutes(),
    month: new Date().getMonth(),
    allowLoad: true,
    activateItem: function(item) {
        for (let navItem of this.navItems) {
            navItem.classList.remove("active")
        }
        item.classList.add("active")
    },
    showPage: function(page) {
        for (let pageElement of this.pages) {
            pageElement.style.display = "none"
        }
        page.style.display = "block"
    },
    registerNavListeners: function() {
        for (let i = 0; i < this.navItems.length; i++) {
            this.navItems[i].addEventListener("click", function() {
                navService.activateItem(this)
                navService.showPage(navService.pages[i])
            })
        }
        this.searchBtn.addEventListener("click",async function() {
            await navService.limitCalls(10 , 1000000);
            if(navService.allowLoad === true){
            await weatherService.getDataAsync()
            }
        });
       
      

    },
    limitCalls: function(minutley = 0, monthly = 0){
       if(navService.minuteCalls >= minutley && navService.minute ===new Date().getMinutes()){
           navService.allowLoad = false;
           throw `CALLS PER MINUTE EXCEDED`
       }
       else if(navService.minute !== new Date().getMinutes())
       {
        navService.allowLoad = true;
           navService.minuteCalls = 1;
           navService.minute = new Date().getMinutes();
       }
       else{
           navService.minuteCalls++
       }

       if(navService.monthlyCalls > monthly && navService.month === new Date().getMonth()){
        navService.allowLoad = false;
        throw `MONTHLY CALLS EXCEDED`
       } else if ( navService.month !== new Date().getMonth()){
        navService.allowLoad = true;
           navService.month = new Date().getMonth();
           navService.monthlyCalls = 1;
       }
       else{
           navService.monthlyCalls++
       }
    
    },
    loaderOff: function(){
        setTimeout(() =>{ navService.loadingAni.style.display = "none"} , 400)
    },
      
   
}

let weatherService = {
    apiKey: "6fcdc04080b065827c805249b33e006c",
    city: "skopje",
    apiUrl: "https://api.openweathermap.org/data/2.5/forecast",
    getDataAsync:async function() {
        if(navService.navSearch.value !== ""){
            weatherService.city = navService.navSearch.value}
        let data = await fetch(`${this.apiUrl}?q=${this.city}&units=metric&appid=${this.apiKey}`)
        navService.loadingAni.style.display = "block"
        let response = await data.json()
        console.log(response)
        await uiService.loadHourlyTable(response);
        await uiService.loadStatistics(response);
        await navService.loaderOff()
        navService.tempSort.addEventListener(`click` ,function(){
            navService.sortTemperature(response)
        })
    },
    aggregateStatistics: function(data){
        let temperatureSum = 0;
        let highestTemperature = data.list[0];
        let lowestTemperature = data.list[0];
        let humiditySum = 0;
        let higestHumidity = data.list[0]
        let lowestHumidity = data.list[0]

        for(let reading of data.list){
            temperatureSum += reading.main.temp;
            humiditySum += reading.main.temp;
            
            if(highestTemperature.main.temp < reading.main.temp) highestTemperature = reading
            if(lowestTemperature.main.temp > reading.main.temp) lowestTemperature = reading
            if(higestHumidity.main.humidity < reading.main.humidity) higestHumidity = reading
            if(lowestHumidity.main.humidity < reading.main.humidity) lowestHumidity = reading
           
        }

        return{
            temperature:{
                highest: highestTemperature.main.temp,
                average: temperatureSum / data.list.length,
                lowest: lowestTemperature.main.temp
            },
            humidity:{
                highest: higestHumidity.main.humidity,
                average: humiditySum / data.list.length,
                lowest: lowestHumidity.main.humidity
            },
            warmestTime: helperService.unixTimeStampToDate(highestTemperature.dt),
            coldestTime: helperService.unixTimeStampToDate(lowestTemperature.dt),
            sunrise: helperService.unixTimeStampToDate(data.city.sunrise),
            sunset: helperService.unixTimeStampToDate(data.city.sunset)
        }
    }

}

let uiService = {
    statisticResult: document.getElementById("statisticsResult"),
    tableResult: document.getElementById("tableResult"),
    hdCity: document.getElementById("hourly"),
    stCity: document.getElementById("statistics"),
    loadStatistics: function(data){
        let statisticsData = weatherService.aggregateStatistics(data);
        this.statisticResult.innerHTML = `
            <div class="row">
                <div class="col-md-6"> MAX TEMP: ${statisticsData.temperature.highest}C</div>
                <div class="col-md-6"> MAX HUMD:  ${statisticsData.humidity.highest}%</div>
            </div>   
            <div class="row">
                <div class="col-md-6"> AVG TEMP: C ${statisticsData.temperature.average}</div>
                <div class="col-md-6"> AVG HUMD: ${statisticsData.humidity.average}%</div>
            </div>   
            <div class="row">
                
                <div class="col-md-6"> LOW TEMP: C ${statisticsData.temperature.lowest}</div>
                <div class="col-md-6"> LOW HUMD: ${statisticsData.humidity.lowest}%</div>
            </div>   
            <h3>Warmest time of the following period    ${statisticsData.warmestTime} </h3>
            <h3>Coldest time of the following period  ${statisticsData.coldestTime}</h3>
                <h4> SUNRISE: ${statisticsData.sunrise}</h4>
                <h4> SUNSET: ${statisticsData.sunset}</h4>
            
            
        `
    },
    showFrom: 0,
    showTo: 9,
    page: 1,
    loadHourlyTable: function(data) {
        let pages = data.list.length / 10
        this.hdCity.innerText =`- ${data.city.name}`;
        this.stCity.innerText =`- ${data.city.name}`
        this.tableResult.innerHTML = ""
        for (let i = uiService.showFrom; i <= uiService.showTo ; i++) {
            this.tableResult.innerHTML += `
                <div class="row">
                    <div class="col-md-2">
                        <img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png" alt="weahter-icon">
                    </div>
                    <div class="col-md-2">${data.list[i].weather[0].description}</div>
                    <div class="col-md-2">${helperService.unixTimeStampToDate(data.list[i].dt)}</div>
                    <div class="col-md-2">${data.list[i].main.temp} C (Real-feel: ${data.list[i].main.feels_like} C)</div>
                    <div class="col-md-2">${data.list[i].main.humidity}</div>
                    <div class="col-md-2">${data.list[i].wind.speed}</div>
                </div>
            `;
           
        }
        this.tableResult.innerHTML += `<div class="row"><div class="col-md-2"></div><div class="col-md-3"><button id="prev" class="btn-lg"> PREVIOUS </button> </div> <div class="col-md-2">${uiService.page} of ${pages}</div> <div class="col-md-3"><button id="next" class="btn-lg"> NEXT </button></div><div class="col-md-2"></div></div>`
        if(uiService.showFrom >= 0){
            document.getElementById("prev").disabled = true;
        }
        document.getElementById("prev").addEventListener(`click` , function(){ 
           
            uiService.showFrom =  uiService.showFrom - 10;
            uiService.showTo = uiService.showTo- 10;
            uiService.page--
            uiService.loadHourlyTable(data)
            if(uiService.showFrom === 0){
                document.getElementById("prev").disabled = true;
            } else{
                document.getElementById("prev").disabled = false;
            }
            if(uiService.showTo === data.list.length - 1){
                document.getElementById("next").disabled = true;
            } else {
                document.getElementById("next").disabled = false;
            }
        }) 
        document.getElementById("next").addEventListener(`click` ,function(){
            if(uiService.showTo === data.list.length - 1){
                document.getElementById("prev").disabled = true;
            }
            uiService.page++
            uiService.showFrom = uiService.showFrom + 10;
            uiService.showTo = uiService.showTo + 10;
            uiService.loadHourlyTable(data)
            if(uiService.showFrom === 0){
                document.getElementById("prev").disabled = true;
            } else{
                document.getElementById("prev").disabled = false;
            }
            if(uiService.showTo === data.list.length - 1){
                document.getElementById("next").disabled = true;
            } else {
                document.getElementById("next").disabled = false;
            }
          })
          

    }
    

}

let helperService = {
    unixTimeStampToDate: function(unixTimeStamp) {
        return `${new Date(unixTimeStamp * 1000).toDateString()} \n  ${new Date(unixTimeStamp * 1000).toTimeString()}`
    },
}


navService.registerNavListeners()
