// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { bemsMuiToggleButtonStyleSheet } from 'globalJs/tomisMuiStylesheets';
import createStyleSheet from 'material-ui/styles/createStyleSheet';
import createButtonSwitch from 'app/helpers/SwitchButtonBase';
import Button from 'material-ui/Button';

const ToggleButton = createButtonSwitch({
  styleSheet: bemsMuiToggleButtonStyleSheet,
  inputType: 'radio'
});

ToggleButton.displayName = 'ToggleButton';

export default ToggleButton;

export const ToggleButtonDocs = () => <span />;

ToggleButtonDocs.propTypes = {
  /**
   * If `true`, the component appears selected.
   */
  checked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /**
   * The CSS class name of the root element when selected.
   */
  checkedClassName: PropTypes.string,
  /**
   * Useful to extend the style applied to components.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * @ignore
   */
  defaultChecked: PropTypes.bool,
  /**
   * If `true`, the component disabled.
   */
  disabled: PropTypes.bool,
  /**
   * The CSS class name of the root element when disabled.
   */
  disabledClassName: PropTypes.string,
  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,
  /**
   * Properties applied to the `input` element.
   */
  inputProps: PropTypes.object,
  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: PropTypes.func,
  /*
   * @ignore
   */
  name: PropTypes.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} checked The `checked` value of the switch
   */
  onChange: PropTypes.func,
  /**
   * @ignore
   */
  tabIndex: PropTypes.string,
  /**
   * The value of the component.
   */
  value: PropTypes.string
};
