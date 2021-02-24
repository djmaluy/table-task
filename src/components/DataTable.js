import React from "react";
import Table from "react-bootstrap/Table";
import { Loader } from "./Loader";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";

export const DataTable = ({
  isFetching,
  Arrows,
  contactData,
  fieldData,
  fieldSortData,
  onHandleClick,
}) => {
  return isFetching ? (
    <Loader />
  ) : (
    <>
      <Table bordered hover className="mt-4">
        <TableHead
          fieldSortData={fieldSortData}
          fieldData={fieldData}
          Arrows={Arrows}
        />
        <TableBody contactData={contactData} onHandleClick={onHandleClick} />
      </Table>
    </>
  );
};
