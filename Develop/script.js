let task = {};
let currentDay = document.getElementById("currentDay");
let date = document.getElementById("date");

let dayTime = moment();
currentDay.textContent = dayTime.format("MMM DD, YYYY - hh:mm:ss a ");

// let d = new Date();
// let day = d.getDay();
// let ndate = d.toLocaleString();

// switch (day) {
//   case 0:
//     day = "sunday";
//     break;
//   case 1:
//     day = "monday";
//     break;
//   case 2:
//     day = "tuesday";
//     break;
//   case 3:
//     day = "wednesday";
//   case 4:
//     day = "thursday";
//     break;
//   case 5:
//     day = "friday";
//   case 6:
//     day = "saturday";
//     break;
// }
// currentDay.innerHTML = day;
// date.innerHTML = ndate;

// console.log(currentDay);

$(document).ready(function () {
  $(".saveBtn").click(function () {
    const time = $(this).parent().attr("id");

    const textarea = $(this).siblings(".description").val();
    localStorage.setItem(time, textarea);
    console.log(time, textarea);
  });

  function timeKeeper() {
    const currTime = moment().hours();

    $(".time-block").each(function () {
      const timeDisplay = parseInt($(this).attr("id"));

      if (timeDisplay < currTime) {
        console.log("past");
        $(this).children("textarea").addClass("past");
        $(this).children("textarea").removeClass("present");
        $(this).children("textarea").removeClass("future");
      } else if (timeDisplay === currTime) {
        console.log("present");
        $(this).children("textarea").removeClass("past");
        $(this).children("textarea").addClass("present");
        $(this).children("textarea").removeClass("future");
      } else if (timeDisplay > currTime) {
        $(this).children("textarea").removeClass("past");
        $(this).children("textarea").removeClass("present");
        $(this).children("textarea").addClass("future");
      }
      console.log(timeDisplay, currTime);
    });
  }

  timeKeeper();

  $("#6 .description").val(localStorage.getItem("6"));
  $("#7 .description").val(localStorage.getItem("7"));
  $("#8 .description").val(localStorage.getItem("8"));
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
});
