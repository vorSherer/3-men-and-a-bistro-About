var greeting = "Welcome to the 3 Men and a Bistro web page!";
var userDay = 'M';
var userHour = 8;
var openHour = 8;
var closeHour = 15;

//h2>JavaScript Day/Hour Prompt</h2>

<button id="Day" onclick="validateDay()">Today is...?</button>;
<script src="day-query.js"></script>;
<p id="demo"></p>

function validateDay() {}



<button id="Hour" onclick="validateHour()">...and Hour?</button>;
<script src="hour-query.js"></script>;
<p id="demo2"></p>


function validateHour() {}

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