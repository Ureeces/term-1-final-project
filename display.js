const createButton = document.querySelector('#create');
const sheetCanvas = document.querySelector('#sheet_content');

const displaySheet = function() {
    const currState = sheetCanvas.style.display;

    if(currState === 'none') {
        sheetCanvas.style.display = 'block';
        createSheet();
    }
}