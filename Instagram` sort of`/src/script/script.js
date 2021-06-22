
let navigationService = {
    container: document.getElementById("container"),
    loadMoreButton: document.getElementById("loadMore"),
    popUpWindow : document.getElementById("popupDiv"),
    popUpImage : document.getElementById(`popupImg`),
    popUpInfo : document.getElementById(`popuoInfo`),
    popupCaption : document.getElementById(`popupCaption`),
    popupLikes : document.getElementById(`popupLikes`)


};

let uiService = {
 firstCardNumber: 0,
 lastCardNumber: 4,
 printCards : (data , from , to) =>{
  
     for(let i = from; i < to; i++){
        navigationService.container.innerHTML += printingHelpers.cardPrinter(data[i] , i);
     };
     uiService.popUpListeners();
     uiService.closePopUpListener();
     },
     eventListeners : ()=>{
            navigationService.loadMoreButton.addEventListener(`click` , ()=>{
                uiService.firstCardNumber += 4;
                uiService.lastCardNumber += 4;
                if(uiService.lastCardNumber >= apiService.data.length){
                    uiService.lastCardNumber = apiService.data.length ;
                    navigationService.loadMoreButton.style.display = "none";
                  
                }
                uiService.printCards(apiService.data , uiService.firstCardNumber , uiService.lastCardNumber);
                
            });
         
     },
     popUpListeners : ()=>{
        for(let i = 0; i < uiService.lastCardNumber ; i++){
            document.getElementById(`image${i}`).addEventListener(`click` , ()=>{
            
               
                navigationService.popUpWindow.style.display = "flex";
                

                navigationService.popUpImage.innerHTML =  `
                
                    <div class="popupImageDiv">
                        <img src="${apiService.data[i].image}" alt="image not found" class="popUp-Image">
                    </div>
                    `;
                navigationService.popUpInfo.innerHTML = `
                <div> 
                    <img src="${apiService.data[i].profile_image}" alt="img not found" class="popupProfile">
                </div>
                <div>
                    <h3>${apiService.data[i].name}</h3>
                    <h4>${apiService.data[i].date}</h4>
                </div>
                
                   
                
                <br/>
                `;
                navigationService.popupCaption.innerHTML = `
                ${apiService.data[i].caption}
                `;
                navigationService.popupLikes.innerHTML = `
                <img src="./src/img/icons/heart.svg" alt="likes"> ${apiService.data[i].likes}
                `
            });
           
        }
     },
     closePopUpListener : ()=> {
        document.getElementById(`escapeButton`).addEventListener(`click`, ()=>{
            navigationService.popUpWindow.style.display = "none";
        })
     }

   
};

let apiService = {
    data:"",
    //works without live server
    data: TheMainData
};

let printingHelpers = {
    cardPrinter : (data , number)=>{
      
        return    `
        <div class="card">
                <div class="card-title">
                     <div class="card-image">
                        <img src="${data.profile_image}" alt="img not found" class="profileImage">
                     </div>
                     <div class="card-info">
                                    <p><b>${data.name}</b></p>
                                    <p class="date">${data.date}</p>
                     </div>
                     <div class="card-source">
                                  <a href="${data.source_link}"><img src="./src/img/icons/${data.source_type}-logo.svg" alt="" class="img-source"></a>
                    </div>
                </div>
                <div class="card-main-image" >
                                <img src="${data.image}" alt="image not found" class="main-image" id="image${number}">
                </div>
                <div class="card-description">
                                <p>${data.caption}</p>
                                
                </div>
                <div class="card-likes">
                        <img src="./src/img/icons/heart.svg" alt="likes"> ${data.likes}
                </div>    
                
            </div>
         `
        
    },
   
}








async function GetData(){
   // works only with live server
    // let data = await fetch(`./src/script/data.json`);
    // let theData = await data.json();
    // apiService.data = theData;
   

   uiService.printCards(apiService.data , uiService.firstCardNumber , uiService.lastCardNumber);
  
}

GetData();
uiService.eventListeners();


