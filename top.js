function yourName() {
    let user = prompt("what is your name?");
    return document.write(user);
}

function timeOfDay() {
    let time =prompt("What hour is it?(0-23)");
    let message = ""
    
    if(time <= 11 && location === "England") {
        message = "Good Morning, sun is not shinning";
    } else if(time<= 18 && location === "England") {
        message = "Good Afternoon, we are all covered in rain";
    } else if(time < 24 && location === "England") {
        message = "Good Night, although it is not raining, the sun is gone already. Welcome to darkness";
    } else {
        message = "Yo, thats not a time dude!";
    }
    
    return document.write(message);
}

