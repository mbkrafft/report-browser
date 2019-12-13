import React, { useState } from "react";
import { DropdownButton, Menu, MenuItem, InputField } from "@dhis2/ui-core";
import meta from "../../meta.json";

const DataSetMenu = ({
  dataSets,
  setDataSet,
  setDataSetId,
  setValidDurations
}) => {
  const [buttonName, setButtonName] = useState("Data Set Type");
  const [inputText, setInputText] = useState("");

  let durations = dataSet => {
    // Her må vi finne en måte å sette hvilke durations som er gyldig for hvert dataset
    return meta.dataSetDurations[dataSet];
  };

  let logger = _ref => {
    var target = _ref.target;
    setInputText(target.value);
  };

  if (dataSets.length == 1) {
    useEffect(() => {
      let dataSet = dataSets[0];
      setDataSet(dataSet.displayName);
      setDataSetId(dataSet.id);
      setButtonName(dataSet.displayName);
      setValidDurations(durations(dataSet.displayName));
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
              label="Search data sets .."
              name="Default"
              onChange={logger}
              type="text"
              value={inputText}
            />

            {dataSets
              .sort((a, b) => (a.displayName > b.displayName ? 1 : -1))
              .filter(
                a =>
                  a.displayName
                    .toLowerCase()
                    .startsWith(inputText.toLowerCase()) == true
              )
              .map(dataSet => {
                return (
                  <MenuItem
                    key={dataSet.displayName}
                    label={dataSet.displayName}
                    onClick={dataSet => {
                      setDataSet(dataSet.displayName);
                      setDataSetId(dataSet.id);
                      setValidDurations(durations(dataSet.displayName));
                      setButtonName(dataSet.displayName);
                    }}
                    value={dataSet}
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

export default DataSetMenu;
