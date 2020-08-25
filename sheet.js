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

        // Description
        const charDesc = document.querySelector("char_desc");
        charDesc.innerText = document.querySelector('desc_in').value;

        // HP
        const charHP = document.querySelector("char_hp");
        charHP.innerText = document.querySelector('hp_in').value;

        // Str
        const charStr = document.querySelector("char_str");
        charStr.innerText = document.querySelector('str_in').value;

        // Dex
        const charDex = document.querySelector("char_dex");
        charDex.innerText = document.querySelector('dex_in').value;

        // Con
        const charCon = document.querySelector("char_con");
        charCon.innerText = document.querySelector('con_in').value;

        // Int
        const charInt = document.querySelector("char_int");
        charInt.innerText = document.querySelector('int_in').value;

        // Wis
        const charWis = document.querySelector("char_wis");
        charWis.innerText = document.querySelector('wis_in').value;

        // Cha
        const charCha = document.querySelector("char_cha");
        charCha.innerText = document.querySelector('cha_in').value;

        // Image
        const charRace = document.querySelector("char_race");
        const charRaceDesc = document.querySelector("char_race_desc");

        charRace.src= document.querySelector('.selected_class').src;
        charRaceDesc.innerText = document.querySelector('.selected_class').alt;
    }
}

// Latch these functions onto our button

