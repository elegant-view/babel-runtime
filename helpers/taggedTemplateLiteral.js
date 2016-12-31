define(["exports", "babel-runtime/core-js/object/define-properties", "babel-runtime/core-js/object/freeze"], function (exports, _defineProperties, _freeze) {
  "use strict";

  exports.__esModule = true;

  var _defineProperties2 = _interopRequireDefault(_defineProperties);

  var _freeze2 = _interopRequireDefault(_freeze);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = function (strings, raw) {
    return (0, _freeze2.default)((0, _defineProperties2.default)(strings, {
      raw: {
        value: (0, _freeze2.default)(raw)
      }
    }));
  };
});