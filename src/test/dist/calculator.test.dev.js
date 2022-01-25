"use strict";

var Calculator = require('../calculator');

var math1 = new Calculator(10, 5);
var math2 = new Calculator(6, 0);
describe('Given a class Calculator', function () {
  test('should return the operation add', function () {
    expect(math1.add()).toBe(15);
    expect(math2.add()).toBe(6);
  });
  test('should return the operation substract', function () {
    expect(math1.substract()).toBe(5);
    expect(math2.substract()).toBe(6);
  });
  test('should return the operation divide', function () {
    expect(math1.divide()).toBe(2);
    expect(math2.divide()).toBe('division error');
  });
  test('should return the operation multiply', function () {
    expect(math1.multiply()).toBe(50);
    expect(math2.multiply()).toBe(0);
  });
});