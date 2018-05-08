'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePosInfo = exports.UPDATE_POS_INFO = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case UPDATE_POS_INFO:
      {
        return (0, _extends4.default)({}, state, {
          displayVariables: (0, _extends4.default)({}, state.displayVariables, (0, _defineProperty3.default)({}, payload['0'], state.displayVariables[payload['0']] + payload['1']))
        });
      }
    default:
      return state;
  }
};

var _three = require('three');

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UPDATE_POS_INFO = exports.UPDATE_POS_INFO = 'UPDATE_POS_INFO';

var updatePosInfo = exports.updatePosInfo = function updatePosInfo(item, direction) {
  return function (dispatch) {
    var valueSwitch = function valueSwitch(item) {
      return {
        "vectorX": 5,
        "vectorY": 5,
        "vectorZ": 5,
        "quarternionVectorX": 0.05,
        "quarternionVectorY": 0.05,
        "quarternionVectorZ": 0.05
      }[item];
    };
    var directionSwitch = function directionSwitch(direction) {
      return {
        "up": 1,
        "down": -1
      }[direction];
    };
    var value = valueSwitch(item) * directionSwitch(direction);
    dispatch({
      type: UPDATE_POS_INFO,
      payload: [item, value]

    });
  };
};

var initialState = {
  loadedObject: null,
  displayVariables: {
    vectorX: 0,
    vectorY: 400,
    vectorZ: 100,
    quarternionVectorX: 0.9,
    quarternionVectorY: 0,
    quarternionVectorZ: 0
  }
};