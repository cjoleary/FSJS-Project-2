/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Simple Search - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";


/* Variables to reference the `input` and search `button` elements */
const search = document.querySelector('#search-input');
const submit = document.querySelector('#submit');


/* Variable to store HTMLCollection of table cells that you'll search through
   But the same basic technique can work with other collections, even an array of objects */
const tableCells = document.querySelectorAll('td');

// Helpful log statements
//console.log(search);
//console.log(submit);
//console.log(tableCells);


// YOUR CODE GOES HERE!!! Do the steps below to complete this challenge

// 1. Create a function to perform your search - it should accept two parameters: searchInput, names.  
  // Inside the function's code block:
  // 1a. Create two `console.log` statements to log out the searchInput and names parameter 
  // 1b. Loop over the `names` parameter
    // 1c. Remove the 'match' class name from each `names[i]` 
    // 1d. Create a conditional that checks two conditions:
      // 1ca. If the `searchInput.value.length` does not equal the digit zero AND `names[i].textContent.toLowerCase()` includes `searchInput.value.toLowerCase())`
      // 1cb. Add the class name 'match` to `names[i]` 
  
// 2. Call the search function in the callbacks of the event listeners below, being sure pass in the `search` and `tableCells` arguments

function searchNames( searchInput, names ) {
  console.log(searchInput);
  console.log(names);
  
  for ( let i = 0; i < names.length; i++ ) {
    names[i].classList -= ' match';
    
    if ( searchInput.value.length !== 0 && names[i].textContent.toLowerCase().includes(searchInput.value.toLowerCase()) ) {
      names[i].classList += ' match';
    }
  }
}

/**
 * Event listeners for buttons - Invoke your search function in the body of the callbacks in the event listeners below
 */

/* submit listener */
submit.addEventListener('click', (event) => {
  event.preventDefault();

  // Invoke your search function here - Arguments: search, tableCells
  searchNames(search, tableCells);

  // Helpful log statement to test function
  console.log('Submit button is functional!');
});

/* submit listener */
search.addEventListener('keyup', () => {

  // Invoke your search function here - Arguments: search, tableCells
  searchNames(search, tableCells);

  // Helpful log statement to test function
  console.log('Keyup event on the Search input is functional!');
});