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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n        text-align: center;\n        display: inline-block;\n        width: 100px;\n        height: 100px;\n        font-size: 10px;\n        color: #fff;\n    '], ['\n        text-align: center;\n        display: inline-block;\n        width: 100px;\n        height: 100px;\n        font-size: 10px;\n        color: #fff;\n    ']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n        text-align: center;\n        display: block;\n        width: 100px;\n        height: 20px;\n        font-size: 10px;\n        background-color: #fff;\n        color: #808080;\n    '], ['\n        text-align: center;\n        display: block;\n        width: 100px;\n        height: 20px;\n        font-size: 10px;\n        background-color: #fff;\n        color: #808080;\n    ']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n        text-align: center;\n        display: block;\n        width: 100px;\n        height: 20px;\n        font-size: 10px;\n        color: #fff;\n    '], ['\n        text-align: center;\n        display: block;\n        width: 100px;\n        height: 20px;\n        font-size: 10px;\n        color: #fff;\n    ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactEmotion = require('react-emotion');

var _reactEmotion2 = _interopRequireDefault(_reactEmotion);

var _reactRedux = require('react-redux');

var _someOtherReducer = require('../../someOtherReducer');

var _Wrapper = require('../Wrapper');

var _Wrapper2 = _interopRequireDefault(_Wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ControlledItem = function (_Component) {
  (0, _inherits3.default)(ControlledItem, _Component);

  function ControlledItem(props, context) {
    (0, _classCallCheck3.default)(this, ControlledItem);
    return (0, _possibleConstructorReturn3.default)(this, (ControlledItem.__proto__ || Object.getPrototypeOf(ControlledItem)).call(this, props, context));
  }

  (0, _createClass3.default)(ControlledItem, [{
    key: '_updatePosInfo',
    value: function _updatePosInfo(item, direction) {
      var updatePosInfo = this.props.updatePosInfo;

      updatePosInfo(item, direction);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var VariableContainer = (0, _reactEmotion2.default)('div')(_templateObject);

      var VariableButtonUp = (0, _reactEmotion2.default)('div')(_templateObject2);

      var VariableButtonDown = (0, _reactEmotion2.default)('div')(_templateObject2);

      var VariableName = (0, _reactEmotion2.default)('div')(_templateObject3);

      var VariableDisplay = (0, _reactEmotion2.default)('div')(_templateObject3);

      var _props = this.props,
          displayVariables = _props.displayVariables,
          item = _props.item;

      return _react2.default.createElement(
        VariableContainer,
        null,
        _react2.default.createElement(
          VariableName,
          null,
          item
        ),
        _react2.default.createElement(
          VariableButtonUp,
          {
            item: item,
            onClick: function onClick() {
              return _this2._updatePosInfo(item, 'up');
            }
          },
          '+'
        ),
        _react2.default.createElement(
          VariableDisplay,
          null,
          displayVariables[item]
        ),
        _react2.default.createElement(
          VariableButtonDown,
          {
            item: item,
            onClick: function onClick() {
              return _this2._updatePosInfo(item, 'down');
            }
          },
          '-'
        )
      );
    }
  }]);
  return ControlledItem;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    displayVariables: state.someOtherReducer.displayVariables
  };
}, {
  updatePosInfo: _someOtherReducer.updatePosInfo
})(ControlledItem);