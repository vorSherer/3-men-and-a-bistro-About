

function validateHour() {
    var userHour = prompt("Using a 24-hr. clock, which hour is it now?");
    if (userHour == null || userHour == "") {
      greeting = "User cancelled the prompt.";
    } else {
      greeting = "You entered " + userHour + ", correct?";
    }
    while(userHour > 24){
      alert("Hey, there are only 24 hours in a day (on this planet), pick one of them and try again!")
      userHour = prompt("Using a 24-hr. clock, which hour is it now?");
    }
}

