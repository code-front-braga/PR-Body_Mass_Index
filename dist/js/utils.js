export function BMICalculator({ weight, height }) {
    const bmi = (weight / Math.pow(height, 2)) * 10000;
    return bmi;
}
export function getBMIInfo(bmiResult) {
    const isUnderWeight = bmiResult < 19;
    const isNormalWeight = bmiResult >= 19 && bmiResult < 25;
    const isOverWeight = bmiResult >= 25 && bmiResult < 30;
    const isObesityClassOne = bmiResult >= 30 && bmiResult < 35;
    const isObesityClassTwo = bmiResult >= 35 && bmiResult < 40;
    const isObesityClassThree = bmiResult >= 40;
    return {
        isUnderWeight,
        isNormalWeight,
        isOverWeight,
        isObesityClassOne,
        isObesityClassTwo,
        isObesityClassThree,
    };
}
export function displayBMIContent({ title, text, h2, p }) {
    h2.textContent = title;
    p.innerHTML = text;
}
