import { BMIClassifications } from './data.js';
import { BMICalculation } from './utils.js';

const inputName = document.querySelector('#user-name') as HTMLInputElement;
const inputHeight = document.querySelector('#user-height') as HTMLInputElement;
const inputWeight = document.querySelector('#user-weight') as HTMLInputElement;

const spanName = document.querySelector('.bmi-info-container h2 span') as HTMLSpanElement;
const h2Result = document.querySelector('.header-result-container h2') as HTMLElement;
const spanBMIResult = document.querySelector('.header-result-container h3 span') as HTMLSpanElement;
const pTips = document.querySelector('.tips-content p') as HTMLParagraphElement;

const sendFormButton = document.querySelector('.send-form-button') as HTMLButtonElement;

function checkIfInputsAreFilled() {
  const regexForStrings = /^[A-Za-z]+$/;

  if (!inputName.value.match(regexForStrings) || !inputHeight.value || !inputWeight.value) {
    sendFormButton.disabled = true;
  } else {
    sendFormButton.disabled = false;
  }
}

function addInputEventListener(inputs: HTMLInputElement[]) {
  inputs.forEach(input => {
    input.addEventListener('input', checkIfInputsAreFilled);
  });
}

addInputEventListener([inputName, inputHeight, inputWeight]);

window.addEventListener('load', checkIfInputsAreFilled);

sendFormButton.addEventListener('click', e => {
  e.preventDefault();

  spanName.textContent = inputName.value;

  const bmiResult = BMICalculation(Number(inputWeight.value), Number(inputHeight.value));

  spanBMIResult.textContent = bmiResult.toFixed(2);

  const {
    BMIIsUnderWeight,
    BMIIsNormalWeight,
    BMIIsOverWeight,
    BMISIsObesityClassOne,
    BMISIsObesityClassTwo,
    BMISIsObesityClassThree,
  } = BMIClassifications;

  switch (true) {
    case bmiResult < 19:
      h2Result.textContent = BMIIsUnderWeight.title;
      pTips.innerHTML = BMIIsUnderWeight.text;
      break;

    case bmiResult >= 19 && bmiResult < 25:
      h2Result.textContent = BMIIsNormalWeight.title;
      pTips.innerHTML = BMIIsNormalWeight.text;
      break;

    case bmiResult >= 25 && bmiResult < 30:
      h2Result.textContent = BMIIsOverWeight.title;
      pTips.innerHTML = BMIIsOverWeight.text;
      break;

    case bmiResult >= 30 && bmiResult < 35:
      h2Result.textContent = BMISIsObesityClassOne.title;
      pTips.innerHTML = BMISIsObesityClassOne.text;
      break;

    case bmiResult >= 35 && bmiResult < 40:
      h2Result.textContent = BMISIsObesityClassTwo.title;
      pTips.innerHTML = BMISIsObesityClassTwo.text;
      break;

    default:
      h2Result.textContent = BMISIsObesityClassThree.title;
      pTips.innerHTML = BMISIsObesityClassThree.text;
      break;
  }

  resetInputs([inputName, inputHeight, inputWeight]);
});

export function resetInputs(inputs: HTMLInputElement[]) {
  sendFormButton.disabled = true;

  inputs.forEach(input => {
    input.value = '';
  });
}
