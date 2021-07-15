$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
// Function to display the current date and time on the header of the html
    
    $(".saveBtn").on("click", function () {
    //Assigns the saveBtn class an event listener 
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

      
        localStorage.setItem(time, text);
        // Allows the variable of "time" and "text" to be saved into the local storage object
    
    })
   
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
// this allows the user to load saved data from the local storage from each hour that has been created in the HTML file

    function hourTracker() {
       // This function get the current hour of the day and then colour codes the timeblocks depending on what hour of the day it is.
        var currentHour = moment().hour();
// this variable gets the current hour of the day using moment.js

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        // creates a loop for the time blocks

        
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
                //if the hour of the time block is greater than the current hour of the day. Then the "past" class is added to the timeblocks while the "future" and "present classes are removed"
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
                // else id the block hour is strictly equal to the current hour of the day then the "past" and "future" classes are removed and the "present" class is added
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
                // or else removed "present" and "past" class and add the "future" to the timeblocks in the HTML
            }
            // "past", "present" and "future" class were add in the CSS file 
            // the "if" "else if" and "else" pretty much just check to see if where the currentHour is in Relation to the Blockhour and then replaces the appropiate class in the Html file via the CSS file
        })
    }
    hourTracker();
    // this simply just reruns the function
})
// used both JQuery and Moment.js throughout this 