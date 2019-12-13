import React, { useState } from "react";
import { Menu, MenuItem } from "@dhis2/ui-core";
import YearPaginate from "../Buttons/YearPaginate.js";
import meta from "../../meta.json";

let MonthBrowser = ({ report, handleReportClick }) => {
  const [year, setYear] = useState(2019);

  return (
    <Menu>
      <YearPaginate year={year} setYear={setYear}></YearPaginate>
      {[...Array(12)].map((_, month) => {
        month = month + 1;
        let modifier =
          typeof report.durationOption === "undefined"
            ? ""
            : " - " + report.durationOption;

        return (
          <MenuItem
            key={month}
            label={
              "Report: " +
              report.orgUnit +
              " - " +
              report.dataSet +
              " - " +
              meta.periods.Monthly[month - 1] +
              " - " +
              year +
              modifier
            }
            onClick={value => {
              let monthString = month < 10 ? "0" + month : month.toString();

              let period =
                year + monthString + meta.modifiers[report.durationOption];

              handleReportClick({ meta: value, period: period });
            }}
            value={report}
          ></MenuItem>
        );
      })}
    </Menu>
  );
};

export default MonthBrowser;
