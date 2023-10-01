let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

const namesB = names.filter((name) => name.includes('B'));
//const NamesB = names.filter(name => name.charAt(0) === B);
console.log(namesB);

const namesLenghts = names.map((name) => name.length);
console.log(namesLenghts);

const averageLenghts = names.reduce((total, name) => total + name.length,0)/names.length;
console.log(averageLenghts);