// Script for rolling stats and setting values on input

// roll d6 - returns a random number from 1-6
const rolld6 = function() {
    return Math.floor(Math.random() * 6) + 1;
}

// standardRoll - returns an array containing all of the rolls. The total is
// calculted by subtracting the smallest roll from the total of the 3 highest rolls.
const standardRoll = function() {
    const rolls = [];
    let total = 0;
    
    // Store all rolls into the array
    for(let i = 0; i < 4; i++) {
        const roll = rolld6();
        rolls.push(roll);
        total += roll;
    }

    let low = 6;
    // Calculate the lowest roll for total, then determine it.
    for(const roll of rolls) {
        if(roll <= low) {
            low = roll;
        }
    }
    total -= low;
    
    // Push the total into the array.
    rolls.push(total);
    
    return rolls;
}

// changeInputs - changes the inputs to match random rolls
const changeInputs = function() {
    const abilityScores = document.querySelectorAll(".abilityScore");

    for(const score of abilityScores) {
        const scoreRolls = standardRoll();
        score.value = scoreRolls[4];
    }
}

const rollButton = document.querySelector("#roll");
rollButton.addEventListener('click', changeInputs);

