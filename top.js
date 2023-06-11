function yourName() {
    let user = prompt("What is your name?");
    return document.write(user);
}

function timeOfDay() {
    let time = prompt("What hour is it?(0-23)");
    let location = prompt("What country are you in?");
    let message = "";
    
    if(time <= 11 || location === "UK") {
        message = "Good Morning!";
    } else if(time<= 18 || location === "UK") {
        message = "Good Afternoon!";
    } else if(time < 24 || location === "UK") {
        message = "Good Night!";
    } else {
        message = "Are you tired? That is not a time!";
    }
    return document.write(message);
}

let answer;

while(answer != 16) {
    answer = prompt ("Can you guess how many film cameras do I have?");
    if (answer !=16){
        alert("Try Again! But mind that number can change very soon!");
    } else {
        alert ("Congratulations! However it can be more soon ;)")
    }
}

function displayRating(){
    let output = ""
    let rating = prompt("On a scale of 1 - 5, how many cyanotype prits would you like to order?")
    for(let i = 0; i < rating; i++){
        output += "<img class=img006.jpg' src='Images/img006.jpg' alt='img006 rating'>";
    }
    return document.write(output);
}

