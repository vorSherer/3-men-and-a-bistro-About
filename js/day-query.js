

function validateDay() {
    var userDay = prompt("Using 'S M T W T F S' which day is today?", "Bistro day!");
    if (userDay == null || userDay == "") {
    greeting = "User cancelled the prompt.";
    } else {
    greeting = "You entered " + userDay + ", correct?";
    }
    //document.getElementById("demo").innerHTML = greeting;
    if(userDay = 'S'){
      openHour = 9;
      closeHour = 15;
      //greeting = "On " + userDay + " we open at " + openHour + " and close at " + closeHour;
      //document.getElementById("demo1").innerHTML = greeting;
    } else {
      openHour = 8;
      closeHour = 17;
      //greeting = "On " + userDay + " we open at " + openHour + " and close at " + closeHour;
      //document.getElementById("demo2").innerHTML = greeting;
    }
  }
  