define(["exports", "babel-runtime/core-js/symbol/iterator", "babel-runtime/core-js/symbol", "babel-runtime/core-js/promise"], function (exports, _iterator, _symbol, _promise) {
  "use strict";

  exports.__esModule = true;

  var _iterator2 = _interopRequireDefault(_iterator);

  var _symbol2 = _interopRequireDefault(_symbol);

  var _promise2 = _interopRequireDefault(_promise);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = function (inner, awaitWrap) {
    var iter = {},
        waiting = false;

    function pump(key, value) {
      waiting = true;
      value = new _promise2.default(function (resolve) {
        resolve(inner[key](value));
      });
      return {
        done: false,
        value: awaitWrap(value)
      };
    }

    ;

    if (typeof _symbol2.default === "function" && _iterator2.default) {
      iter[_iterator2.default] = function () {
        return this;
      };
    }

    iter.next = function (value) {
      if (waiting) {
        waiting = false;
        return value;
      }

      return pump("next", value);
    };

    if (typeof inner.throw === "function") {
      iter.throw = function (value) {
        if (waiting) {
          waiting = false;
          throw value;
        }

        return pump("throw", value);
      };
    }

    if (typeof inner.return === "function") {
      iter.return = function (value) {
        return pump("return", value);
      };
    }

    return iter;
  };
});