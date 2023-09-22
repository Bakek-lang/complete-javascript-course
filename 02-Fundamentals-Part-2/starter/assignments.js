/*
JavaScript Fundamentals - Part 2 -- Assignments
*/

// 1. LECTURE: Funcitons

// 1.

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const norway = describeCountry("Norway", 4, "Oslo");
const sweden = describeCountry("Sweden", 7, "Stockholm");
const Spain = describeCountry("Spain", 48, "Madrid");

console.log(norway);
console.log(sweden);
console.log(Spain);

// 2. LECTURE: Function Declarations vs. Expressions

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const norwayPopulation = percentageOfWorld1(4);
const swedenPopulation = percentageOfWorld1(7);
const spainPopulation = percentageOfWorld1(48);

console.log(norwayPopulation);
console.log(swedenPopulation);
console.log(spainPopulation);

let percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

console.log(percentageOfWorld2(4));
console.log(percentageOfWorld2(7));
console.log(percentageOfWorld2(48));

//  3. LECTURE: Arrow Functions

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percentNorway3 = percentageOfWorld3(4);
const percentSweden3 = percentageOfWorld3(7);
const percentSpain3 = percentageOfWorld3(48);

console.log(percentNorway3, percentSweden3, percentSpain3);
