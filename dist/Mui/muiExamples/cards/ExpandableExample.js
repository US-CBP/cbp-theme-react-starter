'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Card = require('material-ui/Card');

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardExampleExpandable = function CardExampleExpandable() {
  return _react2.default.createElement(
    _Card.Card,
    null,
    _react2.default.createElement(_Card.CardHeader, { title: 'Without Avatar', subtitle: 'Subtitle', actAsExpander: true, showExpandableButton: true }),
    _react2.default.createElement(
      _Card.CardActions,
      null,
      _react2.default.createElement(_FlatButton2.default, { label: 'Action1' }),
      _react2.default.createElement(_FlatButton2.default, { label: 'Action2' })
    ),
    _react2.default.createElement(
      _Card.CardText,
      { expandable: true },
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'
    )
  );
};

exports.default = CardExampleExpandable;