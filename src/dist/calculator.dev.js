"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Calculator =
/*#__PURE__*/
function () {
  function Calculator(a, b) {
    _classCallCheck(this, Calculator);

    this.first = a;
    this.second = b;
  }

  _createClass(Calculator, [{
    key: "add",
    value: function add() {
      return this.first + this.second;
    }
  }, {
    key: "substract",
    value: function substract() {
      return this.first - this.second;
    }
  }, {
    key: "divide",
    value: function divide() {
      if (this.second !== 0) return this.first / this.second;
      return 'division error';
    }
  }, {
    key: "multiply",
    value: function multiply() {
      return this.first * this.second;
    }
  }]);

  return Calculator;
}();

module.exports = Calculator;