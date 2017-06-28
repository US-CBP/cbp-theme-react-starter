'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Snackbar = require('material-ui/Snackbar');

var _Snackbar2 = _interopRequireDefault(_Snackbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var setStateIsOpen = function setStateIsOpen(open, state, props) {
  return { open: open };
};

var defaultProps = {};

var propTypes = {};

var SnackbarSimple = function (_Component) {
  _inherits(SnackbarSimple, _Component);

  function SnackbarSimple(props) {
    _classCallCheck(this, SnackbarSimple);

    var _this = _possibleConstructorReturn(this, (SnackbarSimple.__proto__ || Object.getPrototypeOf(SnackbarSimple)).call(this, props));

    _this.state = {
      open: false
    };

    _this.handleRequestClose = function () {
      _this.setState({
        open: false
      });
    };

    return _this;
  }

  _createClass(SnackbarSimple, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props$initOpen = this.props.initOpen,
          initOpen = _props$initOpen === undefined ? false : _props$initOpen;

      this.setState(setStateIsOpen.bind(this, initOpen));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _nextProps$initOpen = nextProps.initOpen,
          initOpen = _nextProps$initOpen === undefined ? false : _nextProps$initOpen;

      this.setState(setStateIsOpen.bind(this, initOpen));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Snackbar2.default, _extends({
        open: this.state.open,
        message: 'Operation Saved Successfully',
        autoHideDuration: 4000,
        onRequestClose: this.handleRequestClose
      }, this.props));
    }
  }]);

  return SnackbarSimple;
}(_react.Component);

exports.default = SnackbarSimple;