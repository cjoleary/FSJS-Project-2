/**
 SIMPLE SEARCH FILTER
 **/

"use strict";


/* Variables to reference the `input` and search `button` elements */
const search = document.querySelector('#search-input');
const submit = document.querySelector('#submit');


/* Variable to store HTMLCollection of table cells that you'll search through */
const tableCells = document.querySelectorAll('td');

// Test log statements
//console.log(search);
//console.log(submit);
//console.log(tableCells);

// SEARCH FUNCTION
function searchNames( searchInput, names ) {
  console.log(searchInput);
  console.log(names);
  
  // loop over names parameter and remove 'match' class   
  for ( let i = 0; i < names.length; i++ ) {
    names[i].classList -= ' match';
    
    // if user search input matches the text content of the names parameter, add 'match' class
    if ( searchInput.value.length !== 0 && names[i].textContent.toLowerCase().includes(searchInput.value.toLowerCase()) ) {
      names[i].classList += ' match';
    }
  }
}

// EVENT LISTENERS

/* submit listener */
submit.addEventListener('click', (event) => {
  event.preventDefault();

  // execute search function when user clicks submit button
  searchNames(search, tableCells);

  // log statement to test function
  console.log('Submit button is functional!');
});

/* submit listener */
search.addEventListener('keyup', () => {

  // execute search function as user types in search box
  searchNames(search, tableCells);

  // log statement to test function
  console.log('Keyup event on the Search input is functional!');
});