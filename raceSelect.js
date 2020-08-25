// Script for adding functionality to race images

// Get all of the race images and assign them to an array
const raceBoxes = document.querySelectorAll(".race_box");

// This sets the selectedRace to null by default, because no race is selected. This will be used for the submit error check.
let selectedRace = null;

// Have a function that selects the race. The selected race highlights the image by giving a border color.
// Before doing so, make sure that if there is already one selected to de-select that one.
// In addition, make sure to add/remove 'selected_race' id from respective elements. This will be used to determine the race when we submit the data 

// Add event listeners to all race images using selected Race
raceBoxes.forEach(box => {
    box.addEventListener('click', event => {
        if(selectedRace !== null) {
            selectedRace.style.border = "none";
            selectedRace.classList.remove('selected_race');
        }
    
        box.style.border = "1px solid red";
        box.classList.add('selected_race');
        selectedRace = box;
    })
});