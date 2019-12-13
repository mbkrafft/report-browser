import React, { useState } from "react";
import { DropdownButton, Menu, MenuItem } from "@dhis2/ui-core";
import meta from "../../meta.json";

const DurationMenu = ({
  validDurations,
  setDuration,
  setDurationOption,
  buttonName,
  setButtonName
}) => {
  if (validDurations === undefined || validDurations === "Daily") {
    return <DropdownButton disabled>{buttonName}</DropdownButton>;
  }
  return (
    <DropdownButton
      component={
        <Menu>
          {meta.periodOptions[validDurations].map(option => {
            return (
              <MenuItem
                key={option}
                label={option}
                onClick={value => {
                  setDurationOption(value);
                  setButtonName(value);
                }}
                value={option}
              ></MenuItem>
            );
          })}
        </Menu>
      }
    >
      {buttonName}
    </DropdownButton>
  );
};

export default DurationMenu;
