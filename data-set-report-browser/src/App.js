import React from "react";
import { CssReset } from "@dhis2/ui-core";
import { Provider } from "@dhis2/app-runtime";
import DataSetReportBrowser from "./components/DataSetReportBrowser";

const appConfig = {
  baseUrl: "https://course.dhis2.org/dhis",
  apiVersion: 32
};

const App = () => {
  return (
    <Provider className="container" config={appConfig}>
      <CssReset />
      <DataSetReportBrowser></DataSetReportBrowser>
    </Provider>
  );
};

export default App;
