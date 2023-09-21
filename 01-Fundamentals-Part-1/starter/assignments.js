/*
JavaScript Fundamentals - Part 1 -- Assignments
*/

// 1.  LECTURE: Values and Variables

const country = "Spain";
const continent = "Europe";
let population = 47.1;

console.log(country + " " + continent + " " + population + "Million");

// 2. LECTURE: Data Types

const isIsland = false;

console.log(
  typeof country +
    " " +
    typeof continent +
    " " +
    typeof population +
    " " +
    typeof isIsland
);

// 3. LECTURE: let, const and var

const language = "Spanish";

// 4. LECTURE: Basic Operators

const halfPopulation = population / 2;
population += 1;
console.log(population);
console.log(population > 6);
console.log(population < 33);
let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language +
  ".";
console.log(description);

// 5. LECTURE: Strings and Template Literals

description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);

// 6. LECTURE: Taking Decisions: if / else Statements

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is ${33 - population} below average.`);
}

// 7. LECTURE: Type Conversion and Coercion

// 1.

// undefined
// undefined
// undefined
// false
//  72

// 2.

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);

//  8. LECTURE: Equality Operators: == vs. ===

// 1.

// let numNeighbours = prompt(
//   "How many neighbour countries does your country have?"
// );

// numNeighbours = parseInt(numNeighbours);

// if (numNeighbours === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// 9. LECTURE: Logical Operators

let sarahLanguage = "English";
let sarahPopulation = 50;
let sarahIsIsland = false;

if (
  sarahLanguage === language &&
  sarahPopulation > population &&
  sarahIsIsland === isIsland
) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

// 10. LECTURE: The switch Statement

switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log("MOST number of native speakers");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("Numer 4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
    break;
}

// 11. LECTURE: The conditional (Ternary) Operator

console.log(
  `${country}'s population is ${population > 33 ? "above" : "below"} average`
);
