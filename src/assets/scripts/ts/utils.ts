export function BMICalculation(weight: number, height: number): number {
  return (weight / Math.pow(height, 2)) * 10000;
}
