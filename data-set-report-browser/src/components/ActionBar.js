import React, {useState} from "react";
import { ButtonStrip, Button, Card } from "@dhis2/ui-core";

const handleDownload = ({meta}) => {
  debugger;
  const link = ``;
  console.log(meta);
};

const DHIS_API_BASE_URL = "https://course.dhis2.org/dhis/api/32";

const ActionBar = ({ reportHTML, setVisible }) => {

  const pdfLink = `${DHIS_API_BASE_URL}/dataSetReport.pdf/?ds=${reportHTML.meta.dataSetId}&ou=${reportHTML.meta.orgUnitId}&pe=${reportHTML.period}`;

  return (
    <Card>
      <ButtonStrip compact middle>
        <Button
          secondary
          type="button"
          onClick={() => {
            window.open(`mailto:?subject=Sharing dataset&body=Download my dataset: ${encodeURIComponent(pdfLink)}`);
          }}
        >
          Share
        </Button>

        <Button
          type="button"
          onClick={() => {
            window.open(pdfLink, '_blank');
          }}
        >
          DOWNLOAD
        </Button>

        <Button
          onClick={function() {
            setVisible(false);
          }}
          secondary
          type="button"
        >
          CLOSE
        </Button>
      </ButtonStrip>
    </Card>
  );
};

export default ActionBar;
