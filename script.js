var dateDisplay = document.querySelector('.dateDisplay')
var date = new Date()
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var mainDate = date.toLocaleDateString("en-US", options);

// make date load to top of calender
dateDisplay.textContent = mainDate;

// get current time to read
var currentTime = date.getHours();
console.log(currentTime)

//when user inputs a message they should be able to click the save button   
let allTextareas = document.querySelectorAll(".description")
let saveBtn = document.querySelectorAll(".saveBtn")

for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener("click", function (event) {
        let textValue = event.target.previousElementSibling.value;
        let textId = event.target.previousElementSibling.id;
        // console.log(this.previousElementSibling.value)
        //function to call storage
        localStorage.setItem(textId, textValue)
    })
}
// index through time on the page then compare to see what the actual time is
function checkTime() {
    // console.log(allTextareas)

    for (var i = 0; i < allTextareas.length; i++) {

        var timeColor = allTextareas[i].id.split("-")[1]
        var colorCode = moment().hour()
        //when saved the data should log to the page and when page is refreshed the date should still be there
        let textId = allTextareas[i].id
        allTextareas[i].value = localStorage.getItem(textId)
        // console.log(timeColor, colorCode)
        if (timeColor === colorCode) {
            allTextareas[i].className = 'present'
        } else if (timeColor < colorCode) {
            allTextareas[i].className = "past"
        } else {
            allTextareas[i].className = "future"

        }

    }
}

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

function init() {
    checkTime();
}

init()






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



