let currentDay = document.getElementById("currentDay");
let currentDay = moment();
currentDay.textContent = currentDay.format("MMM DD, YYYY - hh:mm:ss a ");

// let d = new Date();
console.log(currentDay);
