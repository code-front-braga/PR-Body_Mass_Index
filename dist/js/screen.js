// TODO: Renomear Variáveis e Funções;
import { BMIClassifications } from './data.js';
import { calculateBMI, displayBMIContent, getBMIClassification } from './utils.js';
export const nameInput = document.querySelector('#user-name');
export const heightInput = document.querySelector('#user-height');
export const weightInput = document.querySelector('#user-weight');
const nameSpanElement = document.querySelector('.bmi-info-container h2 span');
const bmiResultSpanElement = document.querySelector('.header-result-container h3 span');
export function showBMIInformation() {
    const userWeight = Number(weightInput.value);
    const userHeight = Number(heightInput.value);
    const calculatedBMI = calculateBMI({ userWeight, userHeight });
    const { isUnderweight, isNormalWeight, isOverweight, isObesityClassOne, isObesityClassTwo } = getBMIClassification(calculatedBMI);
    const { underweightClassification, normalWeightClassification, overweightClassification, obesityClassOneClassification, obesityClassTwoClassification, obesityClassThreeClassification, } = BMIClassifications;
    nameSpanElement.textContent = nameInput.value;
    bmiResultSpanElement.textContent = calculatedBMI.toFixed(2);
    switch (true) {
        case isUnderweight:
            displayBMIContent({
                title: underweightClassification.title,
                text: underweightClassification.text,
            });
            break;
        case isNormalWeight:
            displayBMIContent({
                title: normalWeightClassification.title,
                text: normalWeightClassification.text,
            });
            break;
        case isOverweight:
            displayBMIContent({
                title: overweightClassification.title,
                text: overweightClassification.text,
            });
            break;
        case isObesityClassOne:
            displayBMIContent({
                title: obesityClassOneClassification.title,
                text: obesityClassOneClassification.text,
            });
            break;
        case isObesityClassTwo:
            displayBMIContent({
                title: obesityClassTwoClassification.title,
                text: obesityClassTwoClassification.text,
            });
            break;
        default:
            displayBMIContent({
                title: obesityClassThreeClassification.title,
                text: obesityClassThreeClassification.text,
            });
            break;
    }
}
