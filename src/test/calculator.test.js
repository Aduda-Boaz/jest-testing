const Calculator = require('../calculator');
const math1 = new Calculator(10, 5);
const math2 = new Calculator(6, 0);

describe('Given a class Calculator', () => {
  test('should return the operation add', () => {
    expect(math1.add()).toBe(15);
    expect(math2.add()).toBe(6);
  });
  
  test('should return the operation substract', () => {
    expect(math1.substract()).toBe(5);
    expect(math2.substract()).toBe(6);
  });

  test('should return the operation divide', () => {
    expect(math1.divide()).toBe(2);
    expect(math2.divide()).toBe('division error');
  });

  test('should return the operation multiply', () => {
    expect(math1.multiply()).toBe(50);
    expect(math2.multiply()).toBe(0);
  });  
})