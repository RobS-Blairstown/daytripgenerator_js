"use strict"
// destination needs to be random for the day trip
// restaurant needs to be random for the day trip as well
// transportation needs to be random
// entertainment needs to be random
// each function needs to do one thing only!

//destination function
//create array with destinations
let destination = ["New York City", "Miami", "San Diego", "Dallas"];

function randomDestination(randomCity){ // needs to be able to randomly reselect destination as well
    let funCity = destination[Math.floor(destination.length * Math.random())];
    return funCity;
} //function gives random city, if user does not like, create if statement later and then rerun function.
let theCity = randomDestination(destination);
     

//commit done


//restaurant needs to be random, create array of restaurants, create function
let restaurant = ["Seafood", "BBQ", "Chinese", "Pizza"];

function randomRestaurant(randomEats){
    let yummyFood = restaurant[Math.floor(restaurant.length * Math.random())];
    return yummyFood;
}
let whatFood = randomRestaurant(restaurant);

//commit done
//create random transportation
//needs function, create array first
let transportation = ["Car", "Bus", "Motorcycle", "Helicopter"];

function randomTransportation(randomWheels){
    let hotWheels = transportation[Math.floor(transportation.length * Math.random())];
    return hotWheels;
}
let myRide = randomTransportation(transportation);

//commit done
//random entertainment
//array, function, create random statement in function, check to make sure wording and sequenc is correct
//return new variable in function
// create new variable to store function inside of and console log it

let entertainment = ["Going clubbing", "Movies and then drinks", "Going to an indoor golf range", "Go sight seeing"];

function randomEntertainment(randomFun){
    let whatToDo = entertainment[Math.floor(entertainment.length * Math.random())];
    return whatToDo;
}
let thisWillBeFun = randomEntertainment(entertainment);

//commit done
// have to prompt user to ask if ready for a great day
//once user says yes, run all four functions
// If statement for if user is not happen with results, run again
//else statment to include that user is happen with choices and will print that day trip is complete

let userInput = prompt("Are you ready for a fun day?!?");

function askUserForFunDay(funDayChoice){
    if(userInput === "yes"){
    console.log("Generating your fun, exciting day now...");
    }else{
    console.log("You suck");
    }
}

askUserForFunDay(userInput);
console.log(theCity);  
console.log(whatFood);
console.log(myRide);
console.log(thisWillBeFun);
 //while loop would be better bc idk how many times user will want to change selection
 
