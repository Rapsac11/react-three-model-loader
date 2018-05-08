'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _reactThreeRenderer = require('react-three-renderer');

var _reactThreeRenderer2 = _interopRequireDefault(_reactThreeRenderer);

var _three = require('three');

var THREE = _interopRequireWildcard(_three);

var _reactRedux = require('react-redux');

var _ThreeDModel = require('../ThreeDModel');

var _ThreeDModel2 = _interopRequireDefault(_ThreeDModel);

var _modelLoaderReducer = require('../../modelLoaderReducer');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OrbitControls = require('../../util/three-orbit-controls.js')(THREE);

var SampleThreeComponent = function (_Component) {
  (0, _inherits3.default)(SampleThreeComponent, _Component);

  function SampleThreeComponent(props, context) {
    (0, _classCallCheck3.default)(this, SampleThreeComponent);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SampleThreeComponent.__proto__ || Object.getPrototypeOf(SampleThreeComponent)).call(this, props, context));

    _this.state = {
      loadedModel: null
    };
    _this.cameraPosition = new THREE.Vector3(0, 400, 100);
    _this.cameraQuaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0.9, 0, 0), -Math.PI / 2);
    return _this;
  }

  (0, _createClass3.default)(SampleThreeComponent, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this2 = this;

      (0, _modelLoaderReducer.loadModelLocally)('https://s3-ap-southeast-2.amazonaws.com/three.json.zonemodel/ZoneModel.json', 'dummy').then(function (loadedObject) {
        console.log(loadedObject);_this2.setState({ loadedModel: loadedObject });
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var controls = new OrbitControls(this.refs.camera);
      this.controls = controls;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.controls.dispose();
      delete this.controls;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          model = _props.model,
          displayVariables = _props.displayVariables;
      var loadedModel = this.state.loadedModel;

      var width = window.innerWidth;
      var height = 400;
      var aspectratio = width / height;

      var cameraprops = {
        fov: 75,
        aspect: aspectratio,
        near: 0.1,
        far: 1000,
        position: new THREE.Vector3(0, 40, 200),
        lookAt: new THREE.Vector3(0, 0, 0)
      };

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactThreeRenderer2.default,
          { mainCamera: 'maincamera', width: width, height: height, clearColor: 0xbcbcbc },
          _react2.default.createElement(
            'scene',
            null,
            _react2.default.createElement('perspectiveCamera', (0, _extends3.default)({ ref: 'camera', name: 'maincamera' }, cameraprops)),
            _react2.default.createElement('ambientLight', {
              color: new THREE.Color(0x333333)
            }),
            _react2.default.createElement('directionalLight', {
              color: new THREE.Color(0xFFFFFF),
              intensity: 1.5,
              position: new THREE.Vector3(0, 0, 60)
            }),
            _react2.default.createElement(_ThreeDModel2.default, { data: loadedModel, name: 'dummy' }),
            _react2.default.createElement(
              'mesh',
              {
                key: THREE.Math.generateUUID(),
                rotation: new THREE.Euler(-Math.PI / 2, 0, 0)
              },
              _react2.default.createElement('planeBufferGeometry', {
                width: 300,
                height: 300,
                widthSegments: 30,
                heightSegments: 30
              }),
              _react2.default.createElement('meshBasicMaterial', {
                opacity: 0.5,
                color: 0x333000,
                side: THREE.DoubleSide,
                wireframe: true
              })
            )
          )
        )
      );
    }
  }]);
  return SampleThreeComponent;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    model: state.modelLoaderReducer.loadedObject
  };
}, {
  loadModel: _modelLoaderReducer.loadModel
})(SampleThreeComponent);