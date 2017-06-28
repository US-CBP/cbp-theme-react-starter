'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// import pure from 'recompose/pure';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SvgIcon = require('material-ui/SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KuFrequency = function KuFrequency(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    _extends({}, props, { style: { width: '24px', height: '24px' } }),
    _react2.default.createElement(
      'g',
      { transform: 'scale(0.3),translate(-6, -14)' },
      _react2.default.createElement(
        'g',
        null,
        _react2.default.createElement('path', { d: 'M37.895,64.575c-0.227-0.544-0.76-0.899-1.351-0.899H24.643c-0.59,0-1.123,0.355-1.35,0.899l-7.594,18.8    c-0.189,0.451-0.139,0.969,0.132,1.375c0.271,0.408,0.728,0.652,1.218,0.652h27.091c0.489,0,0.946-0.244,1.217-0.652    c0.272-0.406,0.321-0.924,0.133-1.375L37.895,64.575z' }),
        _react2.default.createElement('path', { d: 'M46.732,51.182l10.661-12.934c0.824,0.307,1.79,0.129,2.454-0.535c0.906-0.907,0.906-2.378,0-3.286    c-0.907-0.907-2.378-0.907-3.287,0c-0.663,0.664-0.84,1.629-0.532,2.455L43.092,47.541L27.797,32.247    c-0.571-0.571-1.498-0.572-2.069,0c-2.145,2.145-3.734,4.713-4.724,7.635c-0.95,2.803-1.31,5.808-1.068,8.932    c0.337,4.364,1.821,8.634,4.277,12.443c0.141-0.015,0.285-0.023,0.429-0.023h11.901c1.581,0,2.996,0.942,3.604,2.401l4.468,10.701    c0.927,0.108,1.858,0.163,2.788,0.163h0.001c5.706,0,10.931-2.082,14.711-5.863c0.275-0.274,0.43-0.646,0.43-1.035    c0-0.388-0.154-0.76-0.43-1.034L46.732,51.182z' }),
        _react2.default.createElement('path', { d: 'M55.926,27.806c-0.733,0-1.329,0.595-1.329,1.328c0,0.733,0.596,1.328,1.329,1.328c4.018,0,7.288,3.269,7.288,7.288    c0,0.733,0.594,1.328,1.327,1.328s1.327-0.595,1.327-1.328C65.868,32.267,61.408,27.806,55.926,27.806z' }),
        _react2.default.createElement('path', { d: 'M55.926,20.998c-0.733,0-1.329,0.595-1.329,1.328c0,0.733,0.596,1.327,1.329,1.327c7.772,0,14.097,6.325,14.097,14.098    c0,0.733,0.594,1.328,1.327,1.328c0.732,0,1.329-0.595,1.329-1.328C72.679,28.513,65.162,20.998,55.926,20.998z' }),
        _react2.default.createElement('path', { d: 'M72.585,21.09c-4.45-4.451-10.367-6.902-16.659-6.902c-0.733,0-1.329,0.595-1.329,1.328c0,0.733,0.596,1.328,1.329,1.328    c5.584,0,10.833,2.174,14.781,6.124c3.95,3.948,6.125,9.199,6.125,14.783c0,0.733,0.594,1.328,1.327,1.328    s1.327-0.595,1.327-1.328C79.486,31.457,77.036,25.541,72.585,21.09z' })
      )
    )
  );
};
// KuFrequency = pure(KuFrequency);
KuFrequency.displayName = 'KuFrequency';
KuFrequency.muiName = 'SvgIcon';

exports.default = KuFrequency;