import React, { useState, useEffect } from "react";
import {
  ScrollBar,
  Modal,
  Tab,
  TabBar,
  TableCell,
  TableCellHead,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableRowHead
} from "@dhis2/ui-core";
import ActionBar from "./ActionBar";

const Report = ({ screenCoverData, reportHTML }) => {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, [screenCoverData]);

  const createCell = (cell, idx) => {
    return (
      <TableCell className="cellmate" key={idx}>
        <style>
          {`
                    .cellmate {
                        font-size: 12px !important;
                    }
                    }`}
        </style>
        {cell || "X"}
      </TableCell>
    );
  };

  const createRow = (row = [], idx) => {
    return <TableRow key={idx}>{row.map(createCell)}</TableRow>;
  };

    const createColumn = ({column}, idx) => {
        return (<TableCellHead key={idx}>{column || '--'}</TableCellHead>);
    };

  const formatTable = ({ headers, rows }, idx) => {
    return idx === displayIndex ? (
      <Table style={{ display: "none" }} key={idx}>
        <TableHead>
        <TableRowHead>
                    {headers.map(createColumn)}
                </TableRowHead>
        </TableHead>
        <TableBody>{rows.map(createRow)}</TableBody>
      </Table>
    ) : null;
  };

  const formatTabs = ({ title }, idx) => {
    return (
      <Tab onClick={() => setDisplayIndex(idx)} selected={idx === displayIndex} key={idx}>
        {title}
      </Tab>
    );
  };

  return Array.isArray(screenCoverData) ? (
    <Modal
      large
      open={visible}
      onClose={() => setVisible(false)}
    >
      <Modal.Content>
        <ScrollBar>
          <TabBar>{screenCoverData.map(formatTabs)}</TabBar>
        </ScrollBar>
        {screenCoverData.map(formatTable)}
      </Modal.Content>
      <ActionBar reportHTML={reportHTML} setVisible={setVisible}></ActionBar>
    </Modal>
  ): null;
};

export default Report;
