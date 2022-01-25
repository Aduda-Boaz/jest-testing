"use strict";

var capitalize = require('../capitalize');

test('should return same string with first letter capitalized', function () {
  expect(capitalize('javascript')).toBe('Javascript');
});