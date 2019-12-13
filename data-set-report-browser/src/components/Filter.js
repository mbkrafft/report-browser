import React, { useState, useEffect } from "react";
import { ButtonStrip, DropdownButton, Menu, MenuItem } from "@dhis2/ui-core";
import meta from "../meta.json";
import OrgUnitMenu from "./Menus/OrgUnitMenu.js";
import DataSetMenu from "./Menus/DataSetMenu.js";
import DurationMenu from "./Menus/DurationMenu.js";
import OptionsMenu from "./Menus/OptionsMenu.js";
import "./ReportStyle.css";

const Filter = ({ dataSets, orgUnits, setReport }) => {
  // Report details for api call
  const [orgUnit, setOrgUnit] = useState();
  const [orgUnitId, setOrgUnitId] = useState();
  const [dataSet, setDataSet] = useState();
  const [dataSetId, setDataSetId] = useState();
  const [duration, setDuration] = useState();
  const [durationOption, setDurationOption] = useState();

  // Show only applicable durations for specified data set
  const [validDurations, setValidDurations] = useState();
  const [buttonOptionsName, setButtonOptionsName] = useState("Options");

  useEffect(() => {
    setReport({
      orgUnit: orgUnit,
      orgUnitId: orgUnitId,

      dataSet: dataSet,
      dataSetId: dataSetId,

      duration: duration,
      durationOption: durationOption
    });
  }, [orgUnit, dataSet, duration, durationOption]);

  return (
    <ButtonStrip compact className="content-center">
      <OrgUnitMenu
        orgUnits={orgUnits}
        setOrgUnit={setOrgUnit}
        setOrgUnitId={setOrgUnitId}
      ></OrgUnitMenu>

      <DataSetMenu
        dataSets={dataSets}
        setDataSet={setDataSet}
        setDataSetId={setDataSetId}
        setValidDurations={setValidDurations}
      ></DataSetMenu>

      <DurationMenu
        validDurations={validDurations}
        setDuration={setDuration}
        setDurationOption={setDurationOption}
        setButtonOptionsName={setButtonOptionsName}
      ></DurationMenu>

      <OptionsMenu
        validDurations={duration}
        setDuration={setDuration}
        setDurationOption={setDurationOption}
        buttonName={buttonOptionsName}
        setButtonName={setButtonOptionsName}
      ></OptionsMenu>
    </ButtonStrip>
  );
};

export default Filter;
