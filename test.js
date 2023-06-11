// **Dynamic pages with java Script**

let myName="Yaga";
console.log(myName);

let myPet = "Fish" // this data type is a string

let myPetAge = 1 // this data type is a number

let petDetails = "My pet is" + myPetAge;
console.log (petDetails);

console.log(typeof petDetails);

let likesSwimming = true; // this data string is a boolean
console.log(likesSwimming);
console.log(typeof likesSwimming);

// There are also Arrays and Objects
// arethemic operators

let addition = 7 + 7 // + is for addition
console.log(addition);

let substraction = 5-2 // - is for substraction
console.log(substraction);

let multiplication = 10 * 10 //is for multiplication
console.log(multiplication);

let division = 15 /3 // / is for division
console.log(division);

let myNum = 5
let thisNum = ++myNum // ++ increments by one
console.log(thisNum);

let thatNum = --myNum // decrements by one
console.log(thatNum)

// Comparison operators

// == equal to "7" == 7
// === equal value and equal type "7" === 7
// != not equal
// !== not equal value and not equal type
// > greater than
// < less than
// >= greater than or equal to
// <= les than or equal to

// conditional statement 
// a conditional statement controls behaviour ina javascript and detemines whether or not a piece of code shoiuld rin or not.

if (myNum === 5) {
    console.log("Bingo");
}

 if(myNum == "five") {
    console.log("flamingo");
 }

 if (myNum === 6) {
    console.log("you will win 1 milion dollars");
     }else{ 
       console.log("if I had a million dollars to give away I wouldn't be teaching this course :(");
    }
    if (myNum === 10) {
        console.log("I'm on this corse to win Tims 3rd printed game");
    }else if (myNum === 3) {
        console.log ("I'm on thid coure beasue they told me ther was Pizza");
    }else {
        console.log("I'm on this course because I want to eat sleep code repeat!")
    }

    // To complete the lab you will need to know about few built in methods
    // prompt()
    // document.write()

    let userName = prompt("Hi user :) please tell me your name");
    console.log(userName);

    const welcomeMsg = alert("Welcome to my page " + userName);

    document.write("Hello " + userName + " thank you for visiting my site");


    let analogueCamera = prompt("Hi user, tell me what camera you use?");

    if (analogueCamera === "digital") {
        alert ("digital has no soul");
    } else {
        alert("Let's load the roll and shoot film together, " + analogueCamera);
    }

    let userName = prompt("Hi user :) please tell me your name");
    console.log(userName);
    const welcomeMsg = alert("Welcome to my page " + userName);
    
    document.write("Hello " + userName + " thank you for visiting my site");

// **Programing with Java Script

// *Functions*
// function.js file

    "use strict"

// syntax - function keyword/ function name/ parameter / curly braces for the body

// function declaration

mySum();
mySum();
function mySum(){
   let x = 2 + 2;
   console.log(x); 
}

//function exspression

let help;

const myFunc = function() {
    let help = 3 * 3;
    console.log(help);
}

const myFunc = function() {
    let help = 3;
    // console.log(help);
}

myFunc();

// parameters and arguments

function bestSum(param1, param2) {
    let x = param1, param2;
    console.log(x);
}

bestSum(10, 10);
bestSum("My name is", "Yaga");
bestSum("I am only", 23);

function theReturningSum(num1, num2, num3){
    let sum = num1 = num2;
    let sumDivided = sum / num3;
    let help = "help";
    return sumDivided;
}
// console.log(theReturningSum(30, 30, 3));
// console.log(theReturningSum(50, 50, 4));

console.log(theReturningSum());

//top.js file

function yourName() {
    let user = prompt("what is your name");
    return document.write(user);
}

function timeOfDay() {
let time =ptompt("what hour is it? (0-23)");
let message = "";

if(time <= 11){
    message = "Good Morning";
} else if(time <= 18){
    message = "Good Afternoon";
} else if  (time < 24) {
    message + "good Night";
} else {
    message = "yo, thats not a time dude!";
}

return document.write(message);
} 

// practical use  - and

function timeOfDay() {
    let time =prompt("what hour is it? (0-23)");
    let message = ""
    
    if(time <= 11 && location === "England") {
        message = "Good Morning";
    } else if(time <= 18 && location === "England") {
        message = "Good Afternoon";
    } else if  (time < 24 && location === "England") {
        message = "good Night";
    } else {
        message = "yo, thats not a time dude!";
    }
    
    return document.write(message);
}

// practical use  - pipes |

function timeOfDay() {
    let time =prompt("what hour is it? (0-23)");
    let message = ""
    
    if(time <= 11 || location === "England") {
        message = "Good Morning";
    } else if(time<= 18 || location === "England") {
        message = "Good Afternoon";
    } else if  (time < 24 || location === "England") {
        message + "good Night";
    } else {
        message = "yo, that's not a time, dude!";
    }
    
    return document.write(message);
}

//**Loops and Operatos

let myPets = ["dog", "cat", "goldfish"]

// initailization/ condition / increment

for (let i = 0; i < myPets.length; i++){
    console.log("I love my pet " + myPets[i])
}

// while loop

// while (condition){
// statement
//}

let n = 0;
let x = 0;
while(n < 3){
    n++;
    x += n;
    console.log(n);
    console.log(x); 

    if (x >+ 3) {
        break; 
    }
}

let answer;

while(answer != 7) {
    answer = prompt ("Guess a number between 1 and 10");
    if (answer !=7){
        alert("Try Again!");
    } else {
        alert ("Congratulations, You win!")
    }
}
let myPets = ["dog", "cat", "goldfish"]

for (let i = 0; i < myPets.length; i++)
    console.log("I love my pet " + myPets[i])

let n = 0;
let x = 0;
while(n < 3){
    n++;
    x += n;
    console.log(n);
    console.log(x); 
    
    if (x >+ 3) {
        break; 
    }
}

let answer;

while(answer != 7) {
    answer = prompt ("Guess a number between 1 and 10");
    if (answer !=7){
        alert("Try Again!");
    } else {
        alert ("Congratulations, You win!")
    }
}

// adding mage - add folder // in html file add via code <script src="scrip.js"></script> 
function displayRating(){
    let output = ""
    let rating = prompt("On a scale of 1 - 5, how much do you rate Chris's haircut")
    for(let i = 0; i < rating; i++){
        output += "<img src='Images/img002.jpg' alt='star rating'>";
    }
    return document.write(output);
}


