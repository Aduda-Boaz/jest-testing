const capitalize = require('../capitalize');

test('should return same string with first letter capitalized', () => {
  expect(capitalize('javascript')).toBe('Javascript');
});
