// STRICT MODE


const birthDate = new Date(1992, 12, 26);
console.log(`My birthdate is the ${birthDate.getDate()}th`); 
console.log(`My birthday is on the ${birthDate.getDate()}th of ${birthDate.getMonth()}`); 





console.log(Math.floor(Math.random() * 6 + 1));


// Exercise 2
const myFavNum = [3, 6, 9];
const max = Math.max(3, 6, 9);
const min = Math.min(...[3, 6, 9]);
console.log(min);

const smallNumSquare = min * min;
console.log(typeof(smallNumSquare));
console.log(parseInt(smallNumSquare));