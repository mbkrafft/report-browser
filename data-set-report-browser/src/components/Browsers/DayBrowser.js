import React, { useState, useEffect } from "react";
import { Menu, MenuItem } from "@dhis2/ui-core";
import YearPaginate from "../Buttons/YearPaginate.js";
import MonthPaginate from "../Buttons/MonthPaginate.js";
import meta from "../../meta.json";

let daysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

let DayBrowser = ({ report, handleReportClick }) => {
  const [year, setYear] = useState(2019);
  const [month, setMonth] = useState(11);
  const [days, setDays] = useState(daysInMonth(month, year));

  useEffect(() => {
    setDays(daysInMonth(month, year));
  }, [year, month]);

  return (
    <Menu>
      <YearPaginate year={year} setYear={setYear}></YearPaginate>
      <MonthPaginate
        year={year}
        setYear={setYear}
        month={month}
        setMonth={setMonth}
      ></MonthPaginate>

      {[...Array(days)].map((_, day) => {
        day = day + 1;
        day < 10 ? (day = "0" + day) : day.toString();

        return (
          <MenuItem
            key={day}
            label={
              "Report: " +
              report.orgUnit +
              " - " +
              report.dataSet +
              " - " +
              day +
              " - " +
              meta.periods.Monthly[month - 1] +
              " - " +
              year
            }
            onClick={value => {
              let monthString = month < 10 ? "0" + month : month.toString();
              let period = year + "" + monthString + "" + day;

              handleReportClick({ meta: value, period: period });
            }}
            value={report}
          ></MenuItem>
        );
      })}
    </Menu>
  );
};

export default DayBrowser;
