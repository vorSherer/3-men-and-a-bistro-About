

// Declare and initialize global variables

var greeting = "Welcome to the 3 Men and a Bistro web page!";
var userDay = 'M';
var userHour = 8;
var openHour = 8;
var closeHour = 15;
var baseReservs = 100;

var invalidDay = false;

// Declare functions

function validateDay() {
  console.log("Got this far");
  var userDay = prompt("Using 'S M T W T F S' which day is today?", "Bistro day!");
  if (userDay == null || userDay == "") {
  greeting = "User cancelled the prompt.";
  } else {
  greeting = "You entered " + userDay + ", correct?";
  }
  if(userDay = 'S'){
    openHour = 9;
    closeHour = 15;
  } else {
    openHour = 8;
    closeHour = 17;
  }
  return userDay, greeting, openHour, closeHour
}

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
  return userHour, greeting
}

function makeReservation(openHour, availReservs, baseReservs){  // Reservation engine
  if (openHour = 8){
  availReservs = baseReservs // Initialize reservations for the day.
  }
  // Display available reservations
  if (availReservs > 0){
  var makeReserv = prompt("We have " + availReservs + " reservable seats left. Would you like to make a reservation?");
      if (makeReserv == null || makeReserv == "") {
          greeting = "That's fine.  Come in anyway, we have plenty of room for you!";
      } else {
          var partyQty = prompt("How many in your party?");
          if (makeReserv > availReservs){
              greeting = "Sorry, we don't have that many seats available.";
          }
          if (confirm("Party of " + makeReserv + ", correct?")){
            availReservs - makeReserv;
            console.log("See you soon!");
          } else {
          console.log("reservation cancelled");
          }
      }
  } else {
  alert("Sorry!  We're all booked up at the moment.  Hope you will come back later!");
  }
  return availReservs, greeting
}

validateDay();

validateHour();

var windDown = closeHour - 2;

if(userHour >= windDown){
    var eveningMode = {
        frameColor: B36718,
        bodyColor: FFAC55,
        imageA: "Party_jpg",
        captionA: "Wind down your day with a few friends...",
        imageB: "Intimate_jpg",
        captionB: "...or maybe just one!"
    }
} else if(userHour > 10 && userHour < windDown) {
    var daytimeMode = {
        frameColor: E88C1E,
        bodyColor: FFBC7A,
        imageA: "Ambience_jpg",
        captionA: "Come enjoy our casual atmosphere...",
        imageB: "Bus_lunch_jpg",
        captionB: "...or come in for that 'Power Lunch!'"
    }
} else if(userHour > openHour && userHour < 10) {
    var morningMode = {
        frameColor: BE8700,
        bodyColor: FFB600,
        imageA: "Party_jpg",
        captionA: "Start your day with a few friends...",
        imageB: "Friends_jpg",
        captionB: "...or maybe just one!"
    }
} else if(userHour < openHour) {
    var earlyMode = {
        frameColor: B36718,
        bodyColor: FFAC55,
        imageA: "Street_jpg",
        captionA: "Where we started from...",
        imageB: "Ambience_jpg",
        captionB: "Come enjoy our casual atmosphere!"
    }
}

if(userHour > closeHour){
    greeting = "Sorry we missed you!  Hope to see you tomorrow!"
} else if(userHour = (closeHour - 1)){
    greeting = "We'll be closing in less than an hour, but if you hurry you may still make it!"
} else if(userHour < closeHour && userHour > openHour){
    greeting = "We're open!  Come on down for a great Bistro experience!"
} else if(userHour = (openHour - 1)){
    greeting = "We'll be open soon!  Come on in and start your day with us!"
} else if(userHour < (openHour - 1)){
    greeting = "Wow! You're up early! We'd love to see you later once we open."
}

return '<h3>'+ greeting + '</h3>';
