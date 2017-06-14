import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from '../../TomisMui/FlatButton';
import Popover from '../../TomisMui/Popover';
import TextFieldSimple from '../../TomisMui/TextFieldSimple';

const setStateIsOpen = (isOpen, props, state) => {
  return { isOpen };
};

const setStateValue = (value, props, state) => {
  return { value };
};

const initState = { isOpen: false, value: null };

const defaultProps = { hintText: 'Enter a Value', floatingLabelText: 'Value' };
const propTypes = {
  rowData: PropTypes.object.isRequired,
  rowPropertyName: PropTypes.string.isRequired,
  rowIdx: PropTypes.number.isRequired,
  onSave: PropTypes.func.isRequired,
  hintText: PropTypes.node,
  floatingLabelText: PropTypes.node
};

const anchorOrigin = { horizontal: 'left', vertical: 'top' };
const targetOrigin = { horizontal: 'left', vertical: 'top' };

class TextFieldTableRowColumn extends Component {
  constructor(props) {
    super(props);
    const { rowIdx } = props;
    this.state = initState;
    this.popoverAnchor = null;
    this.handleClickToOpen = this.handleClickToOpen.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleOnChangeValue = this.handleOnChangeValue.bind(this);
    this.handleRequestSave = this.handleRequestSave.bind(this);
    this.renderCellValue = this.renderCellValue.bind(this);
  }

  componentDidMount() {
    const { rowData, rowPropertyName } = this.props;
    this.setState(setStateValue.bind(this, rowData[rowPropertyName]));
  }
  componentWillReceiveProps(nextProps) {
    const { rowData, rowPropertyName } = nextProps;
    this.setState(setStateValue.bind(this, rowData[rowPropertyName]));
  }

  handleClickToOpen() {
    this.setState(setStateIsOpen.bind(this, true));
    const { rowData, rowPropertyName } = this.props;
    this.setState(setStateValue.bind(this, rowData[rowPropertyName]));
  }

  handleRequestClose() {
    this.setState(setStateIsOpen.bind(this, false));
  }

  handleRequestSave() {
    const { value: newValue } = this.state;
    const { rowIdx, rowPropertyName, onSave } = this.props;
    onSave(rowIdx, rowPropertyName, newValue);
    this.handleRequestClose();
  }

  handleOnChangeValue(evt) {
    const newValue = evt.target.value;
    this.setState(setStateValue.bind(this, newValue));
  }

  renderCellValue() {
    const { rowData, rowPropertyName, hintText } = this.props;
    const displayVal = rowData[rowPropertyName];
    if (displayVal && displayVal.length > 0) {
      return <span>{displayVal}</span>;
    } else {
      return <span style={{ color: 'rgba(0, 0, 0, 0.54)' }}>{hintText}</span>;
    }
  }

  render() {
    const { popoverAnchor, handleClickToOpen, handleRequestClose, handleRequestSave, handleOnChangeValue, renderCellValue } = this;
    const { isOpen, value } = this.state;
    const { rowIdx, rowData, rowPropertyName, hintText, floatingLabelText } = this.props;
    return (
      <div ref={ref => (this.popoverAnchor = ref)} className="editable-cell" onClick={handleClickToOpen}>
        {renderCellValue()}
        <Popover
          open={isOpen}
          anchorEl={popoverAnchor}
          anchorOrigin={anchorOrigin}
          targetOrigin={targetOrigin}
          onRequestClose={handleRequestClose}
          animated={false}
        >
          <div className="editable-popover">
            <TextFieldSimple value={value} onChange={handleOnChangeValue} hintText={hintText} fullWidth={true} floatingLabelText={floatingLabelText} />
            <div className="flex-row">
              <FlatButton label="Cancel" primary={true} onClick={handleRequestClose} />
              <FlatButton label="Save" primary={true} onClick={handleRequestSave} />
            </div>
          </div>
        </Popover>
      </div>
    );
  }
}

TextFieldTableRowColumn.defaultProps = defaultProps;
TextFieldTableRowColumn.propTypes = propTypes;
export default TextFieldTableRowColumn;