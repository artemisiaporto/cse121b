// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };

/*//Activity 1
//2. function with .forEach
const foodsElement = document.querySelector("#favorite-foods");
function createandAppendFoodItem(food) {
let favoriteFood = document.createElement("li");
  favoriteFood.textContent = food;
  foodsElement.appendChild(favoriteFood);
}
myInfo.favoriteFoods.forEach(createandAppendFoodItem);

//3. function with .map
const foods_Element = document.querySelector("#favorite-foods");
function mapFoodItem(food) {
  let favoriteFood = document.createElement("li");
  favoriteFood.textContent = food;
  return favoriteFood;
}
const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
foods_Element.innerHTML = foodListElements.join('');*/

/*//Activity 2
// .map in arrow function
const foodsElement = document.querySelector("#favorite-foods");
const foodListElements = myInfo.favoriteFoods.map((food) => `<li>${food}</li>`);
foodsElement.innerHTML = foodListElements.join("");*/

//Activity 3
//1.
const foodsElement = document.querySelector("#favorite-foods");
const foodsTemplate = (food) => `<li>${food}</li>`;
//2.
const placesElement = document.querySelector("#places-lived");
const placesTemplate = (place) => `<dt>${place.place}</dt><dd>${place.length}</dd>`;
//3.
function listCallback(list, templateCallback) {
  const htmlList = list.map(templateCallback);
  return htmlList.join("");
}
//4.
foodsElement.innerHTML = listCallback(myInfo.favoriteFoods,foodsTemplate);
placesElement.innerHTML = listCallback(myInfo.placesLived, placesTemplate);
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
/*let favoriteFood1 = document.createElement("li");
favoriteFood1.textContent = myInfo.favoriteFoods[0];

let favoriteFood2 = document.createElement("li");
favoriteFood2.textContent = myInfo.favoriteFoods[1];

let favoriteFood3 = document.createElement("li");
favoriteFood3.textContent = myInfo.favoriteFoods[2];
  
let favoriteFood4 = document.createElement("li");
favoriteFood4.textContent = myInfo.favoriteFoods[3];
  
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector("#favorite-foods").appendChild(favoriteFood1);
document.querySelector("#favorite-foods").appendChild(favoriteFood2);
document.querySelector("#favorite-foods").appendChild(favoriteFood3);
document.querySelector("#favorite-foods").appendChild(favoriteFood4);*/