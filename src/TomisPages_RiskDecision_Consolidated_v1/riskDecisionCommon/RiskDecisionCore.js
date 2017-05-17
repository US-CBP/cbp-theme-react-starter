import React, { PropTypes, Component } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import HeaderNavAction from '../../TomisMui/HeaderNavAction';
import { Panel, PanelHeaderSection, PanelBody } from '../../TomisMui/Panel';
import ToggleButtons from '../../TomisMui/ToggleButtons';
import TextFieldSimple from '../../TomisMui/TextFieldSimple';
import AutoComplete from '../../TomisMui/AutoComplete';
import AutoCompleteInfo from '../../TomisMui/AutoCompleteInfo';
import ButtonRaisedSimplePrimary from '../../TomisMui/ButtonRaisedSimplePrimary';
import FileAttachment from '../../TomisMui/FileAttachment';
import DatePickerInlineLandscape from '../../TomisMui/DatePickerInlineLandscape';
import DialogSimple from '../../TomisMui/DialogSimple';
import NewRejectData from '../riskDecisionCommon/NewRejectData';
import { Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from '../../TomisMui/Table';
import { toggleButtonsOptions, setStateFlightStatus, setStateIsInfoVisible, setStateIsConfirmVisible } from './helper';

const numberOfMissionsLovValues = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
  '24',
  '25',
  '26',
  '27',
  '28',
  '29',
  '30'
];

const tableData = [
  {
    name: '< 25',
    status: '25 - 45',
    selected: '> 45'
  },
  {
    name: '< 35',
    status: '35 - 55',
    selected: '> 55'
  },
  {
    name: '< 45',
    status: '35 - 55',
    selected: '> 55'
  },
  {
    name: '< 55',
    status: '55 - 75',
    selected: '> 75'
  },
  {
    name: '< 65',
    status: '65 - 85',
    selected: '> 85'
  },
  {
    name: '< 75',
    status: '75 - 95',
    selected: '> 95'
  }
];

const riskAssessmentLovValues = ['LOW', 'MEDIUM', 'HIGH'];

const defaultProps = {
  flightStatus: '',
  isDisplayNewRejectData: false
};

const propTypes = {
  flightStatus: PropTypes.string.isRequired,
  isDisplayNewRejectData: PropTypes.bool.isRequired
};

class RiskDecisionCore extends Component {
  constructor(props) {
    super(props);
    this.handleCloseConfirm = this.handleCloseConfirm.bind(this);
    this.handleChangeFlightStatus = this.handleChangeFlightStatus.bind(this);
    this.prevFlightStatus = 'PENDING';
  }

  state = {
    isPanelExpanded: true,
    isPending: true,
    isAccept: false,
    isReject: false,
    flightStatus: '',
    isInfoVisible: false,
    isConfirmVisible: false
  };

  componentDidMount() {
    const { flightStatus } = this.props;
    this.setState(setStateFlightStatus.bind(this, flightStatus));
  }

  handleTouchTapInfo = () => {
    this.setState(setStateIsInfoVisible.bind(this, true));
  };

  handleCloseInfo = () => {
    this.setState(setStateIsInfoVisible.bind(this, false));
  };

  handleChangeFlightStatus(event, value) {
    event.stopPropagation();
    event.preventDefault();
    const { prevFlightStatus } = this;
    console.log('handleChangeFlightStatus, prevFlightStatus=', prevFlightStatus, ', value=', value);
    if (prevFlightStatus != 'PENDING' && value === 'PENDING') {
      this.setState(setStateIsConfirmVisible.bind(this, true));
    }
    this.prevFlightStatus = value;
  }

  handleCloseConfirm(buttonLabel, buttonIdx) {
    console.log('handleCloseConfirm, buttonLabel=', buttonLabel, ', buttonIdx=', buttonIdx);
    this.setState(setStateIsConfirmVisible.bind(this, false));
    if (buttonLabel === 'No') {
      this.setState(setStateFlightStatus.bind(this, this.prevFlightStatus));
    }
  }

  render() {
    const {
      getBackgroundColorAccept,
      getLabelColorAccept,
      getBackgroundColorReject,
      getLabelColorReject,
      handleTouchTapInfo,
      handleCloseInfo,
      handleChangeFlightStatus,
      handleCloseConfirm
    } = this;
    const { isPending, isAccept, isReject, flightStatus, isInfoVisible, isConfirmVisible, isPanelExpanded } = this.state;
    const { isDisplayNewRejectData } = this.props;
    return (
      <div>
        <HeaderNavAction actionBarPageTitle="UAS Consolidated" />

        <DialogSimple title="Warning" onRequestClose={handleCloseConfirm} initOpen={isConfirmVisible} modal={true} buttonLabels={['Yes', 'No']}>
          <div>You will lose all of your changes.  Is this ok?</div>
        </DialogSimple>

        <div className="outer-card-margin">
          <Panel>
            <PanelHeaderSection title="Risk Decision">
              <a
                href="https://uconnect.cbpnet.cbp.dhs.gov/sites/OIT/bems/BEI/tomis/OAM/Forms/AllItems.aspx?RootFolder=%2Fsites%2FOIT%2Fbems%2FBEI%2Ftomis%2FOAM%2FTest%20for%20PRD&FolderCTID=0x012000E16EFDC3EAB388448214D711CE710140&View=%7BE25102CE%2DEA12%2D4305%2D90B1%2DD0037623B83F%7D"
                style={{ marginLeft: '0px' }}
                className="panel-link"
              >
                Risk Assessment Form
              </a>
            </PanelHeaderSection>
            <PanelBody>
              <div className="flex-row">
                <div className="flex-1">
                  <ToggleButtons
                    labelText="Flight Status (RA)*"
                    valueSelected={flightStatus}
                    options={toggleButtonsOptions}
                    onChange={handleChangeFlightStatus}
                  />
                </div>
              </div>
              <div className="flex-row">
                <div className="flex-1">
                  <AutoComplete
                    dataSource={numberOfMissionsLovValues}
                    hintText="Number of Missions"
                    floatingLabelText={`Number of Missions${isAccept || isReject ? '*' : ''}`}
                  />
                </div>
                <div className="flex-1">
                  <TextFieldSimple hintText="Risk Score" fullWidth={true} floatingLabelText={`Risk Score${isAccept ? '*' : ''}`} />
                </div>
                <div className="flex-1">
                  <AutoComplete
                    dataSource={riskAssessmentLovValues}
                    hintText="Total Risk Assessment Range"
                    floatingLabelText={`Total Risk Assessment Range${isAccept ? '*' : ''}`}
                  />
                </div>
              </div>
            
              <div className="flex-row">
                <div className="flex-1 flex-row">
                  <AutoComplete hintText="Choose Title" floatingLabelText={`Title${isAccept || isReject ? '*' : ''}`} />
                </div>
                <div className="flex-1 flex-column-pad flex-row">
                  <AutoComplete hintText="Choose Name" floatingLabelText={`Name${isAccept || isReject ? '*' : ''}`} />
                </div>
                <div className="flex-1 flex-column-pad flex-row">
                  <DatePickerInlineLandscape floatingLabelText={`Date${isAccept || isReject ? '*' : ''}`} />
                </div>
              </div>
              {isDisplayNewRejectData && <NewRejectData />}
              <div className="row-spacer-24">
                <FileAttachment />
              </div>
              {this.props.children}
            </PanelBody>
          </Panel>
        </div>
      </div>
    );
  }
}

RiskDecisionCore.defaultProps = defaultProps;
RiskDecisionCore.propTypes = propTypes;

export default RiskDecisionCore;
