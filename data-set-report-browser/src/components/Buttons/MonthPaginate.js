import React, { useState } from "react";
import { Menu, MenuItem, Divider, ButtonStrip, Button } from "@dhis2/ui-core";
import meta from "../../meta.json";

let MonthPaginate = ({ year, setYear, month, setMonth }) => {
  return (
    <ButtonStrip className="content-center">
      <Button
        type="button"
        onClick={() => {
          setMonth(month - 1);
          if (month == 1) {
            setMonth(12);
            setYear(year - 1);
          }
        }}
      >
        Prev Month
      </Button>
      <Button type="button">{month}</Button>
      <Button
        type="button"
        onClick={() => {
          setMonth(month + 1);
          if (month == 12) {
            if (year >= 2019) {
              setMonth(12);
              setYear(2019);
            } else {
              setMonth(1);
              setYear(year + 1);
            }
          }
        }}
      >
        Next Month
      </Button>
    </ButtonStrip>
  );
};

export default MonthPaginate;
