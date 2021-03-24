
let navigationService = {
    temperature: document.getElementById(`temperature`),
    picture: document.getElementById(`picture`),
    additionalInfo: document.getElementById(`additionalInfo`),
    buttonDiv: document.getElementById(`buttonDiv`),
    searchBar: document.getElementById(`searchBar`),
    searchBtn: document.getElementById(`searchBtn`),
    navButtons: document.getElementsByClassName(`statusBtn`),
    cityName: document.getElementById(`cityName`),
    cuttentPage: 0,
    leftScroll: document.getElementById(`leftscroll`),
    rightScroll: document.getElementById(`rightscroll`),

    registeredListeners: ()=> {
        navigationService.searchBtn.addEventListener(`click` , async function(){
            navigationService.leftScroll.style.display = "none"
            navigationService.rightScroll.style.display = "none"
            await apiService.getData()
        });
        navigationService.searchBar.addEventListener(`keyup`, async function(event){
            if(event.keyCode === 13){
                event.preventDefault();
                navigationService.searchBtn.click();
            }
        })

    },
    buttonsListeners: (data) => {
        for(let i = 0 ; i < navigationService.buttonDiv.children.length ; i++){
            navigationService.buttonDiv.children[i].addEventListener(`click` , function(){
                navigationService.cuttentPage = i
                uiService.loadData(data , navigationService.cuttentPage)
                navigationService.colorChange()
            })
        }
        navigationService.leftScroll.addEventListener(`click`, function(){
            navigationService.buttonDiv.scrollLeft -= 70;
        });
        navigationService.rightScroll.addEventListener(`click`, function(){
            navigationService.buttonDiv.scrollLeft += 70;
        })
    },
    colorChange: ()=>{
        for(button of navigationService.navButtons){
            button.style.backgroundColor = ` rgba(253, 195, 5, 0.389)`
        }
        navigationService.navButtons[navigationService.cuttentPage].style.backgroundColor =  `rgb(20, 158, 112)`;
    }
    
    

}

let apiService =  {
    api: `https://api.openweathermap.org/data/2.5/forecast`,
    apiKey: `6fcdc04080b065827c805249b33e006c`,
    getData: async ()=> {
        try{
        let call = await fetch(`${apiService.api}?q=${navigationService.searchBar.value}&units=metric&appid=${apiService.apiKey}`)
        let response = await call.json();
        await uiService.buttonFill(response)
        await navigationService.buttonsListeners(response)
        await uiService.loadData(response , navigationService.cuttentPage = 0)
        await navigationService.colorChange()
        await uiService.buttonToggle()
    } catch (error) {
        navigationService.temperature.innerHTML = `<h3> ${error} </h3>`
        navigationService.picture.innerHTML = `<h3> ${error} </h3>`
        navigationService.additionalInfo.innerHTML = `<h3> ${error} </h3>`
    }
    }
}



let uiService = {

 loadData: (data , day) => {
    navigationService.temperature.innerHTML = `<h1>  ${helperService.timeDateConverter(data.list[day].dt)}  </h1>`
    navigationService.picture.innerHTML = ` <p class="mainTemp">${data.list[day].main.temp} °C </p> <img src="http://openweathermap.org/img/w/${data.list[day].weather[0].icon}.png" alt="weahter-icon">
    <div> <p>Feels Like </p> <p>
      ${data.list[day].main.feels_like} °C </p></div> `
    navigationService.additionalInfo.innerHTML = `
     <p>Humidity: ${data.list[day].main.humidity}% </p>
     <p>Max Temeperature:${data.list[day].main.temp_max}°C</p>
     <p>Min Temeperature:${data.list[day].main.temp_min}°C</p>
     <p>Wind Speed: ${data.list[day].wind.speed} KM/H <img src="./img/arrow.png" alt="weahter-icon"  style="width: 15px ; transform: rotate(${data.list[day].wind.deg}deg) ;"></p>`
     
 },

 buttonToggle: ()=>{
     if(navigationService.leftScroll.style.display == "none"&& navigationService.rightScroll.style.display === "none"){
        navigationService.leftScroll.style.display = "block"
        navigationService.rightScroll.style.display = "block"
     }
 },



 buttonFill: (data) => {
        navigationService.buttonDiv.innerHTML = "";
        for(button of data.list){
            navigationService.buttonDiv.innerHTML += `
            <button class="statusBtn">
                <p class="timeDate" > ${button.dt_txt} </p>
                <h4> Max: ${button.main.temp_max}°C</h4>
                <h4> Min: ${button.main.temp_min}°C</h4>
                <img src="http://openweathermap.org/img/w/${button.weather[0].icon}.png" alt="weahter-icon">
                <p class="description">${button.weather[0].description} </p>
            </button>
            `
        }
        navigationService.cityName.innerHTML = `${data.city.name} - ${data.city.country}`
    },
  
}

let helperService ={
    timeDateConverter: (unixTimeStamp)=>{
        return `${new Date(unixTimeStamp * 1000).toDateString()} \n

          ${new Date(unixTimeStamp * 1000).toLocaleTimeString()}`
    }
}







console.log()



navigationService.registeredListeners()
