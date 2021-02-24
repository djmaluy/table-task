import React from "react";

export const TableBody = ({ contactData, onHandleClick }) => {
  return (
    <tbody>
      {contactData.map((item) => (
        <tr
          key={item.address.zip + item.phone}
          onClick={() => onHandleClick(item)}
        >
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
        </tr>
      ))}
    </tbody>
  );
};
