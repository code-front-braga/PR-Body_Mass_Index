// TODO: Renomear Variáveis e Funções;

import { BMIClassifications } from './data.js';
import { BMICalculator, displayBMIContent, getBMIInfo } from './utils.js';

export const sendFormButton = document.querySelector('.send-form-button') as HTMLButtonElement;

export const inputName = document.querySelector('#user-name') as HTMLInputElement;
export const inputHeight = document.querySelector('#user-height') as HTMLInputElement;
export const inputWeight = document.querySelector('#user-weight') as HTMLInputElement;

const spanName = document.querySelector('.bmi-info-container h2 span') as HTMLSpanElement;
const h2Result = document.querySelector('.header-result-container h2') as HTMLElement;
const spanBMIResult = document.querySelector('.header-result-container h3 span') as HTMLSpanElement;
const pTips = document.querySelector('.tips-content p') as HTMLParagraphElement;

// TODO: Verificar onde colocar essa função;
function checkIfInputsAreFilled() {
  const regexForStrings = /^[A-Za-z\s]+$/;
  const onlyNumbers = /^\d+$/;

  sendFormButton.disabled =
    !inputName.value.match(regexForStrings) || !inputHeight.value.match(onlyNumbers) || !inputWeight.value;
}

// TODO: Verificar onde colocar essa função;
function addInputEventListener(inputs: HTMLInputElement[]) {
  inputs.forEach(input => {
    input.addEventListener('input', checkIfInputsAreFilled);
  });
}

export function displayBMIInfo() {
  const weight = Number(inputWeight.value);
  const height = Number(inputHeight.value);

  const BMIResult = BMICalculator({ weight, height });

  const { isUnderWeight, isNormalWeight, isOverWeight, isObesityClassOne, isObesityClassTwo } = getBMIInfo(BMIResult);

  const {
    BMIIsUnderWeight,
    BMIIsNormalWeight,
    BMIIsOverWeight,
    BMIIsObesityClassOne,
    BMIIsObesityClassTwo,
    BMIIsObesityClassThree,
  } = BMIClassifications;

  spanName.textContent = inputName.value;
  spanBMIResult.textContent = BMIResult.toFixed(2);

  switch (true) {
    case isUnderWeight:
      displayBMIContent({ title: BMIIsUnderWeight.title, text: BMIIsUnderWeight.text, h2: h2Result, p: pTips });
      break;

    case isNormalWeight:
      displayBMIContent({ title: BMIIsNormalWeight.title, text: BMIIsNormalWeight.text, h2: h2Result, p: pTips });
      break;

    case isOverWeight:
      displayBMIContent({ title: BMIIsOverWeight.title, text: BMIIsOverWeight.text, h2: h2Result, p: pTips });
      break;

    case isObesityClassOne:
      displayBMIContent({ title: BMIIsObesityClassOne.title, text: BMIIsObesityClassOne.text, h2: h2Result, p: pTips });
      break;

    case isObesityClassTwo:
      displayBMIContent({ title: BMIIsObesityClassTwo.title, text: BMIIsObesityClassTwo.text, h2: h2Result, p: pTips });

      break;

    default:
      displayBMIContent({
        title: BMIIsObesityClassThree.title,
        text: BMIIsObesityClassThree.text,
        h2: h2Result,
        p: pTips,
      });
      break;
  }
}

// TODO: Verificar onde colocar essa função;
export function resetInputs(inputs: HTMLInputElement[]) {
  sendFormButton.disabled = true;

  inputs.forEach(input => {
    input.value = '';
  });
}

addInputEventListener([inputName, inputHeight, inputWeight]);
window.addEventListener('load', checkIfInputsAreFilled);
