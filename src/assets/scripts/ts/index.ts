import { showBMIInformation, heightInput, nameInput, weightInput } from './screen.js';

const submitButton = document.querySelector('.send-form-button') as HTMLButtonElement;

function initializeForm() {
  submitButton.addEventListener('click', e => {
    e.preventDefault();

    showBMIInformation();
    clearFormInputs([nameInput, weightInput, heightInput]);
  });
}

function validateFormInputs() {
  const regexForStrings = /^[A-Za-z\s]+$/;
  const onlyNumbers = /^\d+$/;

  submitButton.disabled =
    !nameInput.value.match(regexForStrings) || !heightInput.value.match(onlyNumbers) || !weightInput.value;
}

function addInputValidationListeners(inputs: HTMLInputElement[]) {
  inputs.forEach(input => {
    input.addEventListener('input', validateFormInputs);
  });
}

export function clearFormInputs(inputs: HTMLInputElement[]) {
  submitButton.disabled = true;

  inputs.forEach(input => {
    input.value = '';
  });
}

addInputValidationListeners([nameInput, heightInput, weightInput]);
window.addEventListener('load', validateFormInputs);
initializeForm();
