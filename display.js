const createButton = document.querySelector('#create');
const sheetCanvas = document.querySelector('#sheet_content');

const setListeners = function(divElement) {
    divElement.querySelector('#overlay').addEventListener('click', toggleSheet);
}

const clearListeners = function(divElement) {
    divElement.querySelector('#overlay').removeEventListener('click', toggleSheet);
}

const toggleSheet = function() {
    const currState = sheetCanvas.style.display;

    if(currState === 'none') {
        sheetCanvas.style.display = 'block';
        setListeners(sheetCanvas);
        createSheet();
    }

    else {
        sheetCanvas.style.display = 'none';
        clearListeners(sheetCanvas);
        clearSheet();
    }
}

createButton.addEventListener('click', toggleSheet);