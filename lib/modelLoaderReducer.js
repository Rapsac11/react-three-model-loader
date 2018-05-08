'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadModel = exports.loadModelLocally = exports.LOAD_MODEL = undefined;

var _extends3 = require('babel-runtime/helpers/extends');

var _extends4 = _interopRequireDefault(_extends3);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case 'LOAD_MODEL':
      {
        return (0, _extends4.default)({}, state, {
          loadedObject: (0, _extends4.default)({}, state.loadedObject, (0, _defineProperty3.default)({}, payload['1'], payload['0']))

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

var LOAD_MODEL = exports.LOAD_MODEL = 'LOAD_MODEL';

var loadModelLocally = exports.loadModelLocally = function loadModelLocally(url, name) {
  var loader = new THREE.JSONLoader();
  var loadedObject = "";
  return new Promise(function (resolve, reject) {
    loader.load(url, function (geometry) {
      if (true) {
        loadedObject = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
          vertexColors: THREE.FaceColors
        }));
        resolve((0, _defineProperty3.default)({}, name, loadedObject));
      } else {
        reject((0, _defineProperty3.default)({}, name, loadedObject));
      }
    });
  });
};

var loadModel = exports.loadModel = function loadModel(url, name) {
  return function (dispatch) {
    var loader = new THREE.JSONLoader();
    loader.load(url, function (geometry) {
      var loadedObject = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
        vertexColors: THREE.FaceColors
      }));
      console.log(loadedObject);
      dispatch({
        type: 'LOAD_MODEL',
        payload: [loadedObject, name]
      });
    });
  };
};

var initialState = {
  loadedObject: null
};