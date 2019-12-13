import React, { useState } from "react";
import { Menu, MenuItem, Divider, ButtonStrip, Button } from "@dhis2/ui-core";
import meta from "../../meta.json";
import '../ReportStyle.css';

let YearPaginate = ({ year, setYear }) => {
  return (
    <ButtonStrip className="content-center">
      <Button type="button" onClick={() => setYear(year - 1)}>
        Prev Year
      </Button>
      <Button type="button">{year}</Button>
      <Button
        type="button"
        onClick={() => {
          if (year >= 2019) {
            setYear(2019);
          } else {
            setYear(year + 1);
          }
        }}
      >
        Next Year
      </Button>
    </ButtonStrip>
  );
};

export default YearPaginate;
