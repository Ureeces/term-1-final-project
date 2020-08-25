// Script for adding functionality to race images

// Get all of the race images and assign them to an array
const raceImages = document.querySelectorAll(".race");

// This sets the selectedRace to null by default, because no race is selected. This will be used for the submit error check.
const selectedRace = null;

// Have a function that selects the race. The selected race highlights the image by giving a border color, as well as 
const selectedRace = function(image) {
    const imageID = image.id;
    selectedRace = document.querySelector(imageID);
    selectedRace.style.border = "2px solid red";
}

// add an event listener to all race images
for(const image of raceImages) {
    image.addEventListener('click', selectedRace);
}