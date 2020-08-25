// Script for collecting the data and then building the sheet by appending child elements of the appropriate kind
// 1. For each input, (don't forget the IMAGE selector) make sure there is a value, and that it is not empty.
// 1a. If any are empty, alert the user.
// 1b. For the image input, look for the element that has 'selected_class' as a class. If it isn't present, then 
// 2. If there are false inputs, then alert the user to it
// 2a (Stretch goal) - If there is incorrect input, inform the user as such.
// 3. Once user has passed error checks, create and append elements as needed
// Error Checker - returns true if there is a missing input value
const checkForEmpties = function() {
    const inputs = document.querySelectorAll('input');

    // Check each input
    for(const input of inputs) {
        if(input.value === '') {
            return false;
        }
    }

    // Check the image
    const checkClass = document.querySelector('.selected_class');
    if(checkClass === null) {
        return false;
    }

    return true;
}

const createSheet = function() {
    const sheet = document.querySelector('#sheet_content');
    
    if(checkForEmpties()) {
        alert("HALT! You have missed an inquiry on your form.");
    }

    else {
        // Name 
        const charName = document.querySelector("char_name");
        charName.innerText = document.querySelector('name_in').value;

        // Class
        const charClass = document.querySelector("char_class");
        charClass.innerText = document.querySelector('class_in').value;
    }
}

// Latch these functions onto our button

