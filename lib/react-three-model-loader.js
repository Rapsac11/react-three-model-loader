'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modelLoaderReducer = exports.OrbitControls = exports.ThreeDModel = exports.loadModelLocally = exports.loadModel = undefined;

var _three = require('three');

var THREE = _interopRequireWildcard(_three);

var _modelLoaderReducer = require('./modelLoaderReducer');

var _modelLoaderReducer2 = _interopRequireDefault(_modelLoaderReducer);

var _ThreeDModel = require('./components/ThreeDModel');

var _ThreeDModel2 = _interopRequireDefault(_ThreeDModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var OrbitControls = require('./util/three-orbit-controls.js')(THREE);

exports.loadModel = _modelLoaderReducer.loadModel;
exports.loadModelLocally = _modelLoaderReducer.loadModelLocally;
exports.ThreeDModel = _ThreeDModel2.default;
exports.OrbitControls = OrbitControls;
exports.modelLoaderReducer = _modelLoaderReducer2.default;