// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url, doThis) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doThis(data);
  }
}
/*async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
async function getPokemonList(url) {
  const responsePokemonList = await fetch(url);
  if (responsePokemonList.ok) {
    const dataPokemonList = await responsePokemonList.json();
    doStuffList(dataPokemonList);
  }
}*/
function compare(first,second) {
  if (first.name > second.name) {
    return 1; // second before first
  } else if (first.name < second.name) {
    return -1; // first != second
  } else return 0; // first == second 
}
function sortPokemon(list) {
  let sortedList = list.sort(compare);
  return sortedList;
}
function doStuff(data) {
  results = data;
  const displayElement = document.querySelector("#output");
  const html = `<h2>${results.name}</h2>
                <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
  displayElement.innerHTML = html;
  console.log("first: ", results);
}
const displayListElement = document.querySelector("#outputList");

function doStuffList(data) {
  console.log(data);
  const pokeListElement = document.querySelector("#outputList");
  let pokeList = data.results;
  pokeList = sortPokemon(pokeList);
  pokeList.forEach((item) => {
    const html = `<li>${item.name}</li>`;
    pokeListElement.innerHTML += html;
  });
};
/*function doStuffList(data) {
  console.log(data);
  const pokeListElement = document.querySelector("#outputList");
  const pokeList = data.results;
  pokeList.forEach((item) => {
    const html = `<li>${item.name}</li>`;
    pokeListElement.innerHTML += html;
  });
};*/
//getPokemon(url);
getPokemon(url, doStuff);
console.log("second: ", results);
//getPokemonList(urlList);
getPokemon(urlList, doStuffList);