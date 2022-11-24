var dateDisplay = document.querySelector('.dateDisplay')
var date = new Date()
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var mainDate = date.toLocaleDateString("en-US", options);

// make date load to top of calender
dateDisplay.textContent = mainDate;

// get current time to read
var currentTime = date.getHours();
// console.log(currentTime)

//when user inputs a message they should be able to click the save button   
let allTextareas = document.querySelectorAll(".description")
let saveBtn = document.querySelectorAll(".saveBtn")

for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener("click", function (event) {
        let textValue = event.target.previousElementSibling.value;
        let textId = event.target.previousElementSibling.id;
        console.log(this.previousElementSibling.value)
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
        //  console.log(colorCode, timeColor)
        if (timeColor === colorCode) {
            allTextareas[i].className = "present"
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











