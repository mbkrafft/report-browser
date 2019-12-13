import React, { useState } from "react";
import { Menu, MenuItem } from "@dhis2/ui-core";
import YearPaginate from "../Buttons/YearPaginate.js";
import meta from "../../meta.json";

let MonthOptionBrowser = ({ report, handleReportClick }) => {
  const [year, setYear] = useState(2019);
  return (
    <Menu>
      <YearPaginate year={year} setYear={setYear}></YearPaginate>
      {[...Array(parseInt(meta.seasonals[report.durationOption]))].map(
        (_, period) => {
          period = period + 1;

          let modifier = report.durationOption == "Quarterly" ? "Q" : "S";

          let april =
            report.durationOption == "Six-Monthly April" ? "April" : "";

          return (
            <MenuItem
              key={period}
              label={
                "Report: " +
                report.orgUnit +
                " - " +
                report.dataSet +
                " - " +
                year +
                " - " +
                april +
                modifier +
                period
              }
              onClick={value => {
                handleReportClick({
                  meta: value,
                  period: year + april + modifier + period
                });
              }}
              value={report}
            ></MenuItem>
          );
        }
      )}
    </Menu>
  );
};

export default MonthOptionBrowser;
