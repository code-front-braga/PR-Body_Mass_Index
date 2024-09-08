export function calculateBMI({ userWeight, userHeight }) {
    const bmi = (userWeight / Math.pow(userHeight, 2)) * 10000;
    return bmi;
}
export function getBMIClassification(bmiResult) {
    const isUnderweight = bmiResult < 19;
    const isNormalWeight = bmiResult >= 19 && bmiResult < 25;
    const isOverweight = bmiResult >= 25 && bmiResult < 30;
    const isObesityClassOne = bmiResult >= 30 && bmiResult < 35;
    const isObesityClassTwo = bmiResult >= 35 && bmiResult < 40;
    const isObesityClassThree = bmiResult >= 40;
    return {
        isUnderweight,
        isNormalWeight,
        isOverweight,
        isObesityClassOne,
        isObesityClassTwo,
        isObesityClassThree,
    };
}
export function displayBMIContent({ title, text }) {
    const resultHeading = document.querySelector('.header-result-container h2');
    const tipsParagraph = document.querySelector('.tips-content p');
    resultHeading.textContent = title;
    tipsParagraph.innerHTML = text;
}
