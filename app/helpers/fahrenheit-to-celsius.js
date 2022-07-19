import { helper } from '@ember/component/helper';

export function fahrenheitToCelsius(fahrenheit) {
  return Math.floor(((fahrenheit - 32) * 5) / 9);
}

export default helper(fahrenheitToCelsius);
