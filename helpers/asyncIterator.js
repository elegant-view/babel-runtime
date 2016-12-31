define(["exports", "babel-runtime/core-js/get-iterator", "babel-runtime/core-js/symbol/iterator", "babel-runtime/core-js/symbol/async-iterator", "babel-runtime/core-js/symbol"], function (exports, _getIterator2, _iterator, _asyncIterator, _symbol) {
  "use strict";

  exports.__esModule = true;

  var _getIterator3 = _interopRequireDefault(_getIterator2);

  var _iterator2 = _interopRequireDefault(_iterator);

  var _asyncIterator2 = _interopRequireDefault(_asyncIterator);

  var _symbol2 = _interopRequireDefault(_symbol);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = function (iterable) {
    if (typeof _symbol2.default === "function") {
      if (_asyncIterator2.default) {
        var method = iterable[_asyncIterator2.default];
        if (method != null) return method.call(iterable);
      }

      if (_iterator2.default) {
        return (0, _getIterator3.default)(iterable);
      }
    }

    throw new TypeError("Object is not async iterable");
  };
});