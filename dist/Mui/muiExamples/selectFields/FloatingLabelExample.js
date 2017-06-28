'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SelectField = require('material-ui/SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var items = [_react2.default.createElement(_MenuItem2.default, { key: 1, value: 1, primaryText: 'Never' }), _react2.default.createElement(_MenuItem2.default, { key: 2, value: 2, primaryText: 'Every Night' }), _react2.default.createElement(_MenuItem2.default, { key: 3, value: 3, primaryText: 'Weeknights' }), _react2.default.createElement(_MenuItem2.default, { key: 4, value: 4, primaryText: 'Weekends' }), _react2.default.createElement(_MenuItem2.default, { key: 5, value: 5, primaryText: 'Weekly' })];

/**
 * `SelectField` supports a floating label with the `floatingLabelText` property.
 * This can be fixed in place with the `floatingLabelFixed` property,
 * and can be customised with the `floatingLabelText` property.
 */

var SelectFieldExampleFloatingLabel = function (_Component) {
  _inherits(SelectFieldExampleFloatingLabel, _Component);

  function SelectFieldExampleFloatingLabel() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SelectFieldExampleFloatingLabel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectFieldExampleFloatingLabel.__proto__ || Object.getPrototypeOf(SelectFieldExampleFloatingLabel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: null
    }, _this.handleChange = function (event, index, value) {
      return _this.setState({ value: value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SelectFieldExampleFloatingLabel, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _SelectField2.default,
          { value: this.state.value, onChange: this.handleChange, floatingLabelText: 'Floating Label Text' },
          items
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _SelectField2.default,
          {
            value: this.state.value,
            onChange: this.handleChange,
            floatingLabelText: 'Floating Label Text',
            floatingLabelFixed: true,
            hintText: 'Hint text'
          },
          items
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          _SelectField2.default,
          { value: this.state.value, onChange: this.handleChange, floatingLabelText: 'Styled Floating Label Text', floatingLabelStyle: { color: 'red' } },
          items
        )
      );
    }
  }]);

  return SelectFieldExampleFloatingLabel;
}(_react.Component);

exports.default = SelectFieldExampleFloatingLabel;