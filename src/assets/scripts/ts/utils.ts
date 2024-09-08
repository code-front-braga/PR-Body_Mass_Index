interface BMICalculatorProps {
  weight: number;
  height: number;
}

export function BMICalculator({ weight, height }: BMICalculatorProps): number {
  const bmi = (weight / Math.pow(height, 2)) * 10000;

  return bmi;
}

export function getBMIInfo(bmiResult: number) {
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

interface DisplayBMIContentProps {
  title: string;
  text: string;
  h2: HTMLElement;
  p: HTMLParagraphElement;
}

export function displayBMIContent({ title, text, h2, p }: DisplayBMIContentProps) {
  h2.textContent = title;
  p.innerHTML = text;
}
