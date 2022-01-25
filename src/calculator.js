class Calculator {
  constructor(a, b) {
    this.first = a;
    this.second = b;
  }

  add() {
    return this.first + this.second;
  }

  substract() {
    return this.first - this.second;
  }

  divide () {
    if (this.second !== 0) return (this.first / this.second);
    return 'division error';
  }

  multiply() {
    return this.first * this.second;
  }
}
module.exports = Calculator;