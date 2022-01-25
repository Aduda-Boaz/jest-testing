const stringLength = require('../stringLength');
const testString = 'Project';

test('should return the length of a given string', () => {
  expect(stringLength(testString)).toBe(7);
});

test('should check if the length of a string is greater than 0 and less than 10', () => {
  expect(stringLength(testString)).toBeGreaterThan(0);
  expect(stringLength(testString)).toBeLessThan(10)
});