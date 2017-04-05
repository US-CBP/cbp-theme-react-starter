import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import DatePicker from 'material-ui/DatePicker';
import TextField from '../../TomisMui/TextField';
import HeaderNavAction from '../../TomisInternal/HeaderNavAction';
import RaisedButton from '../../TomisMui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from '../../TomisMui/Card';
import AutoComplete from '../../TomisMui/AutoComplete';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from '../../TomisMui/Table';
import Checkbox from 'material-ui/Checkbox';
import DeleteIcon from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import MonthlyCalendarIcon from 'material-ui/svg-icons/notification/event-note';
import SvgIconArrowDropDown from 'material-ui/svg-icons/navigation/arrow-drop-down';
import { indigo900 } from 'material-ui/styles/colors';

const initState = {
    dataSource1: [],
    dataSource2: [],
    isExpanded: true,
    demoDate: new Date(),
    autoOk: false,
    disableYearSelection: false
};

const defaultProps = {
    isAccept: false,
    isReject: false
};

const propTypes = {
    isAccept: PropTypes.bool,
    isReject: PropTypes.bool
};

const selectedBackgroundColor = 'rgba(0,0,0,0.27)';
const unselectedBackgroundColor = '#ffffff';

const selectedLabelColor = 'rgba(0,0,0,0.87)';
const unselectedLabelColor = 'rgba(0,0,0,0.54)';

class RiskDecisionCore extends Component {
    constructor(props) {
        super(props);
        this.state = initState;
        this.handleUpdateInput = this.handleUpdateInput.bind(this);
    }

    handleUpdateInput(value) {
        this.setState({
            dataSource1: [value, value + value, value + value + value],
            dataSource2: [value, value + value, value + value + value]
        });
    }

    handleChangeDemoDate = (event, date) => {
        this.setState({
            demoDate: date
        });
    };

    getBackgroundColorAccept = () => {
        const { isAccept } = this.props;
        return isAccept ? selectedBackgroundColor : unselectedBackgroundColor;
    };

    getLabelColorAccept = () => {
        const { isAccept } = this.props;
        return isAccept ? selectedLabelColor : unselectedLabelColor;
    };

    getBackgroundColorReject = () => {
        const { isReject } = this.props;
        return isReject ? selectedBackgroundColor : unselectedBackgroundColor;
    };

    getLabelColorReject = () => {
        const { isReject } = this.props;
        return isReject ? selectedLabelColor : unselectedLabelColor;
    };

    render() {
        const { getBackgroundColorAccept, getLabelColorAccept, getBackgroundColorReject, getLabelColorReject } = this;
        const { isAccept, isReject } = this.props;
        const { dataSource1, dataSource2 } = this.state;
        return (
            <div>
                <HeaderNavAction actionBarPageTitle="Flight Planning" />
                <Card expanded={true}>
                    <CardHeader title="Risk Decision" actAsExpander={true} showExpandableButton={true} />
                    <CardText expandable={true}>
                        <div className="flex-row">
                            <div>
                                <label className="labeled-item">Flight Status (RA)*</label>
                                <RaisedButton label="Accept" backgroundColor={getBackgroundColorAccept()} labelColor={getLabelColorAccept()} />
                                <RaisedButton label="Reject" backgroundColor={getBackgroundColorReject()} labelColor={getLabelColorReject()} />
                            </div>
                            <div className="flex-1 flex-column-pad flex-row">
                                <AutoComplete fullWidth={true} hintText="Choose Title" dataSource={dataSource2} onUpdateInput={this.handleUpdateInput} floatingLabelText="Title*" />
                                {/* must use inline style for position on IconButton to override default */}
                                <IconButton className="inline-icon" style={{ position: 'absolute' }}>
                                    <SvgIconArrowDropDown />
                                </IconButton>
                            </div>
                            <div className="flex-1 flex-column-pad flex-row">
                                <AutoComplete fullWidth={true} hintText="Choose Name" dataSource={dataSource1} onUpdateInput={this.handleUpdateInput} floatingLabelText="Name*" />
                                {/* must use inline style for position on IconButton to override default */}
                                <IconButton className="inline-icon" style={{ position: 'absolute' }}>
                                    <SvgIconArrowDropDown />
                                </IconButton>
                            </div>
                            <div className="flex-1 flex-column-pad flex-row">
                                <DatePicker
                                    className="flex-1"
                                    container="inline"
                                    fullWidth={true}
                                    hintText={<span>Select Date </span>}
                                    floatingLabelText="Date*"
                                    defaultDate={this.state.demoDate}
                                    onChange={this.handleChangeDemoDate}
                                    mode="landscape"
                                    firstDayOfWeek={0}
                                    formatDate={date => date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()}
                                />
                                {/* must use inline style for position on IconButton to override default */}
                                <IconButton className="inline-icon" style={{ position: 'absolute' }}>
                                    <MonthlyCalendarIcon />
                                </IconButton>
                            </div>
                        </div>
                        <div className="row-spacer-24">
                            <h3>Attachments</h3>
                            <img src="/images/fileUpload.png" />
                        </div>
                        {this.props.children}
                    </CardText>
                </Card>
            </div>
        );
    }
}

RiskDecisionCore.defaultProps = defaultProps;
RiskDecisionCore.propTypes = propTypes;

export default RiskDecisionCore;