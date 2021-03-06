import React from 'react';
import StatusBar from 'common/StatusBar';
import PageNavLinks from 'common/PageNavLinks';
import { TomisPanel, TomisPanelBody } from 'TomisApp/TomisPanel';
import TomisAutocomplete from 'TomisApp/TomisAutocomplete';
import TomisCheckbox from 'TomisApp/TomisCheckbox';
import TomisTextField from 'TomisApp/TomisTextField';
import TomisTextFieldMultiLine from 'TomisApp/TomisTextFieldMultiLine';
import TomisTextFieldReadOnly from 'TomisApp/TomisTextFieldReadOnly';
import CrewInfoGrid from 'common/grids/CrewInfoGrid';
import TomisHeading from 'TomisApp/TomisHeading';
import ToggleButtonLocalZulu from 'common/ToggleButtonLocalZulu';
import PlanningMissionSection from 'common/PlanningMissionSection';
import MissionDatesTimesGrid from 'common/grids/MissionDatesTimesGrid';
import TomisButtonRaised from 'TomisApp/TomisButtonRaised';
import CloningStepBar from 'common/CloningStepBar';
import { STEP_BAR_H } from 'globalJs/constants';

const FlightFloatPageRender = props => {
    const { defns, isCloneable, dimensions } = props;
    return (
        <div className="page-root">
            {!isCloneable && <PageNavLinks pageTitle="Flight Information" />}
            {isCloneable && <CloningStepBar stepNbr={1} dimensions={dimensions} />}
            {isCloneable && <div style={{ marginTop: `${STEP_BAR_H}px` }} />}
            <TomisPanel label="Flight Information">
                <TomisPanelBody>
                    <div className="flex-row">
                        <div className="flex-2">
                            <TomisTextFieldReadOnly label="Branch/Unit" {...defns.branchUnitLov} />
                        </div>
                        <div className="flex-1 checkbox">
                            <TomisCheckbox label="Stand By" {...defns.standbyCb} onModify={props.handleModifyStandByCb} />
                        </div>
                    </div>
                    <div className="flex-row flex-1">
                        <TomisTextField label="Flight Title" placeholder="Type Flight Title" {...defns.title} onModify={props.handleModifyTitle} />
                    </div>
                    <div className="flex-row flex-1">
                        <TomisTextFieldMultiLine label="Remarks" placeholder="Type Remarks" {...defns.remarks} onModify={props.handleModifyRemarks} />
                    </div>
                    <div className="flex-row">
                        <div className="flex-1">
                            <TomisAutocomplete label="Aircraft Type*" placeholder="Type Aircraft Type" {...defns.aircraftTypeLov} onModify={props.handleModifyAircraftTypeLov} />
                        </div>
                        <div className="flex-1">
                            <TomisAutocomplete label="Tail #*" placeholder="Type Tail #" {...defns.tailNumberLov} onModify={props.handleModifyTailNumberLov} />
                        </div>
                        <div className="flex-1">
                            <TomisAutocomplete label="PIC (Risk Assessment)*" {...defns.picLov} onModify={props.handleModifyPicLov} />
                        </div>
                    </div>
                    <br />
                    <div className="flex-row table">
                        <div className="flex-1">
                            <CrewInfoGrid {...props} />
                        </div>
                    </div>
                    <br />
                    <div className="flex-row" style={{ marginBottom: '36px' }}>
                        <TomisHeading label="Capabilities" />
                    </div>
                    <div className="flex-row">
                        <TomisCheckbox className="inline-checkbox" label="EMT" {...defns.genericCb} onModify={props.handleModifyGenericCb} />
                        <TomisCheckbox className="inline-checkbox" label="HRST" {...defns.genericCb} onModify={props.handleModifyGenericCb} />
                        <TomisCheckbox className="inline-checkbox" label="HOIST" {...defns.genericCb} onModify={props.handleModifyGenericCb} />
                        <TomisCheckbox className="inline-checkbox" label="HSL" {...defns.genericCb} onModify={props.handleModifyGenericCb} />
                        <TomisCheckbox className="inline-checkbox" label="ACR" {...defns.genericCb} onModify={props.handleModifyGenericCb} />
                        <TomisCheckbox className="inline-checkbox" label="ADF" {...defns.genericCb} onModify={props.handleModifyGenericCb} />
                    </div>
                </TomisPanelBody>
            </TomisPanel>
            <br />
            <TomisPanel label="Mission Date(s) and Time(s)">
                <TomisButtonRaised style={{ marginRight: '12px' }} label="Add New" onClick={props.handleClickAddMissionDatesTimes} />
                <TomisButtonRaised style={{ marginRight: '12px' }} label="Apply" onClick={props.handleClickApplyMissionDatesTime} />
                <TomisButtonRaised label="Cancel Changes" onClick={props.handleClickCancelMissionDatesTimes} />
                <TomisPanelBody>
                    <div className="flex-row">
                        <div className="flex-1">
                            <ToggleButtonLocalZulu {...defns.localZuluToggle} onModify={props.handleModifyLocalZuluToggle} />
                        </div>
                        <div className="flex-1">
                            <TomisAutocomplete label="Time Zone*" {...defns.genericLov} onModify={props.handleModifyGenericLov} />
                        </div>
                        <div className="flex-1" />
                    </div>
                    <div className="flex-row table">
                        <div style={{ marginTop: '2rem' }} className="flex-1">
                            <MissionDatesTimesGrid {...props} />
                        </div>
                    </div>
                </TomisPanelBody>
            </TomisPanel>
            <br />
            <TomisPanel label="Planning">
                <TomisPanelBody>
                    <PlanningMissionSection {...props} />
                </TomisPanelBody>
            </TomisPanel>
            <br />
        </div>
    );
};

export default FlightFloatPageRender;
