let selectorDiv = document.getElementById("selectionDiv");
let mainDIv = document.getElementById("main");
let selector = document.getElementById("selectionSelect");
let pokeName = document.getElementById("pokeName");
let pokeType = document.getElementById("pokeType");
let pokeWeight = document.getElementById("weight");
let abilities = document.getElementById("abilities");
let picAndStats = document.getElementById("picAndStats");
let starting = 0;
let nextBtn = document.getElementById("next");
let previousBtn = document.getElementById("previous");

function fillOption(prevNext){
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${prevNext}&limit=20`)
    .then(response => response.json())
    .then(pokemons => printPokemons(pokemons.results)).catch(err => console.log(err));
}

function printPokemons(pokemons) {
    selector.innerHTML = "";
    for (let pokemon of pokemons) {
      selector.innerHTML += `<option value"${pokemon.name}"> <span> ${pokemon.name} </span></option> `;
    }
  }

window.onload = fillOption(starting);

selector.addEventListener(`click` , pokemonSelect);

function pokemonSelect(){
    fetch(`https://pokeapi.co/api/v2/pokemon/${selector.value}`)
    .then(response =>  response.json() )
    .then(json => {  
        pokeType.innerText = ""; abilities.innerHTML =  `<legend>Abilities</legend>`;
        pokeName.innerText = json.name;
        for(types of json.types){
            pokeType.innerText += `  -${types.type.name}-    `
        }
        pokeWeight.innerText = `Weight: ${json.weight} LBS
         Height: ${json.height}0 cm`
        for(ability of json.abilities){
            abilities.innerHTML += `<p class="anAbility"> ${ability.ability.name} </p>`
        }
        picAndStats.innerHTML =  `<img src="${json.sprites.front_default}" class="pokePic"><img src="${json.sprites.back_default}" class="pokePic">`
    }
        )
   
}
nextBtn.addEventListener("click", function (e) {
    e.preventDefault();
    starting += 20;
    fillOption(starting);
  });
  
previousBtn.addEventListener("click", function (e) {
    e.preventDefault();
    starting -= 20;
    if(starting >= 0){
      fillOption(starting);
    }
    
  });