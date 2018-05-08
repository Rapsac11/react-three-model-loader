'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactThreeRenderer = require('react-three-renderer');

var _reactThreeRenderer2 = _interopRequireDefault(_reactThreeRenderer);

var _three = require('three');

var THREE = _interopRequireWildcard(_three);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThreeDModel = function (_Component) {
  (0, _inherits3.default)(ThreeDModel, _Component);

  function ThreeDModel() {
    (0, _classCallCheck3.default)(this, ThreeDModel);
    return (0, _possibleConstructorReturn3.default)(this, (ThreeDModel.__proto__ || Object.getPrototypeOf(ThreeDModel)).apply(this, arguments));
  }

  (0, _createClass3.default)(ThreeDModel, [{
    key: 'createMaterial',
    value: function createMaterial(material) {
      var m = void 0;
      switch (material.type) {
        case 'MeshBasicMaterial':
          m = _react2.default.createElement('meshBasicMaterial', {
            color: material.color
          });
          break;
        case 'MeshLambertMaterial':
          m = _react2.default.createElement('meshLambertMaterial', {
            transparent: material.transparent,
            alphaTest: material.alphaTest,
            side: material.side,
            opacity: material.opacity,
            visible: material.visible,
            color: material.color,
            emissive: material.emissive,
            wireframe: material.wireframe,
            wireframeLinewidth: material.wireframeLinewidth
          });
          break;
        default:
          m = null;
      }
      return m;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          name = _props.name;


      if (!data) {
        return null;
      } else {
        return _react2.default.createElement(
          'mesh',
          {
            rotation: new THREE.Euler(-Math.PI / 2, 0, 0)
          },
          _react2.default.createElement('geometry', {
            faces: data[name].geometry.faces,
            vertices: data[name].geometry.vertices,
            colors: data[name].geometry.colors,
            faceVertexUvs: data[name].geometry.faceVertexUvs
          }),
          this.createMaterial(data[name].material)
        );
      }
    }
  }]);
  return ThreeDModel;
}(_react.Component);

exports.default = ThreeDModel;