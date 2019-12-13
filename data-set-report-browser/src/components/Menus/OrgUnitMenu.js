import React, { useState, useEffect } from "react";
import { DropdownButton, Menu, MenuItem, InputField } from "@dhis2/ui-core";

const OrgUnitMenu = ({ orgUnits, setOrgUnit, setOrgUnitId }) => {
  const [buttonName, setButtonName] = useState("Organisation Units");
  const [inputText, setInputText] = useState("");

  let logger = _ref => {
    var target = _ref.target;
    setInputText(target.value);
  };

  if (orgUnits.length == 1) {
    useEffect(() => {
      let orgUnit = orgUnits[0];
      setOrgUnit(orgUnit.displayName);
      setOrgUnitId(orgUnit.id);
      setButtonName(orgUnit.displayName);
    }, []);

    return (
      <DropdownButton component={<span>{buttonName}</span>} disabled>
        {buttonName}
      </DropdownButton>
    );
  } else {
    return (
      <DropdownButton
        component={
          <Menu>
            <InputField
              dense
              filled
              label="Search .."
              name="Default"
              onChange={logger}
              type="text"
              value={inputText}
            />

            {orgUnits
              .sort((a, b) => (a.displayName > b.displayName ? 1 : -1))
              .filter(
                a =>
                  a.displayName
                    .toLowerCase()
                    .startsWith(inputText.toLowerCase()) == true
              )
              .map(orgUnit => {
                return (
                  <MenuItem
                    key={orgUnit.displayName}
                    label={orgUnit.displayName}
                    onClick={orgUnit => {
                      setOrgUnit(orgUnit.displayName);
                      setOrgUnitId(orgUnit.id);
                      setButtonName(orgUnit.displayName);
                    }}
                    value={orgUnit}
                  />
                );
              })}
          </Menu>
        }
      >
        {buttonName}
      </DropdownButton>
    );
  }
};

export default OrgUnitMenu;
