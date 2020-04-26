import OriginDecimal from 'decimal.js-light';

const format = (num, defaultNumber = 0) =>
  Number(Number.isFinite(Number(num)) ? num : defaultNumber) || defaultNumber;
class Decimal extends OriginDecimal {
  constructor(num) {
    const number = format(num);
    super(number);
    if (num instanceof Decimal) {
      return num;
    }
    this.constructor = Decimal;
  }
  div(num) {
    return super.div.call(this, format(num, 1));
  }

  add(num) {
    const number = format(num);
    if (number) {
      return super.add.call(this, number);
    }
    return this;
  }
  mul(num) {
    return super.mul.call(this, format(num, 1));
  }
  minus(num) {
    const number = format(num);
    if (number) {
      return super.minus.call(this, number);
    }
    return this;
  }
}


export default function exDecimal(num) {
  return new Decimal(num);
}

window.exDecimal = exDecimal;

