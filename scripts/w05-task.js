/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        //step 4.2.1
        const articleElement = document.createElement("article");
        //step 4.2.2
        const templeElement = document.createElement("h3");
        templeElement.innerHTML = temple.templeName;
        //step 4.2.3
        const imageElement = document.createElement("img");
        imageElement.src = temple.imageUrl;
        imageElement.alt = temple.location;
        //step 4.2.4
        articleElement.appendChild(templeElement);
        articleElement.appendChild(imageElement);
        //step 4.2.5
        templesElement.appendChild(articleElement);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        const data = await response.json();
        templeList.push(...data);
    }
    displayTemples(templeList);
}

/* reset Function */
const reset = () => {
    const articles = templesElement.querySelectorAll("article");
    articles.forEach(article =>{
        templesElement.removeChild(article);
    })
}

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    const filter = document.querySelector("#sortBy").value;
    switch (filter) {
        case "utah":
            const utahTemples = temples.filter(temple => temple.location.includes("Utah"));
            displayTemples(utahTemples);
            break;
        case "notutah":
            const notutahTemples = temples.filter(temple => !temple.location.includes("Utah"));
            displayTemples(notutahTemples);
            break;
        case "older":
            const olderTemples = temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
            displayTemples(olderTemples);
            break;
        case "all":
            displayTemples(temples);
            break;
    }
}

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });
getTemples();