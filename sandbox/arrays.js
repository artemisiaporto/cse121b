//Activity 1 - Map
const firstArr = ["one", "two", "three"];
const listHtml = firstArr.map((array) => `<li>${array}</li>`);
console.log(listHtml);
document.getElementById("myList").innerHTML = listHtml.join('');

//Activity 2 - Map
const letterGrades = ['A', 'B', 'A'];
function convertLettertoGPA(letter) {
    let gpa = '';
    if (letter === 'A') {
        gpa = 4;
    } else if (letter === 'B') {
        gpa = 3;
    }
    return gpa;
}
const pointsGPA = letterGrades.map(convertLettertoGPA);
console.log(pointsGPA);

//Activity 3 - Reduce
const initialValue = 0;
const pointsTotal = pointsGPA.reduce((total,item) => total + item);
const totalGPA = pointsTotal / pointsGPA.length;
console.log(totalGPA);

//Activity 4 - Filter
//Here I understood that I should select the fruits that the length of their names would be greater than 6
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const longer = fruits.filter(fruit => fruit.length > 6);
console.log(longer);

//Activity 5 - indexOf
const numbers = [12, 34, 21, 54];
let luckNumber = 21;
console.log(numbers.indexOf(luckNumber));

const points = [100,88,94,78,84,69];

function convertPointsToStatus(pointTotal) {
  let status = 'Not Complete';
  if (pointTotal >= 93) {
    status = 'Excellent';
  } else if (pointTotal >= 70) {
    status = 'Complete';
  }
  return status;
}

const statusReport = points.map(convertPointsToStatus);
console.log(statusReport)