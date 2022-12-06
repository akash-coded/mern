/**
 * Example-1
 */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function to check even numbers
function checkEven(number) {
  return number % 2 == 0;
}

// create a new array by filter even numbers from the numbers array
let evenNumbers = numbers.filter(function (n) {
  return n % 2 == 0;
});
console.log(evenNumbers);

/**
 * Example-2
 * Filtering out values from an Array
 */

const prices = [1800, 2000, null, 3000, 5000, "Thousand", 500, 8000];

function checkPrice(element) {
  return element > 2000 && !Number.isNaN(element);
}

let filteredPrices = prices.filter(checkPrice);
console.log(filteredPrices); // [ 3000, 5000, 8000 ]

// using arrow function
let newPrices = prices.filter((price) => price > 2000 && !Number.isNaN(price));
console.log(newPrices); // [ 3000, 5000, 8000 ]

/**
 * Example-3
 * Searching an Array
 */

const languages = [
  "JavaScript",
  "Python",
  "Ruby",
  "C",
  "C++",
  "Swift",
  "PHP",
  "Java",
];

function searchFor(arr, query) {
  function condition(element) {
    return element.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  }
  return arr.filter(condition);
}

let newArr = searchFor(languages, "ja");
console.log(newArr); // [ 'JavaScript', 'Java' ]

// using arrow function
const searchArr = (arr, query) =>
  arr.filter(
    (element) => element.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

let newLanguages = searchArr(languages, "p");
console.log(newLanguages); // [ 'JavaScript', 'Python', 'PHP' ]
