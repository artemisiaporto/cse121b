/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Artemísia Renata Porto",
    photo: "images/myphoto.jpg",
    favoriteFoods: [
        "sushi",
        "kiwi",
        "chocolate",
        "grape"
    ],
    hobbies: [
        "play MOBA games",
        "roller skating",
        "watch k-dramas"
    ],
    placesLived: [

    ],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Jundiaí, SP",
        length: "10 months"
    });
myProfile.placesLived.push(
    {
        place: "Guarulhos, SP",
        length: "2 years"
    });
myProfile.placesLived.push(
    {
        place: "São Paulo, SP",
        length: "4 years"
    });

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").append(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").append(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach((local) => {
    let dt = document.createElement("dt");
    dt.textContent = local.place;
    let dd = document.createElement("dd");
    dd.textContent = local.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});