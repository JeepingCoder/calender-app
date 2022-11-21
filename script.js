// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

 
var dateDisplay = document.querySelector('.dateDisplay')
var date = new Date()
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var mainDate = date.toLocaleDateString("en-US", options);
// var hourNine = document.getElementById("hour-9")
// var hourTen = document.getElementById("hour-10")
// var hourEleven = document.getElementById("hour-11")
// var hourTwelve = document.getElementById("hour-12")
// var hourOne = document.getElementById("hour-1")
// var hourTwo = document.getElementById("hour-2")
// var hourThre = document.getElementById("hour-3")
// var hourFour = document.getElementById("hour-4")
// var hourFive = document.getElementById("hour-5")
// var saveBtnEl = document.querySelector('button')
// var textNine = document.getElementById('text-9')
// var textTen = document.getElementById('text-10')
// var textEleven = document.getElementById('text-11')
// var textTwelve = document.getElementById('text-12')
// var textOne = document.getElementById('text-1')
// var textTwo = document.getElementById('text-2')
// var textThree = document.getElementById('text-3')
// var textFour = document.getElementById('text-4')
// var textFive = document.getElementById('text-5')

// make date load to top of calender
dateDisplay.textContent = mainDate; 







//when saved the data should log to the page and when page is refreshed the date should still be there
// var getItem = localStorage.getItem(chronos);
// get current time to read
    var currentTime = date.getHours();
    console.log(currentTime)
// index through time on the page then compare to see what the actual time is
 //when user inputs a message they should be able to click the save button   
    let allTextareas = document.querySelectorAll(".description")
    let saveBtn = document.querySelectorAll(".saveBtn")
    
for (var i = 0; i < saveBtn.length; i++){
    saveBtn[i].addEventListener("click", function(event){
       let textValue = event.target.previousElementSibling.value;
       let textId = event.target.previousElementSibling.id;
       // console.log(this.previousElementSibling.value)

localStorage.setItem(textId,textValue)

    })
}

function checkTime(){


    console.log(allTextareas)

    for (var i = 0; i < allTextareas.length; i++){

      var timeColor = allTextareas[i].id.split("-")[1]
      var colorCode = moment().hour()

      let textId = allTextareas[i].id
      allTextareas[i].value = localStorage.getItem(textId)

      console.log(timeColor, colorCode)
    if(timeColor === colorCode){
        allTextareas[i].className = 'present'
        // console.log("this would log as a current time")
    }else if(timeColor < colorCode){
        allTextareas[i].className = "past"
    } else {
        allTextareas[i].className = "future"

    }
        
    }
}

function init(){
    checkTime();
}

init()
    // localStorage.getItem()
// make a function that saves to local storage
//     $(function(){saveBtnEl.on('click',function(){
//         todo =$(this).siblings('.description').val()
//         var hour = $(this).parent().attr('id');
//         localStorage.setItem(hour, todo);
//     }
// );



//function to call storage

//each button needs a save button class. all can apply to eventlistener,
// but can relate to different functions click on save button then apply 
//it to a whole class with 9am text button save button , class with save button text area and save button

//when actual time is found mark as current with color gray using an if statement?
// use Json here to extract time to compare the 2 times. 
// if ('time' == 'currentTime')
// then mark time in future mark green use a function to change color

// then time in past mark red use a function to change color 

 
    // time block time//loop through the block times by its class name
    

    //forEach
    //extract the value of the time
    //compare each time to current time
    //compare the 2 to identify past, present or future
    // time blocks must switch to a differnt color to show if it is past future or current time.
    //I need to be able to click in a time block have user put in text. 

    //the text needs to be save into local storage
    //when the user refreshes the page the 



// document.addEventListener('DOMConetentLoaded' ,()=>{
//     document.getElementById('btn').addEventListener('click', button);

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
  // TODO: Add code to display the current date in the header of the page.**
