import React, { useState } from "react";
import { DropdownButton, Menu, MenuItem } from "@dhis2/ui-core";
import meta from "../../meta.json";

const DurationMenu = ({
  validDurations,
  setDuration,
  setDurationOption,
  setButtonOptionsName
}) => {
  const [buttonName, setButtonName] = useState("Report Period");
  const usedDurations = meta.periodOptions;
  var valid = true;
  if (validDurations === undefined) {
    return <DropdownButton disabled>{buttonName}</DropdownButton>;
  }
  return (
    <DropdownButton
      component={
        <Menu>
          {Object.keys(usedDurations).map(duration => {
            if (duration === validDurations) {
              valid = false;
              return (
                <MenuItem
                  key={duration}
                  label={duration}
                  onClick={value => {
                    setDuration(value);
                    setButtonName(value);
                    setDurationOption(undefined);
                  }}
                  value={duration}
                ></MenuItem>
              );
            }
            if (valid) {
              return (
                <MenuItem
                  key={duration}
                  label={duration}
                  onClick={value => {
                    setDuration(value);
                    setButtonName(value);
                    setButtonOptionsName("Options");
                    setDurationOption(undefined);
                  }}
                  value={duration}
                ></MenuItem>
              );
            }
          })}
        </Menu>
      }
    >
      {buttonName}
    </DropdownButton>
  );
};

export default DurationMenu;
