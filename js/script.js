/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage( list, page ) {
   let indexStart = (page * 9) - 9;
   let indexEnd = page * 9; 
   let studentList = document.querySelector('.student-list');
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
Create the `addPagination` function
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
   let buttons = document.querySelectorAll('button');
   buttons[0].classList.add('active');

   // page button event listener
   linkList.addEventListener( 'click', (e) => {
      // check to make sure the element clicked is a button
      if ( e.target.tagName === 'BUTTON' ) {
         for ( let i = 0; i < buttons.length; i++ ) {
            // remove active class from other buttons, add active class to button clicked
            buttons[i].classList = '';
            e.target.classList.add('active');
         }
         let pageNum = e.target.textContent;
         showPage(data, pageNum);
      }
   });
}


// Call functions
showPage(data, 1);
addPagination(data);