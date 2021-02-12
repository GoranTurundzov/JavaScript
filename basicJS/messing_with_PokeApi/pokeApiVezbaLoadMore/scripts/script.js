let selectorDiv = document.getElementById("selectionDiv");
let mainDIv = document.getElementById("main");
let selector = document.getElementById("selectionSelect");
let pokeName = document.getElementById("pokeName");
let pokeType = document.getElementById("pokeType");
let pokeWeight = document.getElementById("weight");
let abilities = document.getElementById("abilities");
let picAndStats = document.getElementById("picAndStats");
let starting = 20;
let searchBar = document.getElementById("searchBar");

function fillOption(loaded){
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset0&limit=${loaded}`)
    .then(response => response.json())
    .then(pokemons => printPokemons(pokemons.results))
    .catch(err => console.log(err));
}

function printPokemons(pokemons) {
    selector.innerHTML = "";
    for (let pokemon of pokemons) {
      selector.innerHTML += `<option value"${pokemon.name}">  ${pokemon.name} </option> `;
    }
  }

window.onload = fillOption(starting);

document.getElementById("loadMore").addEventListener(`click` , function(e){
    e.preventDefault()
    starting += 20;
    fillOption(starting);
    console.log(starting)
});


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
        picAndStats.innerHTML =  `<img src="${json.sprites.front_default}" class="pokePic" alt="Front"><img src="${json.sprites.back_default}" class="pokePic" alt="Back">`
    }
        )
}

document.getElementById("loadMore").addEventListener(`select` , function(){
    starting =+ 20;
    fillOption(starting);
});

// function filter() {
//     let keyword = searchBar.value;
   
//     for (let i = 0; i < selector.length; i++) {
//         let txt = selector.options[i].text;
//         if (txt.substring(0, keyword.length).toLowerCase() !== keyword.toLowerCase() && keyword.trim() !== "") {
//             selector.options[i].style.display = 'none';
//         } else {
//             selector.options[i].style.display = 'list-item';
//         }
//     }
// }

// searchBar.addEventListener(`keyup` ,filter)