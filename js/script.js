/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
Create and insert/append the elements needed for the search component
*/

const header = document.querySelector('HEADER');
header.insertAdjacentHTML( 'beforeend', `
   <label for="search" class="student-search">
      <input id="search" type="text" placeholder="Search by name...">
      <button id="submit" type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
   </label>
`);

/*
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const studentList = document.querySelector('.student-list');

function showPage( list, page ) {
   let indexStart = (page * 9) - 9;
   let indexEnd = page * 9; 
   studentList.innerHTML = '';

   for ( let i = 0; i < list.length; i++ ) {
      if ( i >= indexStart && i < indexEnd ) {
         studentList.innerHTML += `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${list[i].registered.date}</span>
               </div>
            </li>
         `;
      }
   }
}

/*
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination( list ) {
   let btnNum = list.length / 9;
   let linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';

   for ( let i = 0; i < btnNum; i++ ) {
      linkList.innerHTML += `
         <li>
            <button type="button">${i + 1}</button>
         </li>
      `;
   }

   // give first button the active class on page load
   let pageBtns = linkList.querySelectorAll('BUTTON');
   pageBtns[0].classList.add('active');

   // page button event listener
   linkList.addEventListener( 'click', (e) => {
      // check to make sure the element clicked is a button
      if ( e.target.tagName === 'BUTTON' ) {
         for ( let i = 0; i < pageBtns.length; i++ ) {
            // remove active class from other buttons, add active class to button clicked
            pageBtns[i].classList = '';
            e.target.classList.add('active');
         }
         let pageNum = e.target.textContent;
         showPage(list, pageNum);
      }
   });
}

/*
This function will search for student names based on the search bar user input and return matches
*/

function searchStudents ( list ) {
   let matches = []; // store matches here
   const searchBar = document.getElementById('search');
   const searchBtn = document.getElementById('submit'); 

   // search bar event handler
   searchBar.addEventListener( 'keyup', (e) => {
      matches = []; // clear the matches array
      const searchInput = searchBar.value.toLowerCase();
      for ( let i = 0; i < list.length; i++ ) {
         const firstName = list[i].name.first.toLowerCase();
         const lastName = list[i].name.last.toLowerCase();
         if ( firstName.includes( searchInput ) || lastName.includes( searchInput ) ) {
            matches.push( list[i] ); // add matches to matches array
            console.log(matches);
         }
      }

      // if no matches display error message, else display matches
      if ( matches.length === 0 ) {
         studentList.innerHTML = ' ';
         studentList.insertAdjacentHTML( 'beforeend', `
            <h1>No results were found</h1>
         `);
         addPagination(matches);
      } else {
         showPage(matches, 1);
         addPagination(matches);
      }
      
   });

   // search button event handler
   searchBtn.addEventListener( 'click', (e) => {
      matches = []; // clear the matches array
      const searchInput = searchBar.value.toLowerCase();
      for ( let i = 0; i < list.length; i++ ) {
         const firstName = list[i].name.first.toLowerCase();
         const lastName = list[i].name.last.toLowerCase();
         if ( firstName.includes( searchInput ) || lastName.includes( searchInput ) ) {
            matches.push( list[i] ); // add matches to matches array
         }
      }

      // if no matches display error message, else display matches
      if ( matches.length === 0 ) {
         studentList.innerHTML = ' ';
         studentList.insertAdjacentHTML( 'beforeend', `
            <h1>No results were found</h1>
         `);
         addPagination(matches);
      } else {
         showPage(matches, 1);
         addPagination(matches);
      }
   });
}

// Call functions
showPage(data, 1);
addPagination(data);
searchStudents(data);
