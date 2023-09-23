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

//  4. LECTURE: Functions Calling Other Functions

let describePopulation = function (country, population) {
  return `${country} has ${population} million people, which is about ${percentageOfWorld1(
    population
  )}% of the world.`;
};

describePopulation("Norway", 4);
describePopulation("Sweden", 7);
describePopulation("Spain", 48);

console.log(describePopulation("Norway", 4));

//  5. LECTURE: Introduction to Arrays

const populations = [4, 7, 48, 1441];

console.log(populations.length === 4 ? true : false);

const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];

console.log(percentages);

//  6. LECTURE: Basic Array Operations (Methods)

const neighbours = ["France", "Portugal", "Morocco"];

neighbours.push("Utopia");

console.log(neighbours);

neighbours.pop([3]);

console.log(neighbours);

if (
  neighbours[0] === "Germany" ||
  neighbours[1] === "Germany" ||
  neighbours[2] === "Germany"
) {
  console.log("Probably a central European country :D");
} else {
  console.log("Proably not a central European country :D");
}

neighbours[0] = "Republic of France";

console.log(neighbours);

//  7. LECTURE: Introduction to Objects

let myCountry = {
  country: "Norway",
  capital: "Oslo",
  language: "Norwegian",
  population: 4,
  neighbours: ["Sweden", "Finland", "Russia"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language}-speaking people, 3 neighbouring countries and a capital called ${this.capital}.`
    );
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
  },
};

//  8. LECTURE: Dot vs. Bracket Notation

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, 3 neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;

console.log(myCountry.population);

myCountry["population"] -= 2;

console.log(myCountry.population);

//  9. LECTURE: Object Methods

myCountry.describe();

//  the code in the object:
// describe: function () {
//   console.log(
//     `${this.country} has ${this.population} million ${this.language}-speaking people, 3 neighbouring countries and a capital called ${this.capital}.`
//   );

myCountry.checkIsland();
console.log(myCountry);

//  10. LECTURE: Iteration: The for Loop

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${[i]} is currently voting`);
}
