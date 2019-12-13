import React from "react";
import { Menu, MenuItem } from "@dhis2/ui-core";
import meta from "../../meta.json";

let YearBrowser = ({ report, handleReportClick }) => {
  return (
    <Menu>
      {meta.periods[report.duration].map(period => {
        let modifier =
          typeof report.durationOption === "undefined"
            ? ""
            : " - " + report.durationOption;

        return (
          <MenuItem
            key={period}
            label={
              "Report: " +
              report.orgUnit +
              " - " +
              report.dataSet +
              modifier +
              " - " +
              period
            }
            onClick={value => {
              handleReportClick({
                meta: value,
                period: period + meta.modifiers[report.durationOption]
              });
            }}
            value={report}
          ></MenuItem>
        );
      })}
    </Menu>
  );
};

export default YearBrowser;
