// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// make date load to top of calender 
var dateDisplay = document.querySelector('.dateDisplay')
var date = new Date()
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var mainDate = date.toLocaleDateString("en-US", options);
dateDisplay.textContent = mainDate; 



//when user inputs a message they should be able to click the save button.
//when saved the data should log to the page and when page is refreshed the date should still be there
// var getItem = localStorage.getItem(chronos);
// get current time to read
    var currentTime = date.getHours();
    console.log(currentTime)
// index through time on the page then compare to see what the actual time is
    var time = ['hour-9', 'hour-10', 'hour-11', 'hour-12', 'hour-1', 'hour-2', 'hour-3', 'hour-4', 'hour-5'];
    for (var i = 0; i < time.length; i++){
      console.log(time.length)
    }
//make a function that saves to local storage
// $(function(){

// saveBtnEl.on('click',function(){
//     todo =$(this).siblings('.description').val()
//         var hour = $(this).parent().attr('id');
//         localStorage.setItem(hour, todo);
//     }
// );  

// $('.timeblock').each(function (){
//     var hourBlock = parseInt($(this).attr('id').split('_')[1]);
//     if (hourBlock < dayjs().hour()){
//         $(this).addClass('past');
//     } else if (hourBlock > dayjs().hour()){
//         $(this).addClass('future');
//     } else{
//         $(this).addClass('present')
//     }    
//     });

//function to call storage

//each button needs a save button class. all can apply to eventlistener,
// but can relate to different functions click on save button then apply 
//it to a whole class with 9am text button save button , class with save button text area and save button

//when actual time is found mark as current with color gray using an if statement?
// use Json here to extract time to compare the 2 times. 
// if ('time' == 'currentTime')
// then mark time in future mark green use a function to change color

// then time in past mark red use a function to change color 






    //  $(function(){
    //   var time = new Date(),
    //   currentDate = date.getHours;
    //   currentDate=Date.parse(currentDate);
    //   $(".grid-item").each(function(){
    //      var specifiedDate = $(this).data('date');
    //      specifiedDate=Date.parse(specifiedDate);
    //      if (specifiedDate == currentDate){
    //        $(this).addClass('today');
    //      }else if (currentDate > specifiedDate){
    //        $(this).addClass('past');
    //      }else{
    //        $(this).addClass('future');
    //      }

        //  var time = ['hour-9', 'hour-10', 'hour-11', 'hour-12', 'hour-1', 'hour-2', 'hour-3', 'hour-4', 'hour-5'];
        //  for (var i = 0; i < time.length; i++) {
     
        //  }  
    //time block time//loop through the block times by its class name
    

    //forEach
    //extract the value of the time
    //compare each time to current time
    //compare the 2 to identify past, present or future
    // time blocks must switch to a differnt color to show if it is past future or current time.
    //I need to be able to click in a time block have user put in text. 

    //the text needs to be save into local storage
    //when the user refreshes the page the 





    //$(function () {
    // function showResponse(event) {
    //   event.preventDefault();
    //   console.log(event)

    // }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
