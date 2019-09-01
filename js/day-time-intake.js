

// Declaring and initializing variables
var openTime = 10
var closeTime = 16
var greeting
var dayNow = 'M'
var hourNow = 6

console.log("We open at " + openTime);
console.log("We close at " + closeTime);
console.log("Come join us soon!");


function specifyBusinessHours(){
    // var weekday = single letter day of the week
    var dayNow = prompt("Using S M T W T F S, which weekday is today?"); // default is M
        if (dayNow = 'S'){
      openTime = 9;
      closeTime = 15 // sets weekend hours.
    } else if (dayNow = 'M'){
      openTime = 8;
      closeTime = 17 // will replace with an array for dayNow later, maybe.
    } else if (dayNow = 'T'){
      openTime = 8;
      closeTime = 17
    } else if (dayNow = 'W'){
      openTime = 8;
      closeTime = 17
    } else if (dayNow = 'F'){
      openTime = 8;
      closeTime = 17
    }

    var hourNow = prompt("On a 24-hr. clock, what is the hour?"); // dafault is 8
   
    console.log("Hello Everyone!");

     if (hourNow > 24) {
        greeting = 'Hey, there are only 24 hrs. in a day (on this planet)! Pick one and try again.';
        var hourNow = prompt("On a 24-hr. clock, what is the hour?"); // Can I do this? i.e., will the ELSE chain run on the initial value or on the re-entry?
    }
    
    if (hourNow > 18) {
        greeting = 'Good evening!';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon!';
    } else if (hourNow > 0) {
        greeting = 'Good morning!';
    } else {
        greeting = 'Howdy!';
    }

    console.log('The greeting is: ' + greeting);

    return '<h3>'+ greeting + '</h3>';
}

