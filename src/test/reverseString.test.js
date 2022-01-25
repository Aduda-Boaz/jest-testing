const reverseString = require('../reverseString');

test('should return a reverse string', () => {
  expect(reverseString('coding')).toBe('gnidoc');
});
