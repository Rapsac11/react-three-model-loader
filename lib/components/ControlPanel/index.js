'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n        text-align: center;\n        width: 600px;\n        height: 150px;\n        font-size: 42px;\n        background-color: #808080;\n    '], ['\n        text-align: center;\n        width: 600px;\n        height: 150px;\n        font-size: 42px;\n        background-color: #808080;\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactRedux = require('react-redux');

var _Wrapper = require('../Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

var _ControlledItem = require('../ControlledItem');

var _ControlledItem2 = _interopRequireDefault(_ControlledItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ControlPanel = function (_Component) {
  (0, _inherits3.default)(ControlPanel, _Component);

  function ControlPanel() {
    (0, _classCallCheck3.default)(this, ControlPanel);
    return (0, _possibleConstructorReturn3.default)(this, (ControlPanel.__proto__ || Object.getPrototypeOf(ControlPanel)).apply(this, arguments));
  }

  (0, _createClass3.default)(ControlPanel, [{
    key: 'render',
    value: function render() {

      var Panel = (0, _reactEmotion2.default)('div')(_templateObject);

      return _react2.default.createElement(
        Panel,
        null,
        _react2.default.createElement(_ControlledItem2.default, {
          item: 'vectorX'
        }),
        _react2.default.createElement(_ControlledItem2.default, {
          item: 'vectorY'
        }),
        _react2.default.createElement(_ControlledItem2.default, {
          item: 'vectorZ'
        }),
        _react2.default.createElement(_ControlledItem2.default, {
          item: 'quarternionVectorX'
        }),
        _react2.default.createElement(_ControlledItem2.default, {
          item: 'quarternionVectorY'
        }),
        _react2.default.createElement(_ControlledItem2.default, {
          item: 'quarternionVectorZ'
        })
      );
    }
  }]);
  return ControlPanel;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    displayVariables: state.someOtherReducer.displayVariables
  };
}, null)(ControlPanel);