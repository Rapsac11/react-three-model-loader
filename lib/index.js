'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.history = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

require('./main.css');

require('bootstrap/dist/css/bootstrap.min.css');

var _reactRedux = require('react-redux');

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _reactRouter = require('react-router');

var _reactRouterRedux = require('react-router-redux');

var _redux = require('redux');

var _reducer = require('./reducer');

var _reducer2 = _interopRequireDefault(_reducer);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = exports.history = (0, _createBrowserHistory2.default)();
var middleWare = [_reduxThunk2.default, (0, _reactRouterRedux.routerMiddleware)(history)];

var store = _redux.applyMiddleware.apply(undefined, middleWare)(_redux.createStore)(_reducer2.default);

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouterRedux.ConnectedRouter,
    { history: history },
    _react2.default.createElement(_App2.default, null)
  )
), document.getElementById('app'));