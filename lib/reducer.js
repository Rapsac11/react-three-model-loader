'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _modelLoaderReducer = require('./modelLoaderReducer');

var _modelLoaderReducer2 = _interopRequireDefault(_modelLoaderReducer);

var _someOtherReducer = require('./someOtherReducer');

var _someOtherReducer2 = _interopRequireDefault(_someOtherReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  modelLoaderReducer: _modelLoaderReducer2.default,
  someOtherReducer: _someOtherReducer2.default
});