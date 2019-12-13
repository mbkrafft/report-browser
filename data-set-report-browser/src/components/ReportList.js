import React, { useState, useEffect } from "react";
import { Menu, MenuItem } from "@dhis2/ui-core";
import YearBrowser from "./Browsers/YearBrowser";
import MonthOptionBrowser from "./Browsers/MonthOptionBrowser";
import MonthBrowser from "./Browsers/MonthBrowser";
import WeekBrowser from "./Browsers/WeekBrowser";
import DayBrowser from "./Browsers/DayBrowser";
import "./ReportStyle.css";

const DHIS_API_BASE_URL = "https://course.dhis2.org/dhis/api/32";

const ReportsList = ({ report, setScreenCoverData, reportHTML, setReportHTML }) => {

  useEffect(() => {
    const fetchReport = async (
      { dataSetId = "", orgUnitId = "" },
      period = "2019Q4"
    ) => {
      const options = {
        headers: {
          accept: "application/json",
          Authorization: `Basic ${btoa("admin:district")}`
        }
      };

      try {
        const response = await fetch(
          // `https://course.dhis2.org/dhis/dhis-web-reporting/generateDataSetReport.action?ds=${dataSetId}pe=${period}&ou=${orgUnitId}&selectedUnitOnly=true`,
          // `https://course.dhis2.org/dhis/dhis-web-reporting/generateDataSetReport.action?ds=lyLU2wR22tC&pe=201912&ou=DiszpKrYNg8&selectedUnitOnly=true`,
          `${DHIS_API_BASE_URL}/dataSetReport/?ds=${dataSetId}&pe=${period}&ou=${orgUnitId}`,
          options
        );
        return await response.json();
      } catch (e) {
        console.error(e);
      }
      return null;
    };

    reportHTML &&
      fetchReport(reportHTML.meta, reportHTML.period).then(setScreenCoverData);
  }, [reportHTML]);

  if (
    typeof report === "undefined" ||
    typeof report.orgUnit === "undefined" ||
    typeof report.dataSet === "undefined" ||
    typeof report.duration === "undefined"
  ) {
    return (
      <Menu>
        <MenuItem
          className="center-item"
          label="Please specify org unit, data set and duration to get available reports"
        />
      </Menu>
    );
  } else {
    switch (report.duration) {
      case "Yearly":
        return (
          <YearBrowser report={report} handleReportClick={setReportHTML} />
        );

      case "Monthly":
        if (
          report.durationOption === "Quarterly" ||
          report.durationOption === "Six-Monthly" ||
          report.durationOption === "Six-Monthly April"
        )
          return (
            <MonthOptionBrowser
              report={report}
              handleReportClick={setReportHTML}
            />
          );
        else {
          return (
            <MonthBrowser report={report} handleReportClick={setReportHTML} />
          );
        }
      case "Weekly":
        return (
          <WeekBrowser report={report} handleReportClick={setReportHTML} />
        );
      case "Daily":
        return <DayBrowser report={report} handleReportClick={setReportHTML} />;
      default:
        return (
          <Menu>
            <MenuItem
              className="center-item"
              label="Please specify org unit, data set and duration to get available reports"
            />
          </Menu>
        );
    }
  }
};

export default ReportsList;
