// Script for storing values for character

const createCharacter = function() {
    return {
        name: '',
        class: '',
        desc: '',
        hp: 0,
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        race: '',
        skillRanks: {
            acrobatics: 0,
            appraise: 0,
            bluff: 0,
            climb: 0,
            craft: 0,
            diplomacy: 0,
            disableDevice: 0,
            disguise: 0,
            escapeArt: 0,
            fly: 0,
            handleAnimal: 0,
            heal: 0,
            intimidate: 0,
            knowledgeArcana: 0,
            knowledgeDungeon: 0,
            knowledgeEngineering: 0,
            knowledgeGeo: 0,
            knowledgeHistory: 0,
            knowledgeLocal: 0,
            knowledgeNature: 0,
            knowledgeNoble: 0,
            knowledgePlane: 0,
            knowledgeReligion: 0,
            linguistics: 0,
            perception: 0,
            perform: 0,
            profession: 0,
            ride: 0,
            senseMotive: 0,
            sleightOfHand: 0,
            spellcraft: 0,
            stealth: 0,
            survival: 0,
            swim: 0,
            useMagicDevice: 0
        },

        setAbilityScore(score, value) {
            this[score] = value;
        }
    }
}

const myGuy = createCharacter();
myGuy.setAbilityScore('dex', 5)
console.log(myGuy.dex);