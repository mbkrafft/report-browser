import React, { useState, useEffect } from "react";
import { Card, CircularLoader } from "@dhis2/ui-core";
import { useDataQuery } from "@dhis2/app-runtime";
import Filter from "./Filter";
import ReportList from "./ReportList";
import Report from "./Report";

const initialQuery = {
  response: {
    resource: "me?fields=dataSets&fields=organisationUnits"
  },
  dataSets: {
    resource: "dataSets"
  },
  orgUnits: {
    resource: "organisationUnits?userDataViewOnly=true"
  }
};

const DataSetReportBrowser = props => {
  const { loading, error, data } = useDataQuery(initialQuery);
  const [report, setReport] = useState();

  // controls the fetch query
  const [reportHTML, setReportHTML] = useState(null);

  // controls the screencover window
  const [screenCoverData, setScreenCoverData] = useState(null);

  useEffect(() => {
    screenCoverData && console.log(screenCoverData);
  }, [screenCoverData]);

  return (
    <Card className="dsrb">
      {loading && (
        <span>
          <CircularLoader />
        </span>
      )}
      {error && <span>{`ERROR: ${error.message}`}</span>}
      {data && (
        <div>
          {screenCoverData && (
            <Report
              screenCoverData={screenCoverData}
              setScreenCoverData={setScreenCoverData}
              reportHTML={reportHTML}
              setReportHTML={setReportHTML}
            />
          )}
          <Filter
            dataSets={data.response.dataSets.map(dataSet => {
              return {
                id: dataSet,
                displayName: data.dataSets.dataSets.find(x => x.id === dataSet)
                  .displayName
              };
            })}
            orgUnits={data.orgUnits.organisationUnits.map(orgUnit => {
              return {
                id: orgUnit.id,
                displayName: orgUnit.displayName
              };
            })}
            setReport={setReport}
          />
          <ReportList
            report={report}
            setScreenCoverData={setScreenCoverData}
            reportHTML={reportHTML}
            setReportHTML={setReportHTML}
          />
        </div>
      )}
    </Card>
  );
};

export default DataSetReportBrowser;
