console.log("Got this far");

var userDay = '1';
var greeting = 'Hi!';
var openHour = 1;
var closeHour = 12;


function validateDay() {
  userDay = prompt("Using 'S M T W T F S' which day is today?", "Bistro day!");
  if (userDay === null || userDay === "") {
  greeting = "User cancelled the prompt.";
  } else {
  greeting = "You entered " + userDay + ", correct?";
  }
  if(userDay === 'S'){
    openHour = 9;
    closeHour = 15;
  } else {
    openHour = 8;
    closeHour = 17;
  }
  return greeting;
}

