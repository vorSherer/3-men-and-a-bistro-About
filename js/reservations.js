

function makeReservation(availReservs, baseReservs){  // Reservation engine
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
}
