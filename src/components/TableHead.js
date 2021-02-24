import React from "react";

export const TableHead = ({ fieldSortData, fieldData, Arrows }) => {
  return (
    <thead>
      <tr>
        <th
          onClick={() => {
            fieldSortData("firstName");
          }}
        >
          FirstName {fieldData === "firstName" ? <Arrows /> : null}
        </th>
        <th
          onClick={() => {
            fieldSortData("lastName");
          }}
        >
          LastName {fieldData === "lastName" ? <Arrows /> : null}
        </th>
        <th
          onClick={() => {
            fieldSortData("email");
          }}
        >
          Email {fieldData === "email" ? <Arrows /> : null}
        </th>
        <th
          onClick={() => {
            fieldSortData("phone");
          }}
        >
          Phone {fieldData === "phone" ? <Arrows /> : null}
        </th>
      </tr>
    </thead>
  );
};
