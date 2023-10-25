//Urls with the information of the first generation of Pokémons
let url_Pokemon_Base = "https://pokeapi.co/api/v2/pokemon/"
let url_Pokemon_Final = null;
let results = null;

//Function that get the id of a Pokémon
function getID (url) {
    let pokeID = Number(document.querySelector('#pokemon').value);
    url_Pokemon_Final = url_Pokemon_Base+pokeID;
    console.log(url_Pokemon_Final);
    return url_Pokemon_Final;
}

//Function that get the Pokémon information
async function getPokemon(url, doThis) {
    const response = await fetch(url);
    //if the fetch was successful do
    if (response.ok) {
      const data = await response.json();
      doThis(data);
    }
}

function getPokeInfo(data) {
    //get Pokémon Name
    results = data;
    const nameElement = document.querySelector("#name");
    const htmlName = `<h2>${results.name}</h2>`;
    nameElement.innerHTML = htmlName;

    //get Pokémon Image
    const imageElement = document.querySelector("#image");
    const htmlImage = `<img src="${results.sprites.front_default}" alt="Pokémon Image of ${results.name}">`;
    imageElement.innerHTML = htmlImage;

    //get Pokémon Type
    const typeListElement = document.querySelector("#type");
    typeListElement.innerHTML = "";
    let typeList = results.types;
    typeList.forEach((item) => {
        const html = `<li>${item.type.name}</li>`;
        typeListElement.innerHTML += html;
    });

    //get Pokémon ability
    const abilityListElement = document.querySelector("#ability");
    abilityListElement.innerHTML = "";
    let abilityList = results.abilities;
    abilityList.forEach((item) => {
        const html = `<li>${item.ability.name}</li>`;
        abilityListElement.innerHTML += html;
    });
    console.log("info", results);
}

document.querySelector('#find-pokemon').addEventListener('click', getID);
document.querySelector('#find-pokemon').addEventListener('click', function() {getPokemon(url_Pokemon_Final, getPokeInfo)});