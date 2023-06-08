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