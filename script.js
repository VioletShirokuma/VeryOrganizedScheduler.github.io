$(document).ready(function () {

  
    let currentDate = moment().format('LLLL');
    $("#currentDay").text(currentDate);

   
    let now = moment();
    let hour = now.hour();
    let formatHour = now.format('time');
    let timeBlocks = $(".timeslot");


    
    for (let i = 0; i < timeBlocks.length; i++) {
        let blockTime = $(timeBlocks[i]);
        let hourId = blockTime.attr("id");

        if (hourId === formatHour) {
            $(blockTime).children(".row").addClass("present");
        }

        if (moment(hourId, "time").isBefore()) {
            $(blockTime).children(".row").addClass("past");


        } else
            if (moment(hourId, "time").isAfter()) {
                $(blockTime).children(".row").addClass("future");
            }
    }


    let saveButton = $(".saveButton"); 

    
    function saveInput(event) {
        event.preventDefault();
        let hour = $(this).parent().parent().attr("id");
        let input = $(this).siblings("textspace").val();
        localStorage.setItem(hour, input);
    };

   
    let nine = $("#9am").children(".row").children("textspace");
    let ten = $("#10am").children(".row").children("textspace");
    let eleven = $("#11am").children(".row").children("textspace");
    let twelve = $("#12pm").children(".row").children("textspace");
    let one = $("#1pm").children(".row").children("textspace");
    let two = $("#2pm").children(".row").children("textspace");
    let three = $("#3pm").children(".row").children("textspace");
    let four = $("#4pm").children(".row").children("textspace");
    let five = $("#5pm").children(".row").children("textspace");




    //area where you can input the text into the webpage
    
    nine.text(localStorage.getItem("9am"));
    ten.text(localStorage.getItem("10am"));
    eleven.text(localStorage.getItem("11am"));
    twelve.text(localStorage.getItem("12pm"));
    one.text(localStorage.getItem("1pm"));
    two.text(localStorage.getItem("2pm"));
    three.text(localStorage.getItem("3pm"));
    four.text(localStorage.getItem("4pm"));
    five.text(localStorage.getItem("5pm"));



    //save button function
    saveButton.on('click', saveInput);=



    let textArea = $("#text-area");


    //to reset/clear
    $(".reset").on("click", function () {
        localStorage.clear();
        location.reload();
    })