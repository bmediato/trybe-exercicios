// ./mass.ts

const units1 = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function convert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = units1.indexOf(fromUnit);
  const toIndex = units1.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
}