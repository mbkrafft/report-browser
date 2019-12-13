import React, { useState } from "react";
import { Menu, MenuItem } from "@dhis2/ui-core";
import meta from "../../meta.json";
import YearPaginate from "../Buttons/YearPaginate.js";

let WeekBrowser = ({ report, handleReportClick }) => {
  const [year, setYear] = useState(2019);

  return (
    <Menu>
      <YearPaginate year={year} setYear={setYear}></YearPaginate>

      {[...Array(52)].map((_, week) => {
        week = week + 1;
        let modifier =
          typeof report.durationOption === "undefined"
            ? ""
            : " - " + report.durationOption;

        return (
          <MenuItem
            key={week}
            label={
              "Report: " +
              report.orgUnit +
              " - " +
              report.dataSet +
              " - " +
              "Week " +
              week +
              " - " +
              year +
              modifier
            }
            onClick={value => {
              let period =
                year + "" + meta.modifiers[report.durationOption] + "W" + week;

              handleReportClick({ meta: value, period: period });
            }}
            value={report}
          ></MenuItem>
        );
      })}
    </Menu>
  );
};

export default WeekBrowser;
