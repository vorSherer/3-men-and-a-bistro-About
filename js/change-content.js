
var userDay = 'M';
var userHour = 30;
var greeting = 'Hi!';
var openHour = 1;
var closeHour = 25;


function validateHour() {
  userHour = prompt("Using a 24-hr. clock, which hour is it now?");
  if (userHour === null || userHour === "") {
    greeting = "Look, this only works if you cooperate!  Refresh the page and try again.";
  } else {
    greeting = "You entered " + userHour;
  }
  while(userHour > 24){
    alert("Hey, there are only 24 hours in a day (on this planet); pick one of them, Refresh the page and try again!")
    // userHour = prompt("Using a 24-hr. clock, which hour is it now?");
  }
  return greeting
}

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

if(userHour < 5 || userHour > 19){
  var nightFrameColor = B36718;
  var nightBodyColor = FFAC55;
  // var nightImgA = Party_pexels-photo-1426941;
  var nightCaptA = 'Wind down your day with a few freinds...';
  // var nightImgB = Party_pexels-photo-1426941;
  var nightCaptB = '...or maybe just the two of you';

  var eveHead = document.getElementsByTagName (header.background-color);
  eveHead.textContent = nightFrameColor;

  var eveFoot = document.getElementsByTagName (footer.background-color);
  eveFoot.textContent = nightFrameColor;
  
  var nightBody = document.getElementsByTagName (body.background-color);
  eveBody.textContent = nightBodyColor;
  
  var nightPicA = document.getElementsById ('li.imageA');
  evePicA.textContent = 'Party_pexels-photo-1426941';

  var nightCapA = document.getElementsById ('figcaption.captionA');
  eveCapA.textContent = 'nightCaptA';
  
  var nightPicB = document.getElementsById ('li.imageB');
  evePicB.textContent = "Intimate_pexels-photo-1787156";

  var nightCapB = document.getElementsById ('figcaption.captionA');
  eveCapB.textContent = 'nightCaptB';
}