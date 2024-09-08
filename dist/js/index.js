import { displayBMIInfo, inputHeight, inputName, inputWeight, resetInputs, sendFormButton } from './screen.js';
sendFormButton.addEventListener('click', e => {
    e.preventDefault();
    displayBMIInfo();
    resetInputs([inputName, inputWeight, inputHeight]);
});
