interface calculateBMIProps {
  userWeight: number;
  userHeight: number;
}

export function calculateBMI({ userWeight, userHeight }: calculateBMIProps): number {
  const bmi = (userWeight / Math.pow(userHeight, 2)) * 10000;

  return bmi;
}

interface BMIClassificationProps {
  isUnderweight: boolean;
  isNormalWeight: boolean;
  isOverweight: boolean;
  isObesityClassOne: boolean;
  isObesityClassTwo: boolean;
  isObesityClassThree: boolean;
}

export function getBMIClassification(bmiResult: number): BMIClassificationProps {
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

interface BMIContentProps {
  title: string;
  text: string;
}

export function displayBMIContent({ title, text }: BMIContentProps): void {
  const resultHeading = document.querySelector('.header-result-container h2') as HTMLElement;
  const tipsParagraph = document.querySelector('.tips-content p') as HTMLParagraphElement;

  resultHeading.textContent = title;
  tipsParagraph.innerHTML = text;
}
