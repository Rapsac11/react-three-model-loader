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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n        text-align: center;\n        font-size: 42px;\n        color: #495057;\n        -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */\n        -moz-animation: fadein 2s; /* Firefox < 16 */\n        -ms-animation: fadein 2s; /* Internet Explorer */\n        -o-animation: fadein 2s; /* Opera < 12.1 */\n        animation: fadein 3s linear forwards;\n        @keyframes fadeinout {\n          0%,100% { opacity: 0; }\n          50% { opacity: 1; }\n        }\n        @keyframes fadein {\n          0% { opacity: 0; }\n          50% { opacity: 1; }\n        }\n    '], ['\n        text-align: center;\n        font-size: 42px;\n        color: #495057;\n        -webkit-animation: fadein 2s; /* Safari, Chrome and Opera > 12.1 */\n        -moz-animation: fadein 2s; /* Firefox < 16 */\n        -ms-animation: fadein 2s; /* Internet Explorer */\n        -o-animation: fadein 2s; /* Opera < 12.1 */\n        animation: fadein 3s linear forwards;\n        @keyframes fadeinout {\n          0%,100% { opacity: 0; }\n          50% { opacity: 1; }\n        }\n        @keyframes fadein {\n          0% { opacity: 0; }\n          50% { opacity: 1; }\n        }\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _SampleThreeComponent = require('../SampleThreeComponent');

var _SampleThreeComponent2 = _interopRequireDefault(_SampleThreeComponent);

var _LoadedModel = require('../LoadedModel');

var _LoadedModel2 = _interopRequireDefault(_LoadedModel);

var _ControlPanel = require('../ControlPanel');

var _ControlPanel2 = _interopRequireDefault(_ControlPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = function (_Component) {
  (0, _inherits3.default)(Wrapper, _Component);

  function Wrapper() {
    (0, _classCallCheck3.default)(this, Wrapper);
    return (0, _possibleConstructorReturn3.default)(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).apply(this, arguments));
  }

  (0, _createClass3.default)(Wrapper, [{
    key: 'render',
    value: function render() {

      var Container = (0, _reactEmotion2.default)('div')(_templateObject);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          Container,
          null,
          _react2.default.createElement(_SampleThreeComponent2.default, null),
          _react2.default.createElement(_ControlPanel2.default, null)
        )
      );
    }
  }]);
  return Wrapper;
}(_react.Component);

exports.default = Wrapper;