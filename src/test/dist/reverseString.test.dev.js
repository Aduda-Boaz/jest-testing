"use strict";

var reverseString = require('../reverseString');

test('should return a reverse string', function () {
  expect(reverseString('coding')).toBe('gnidoc');
});