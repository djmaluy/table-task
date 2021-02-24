import React from "react";
import Button from "react-bootstrap/Button";

export const Switcher = ({ buttonHandler }) => {
  const smallData =
    "http://www.filltext.com/?rows=32&id={...​|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
  const bigData =
    "http://www.filltext.com/?rows=1000&id...​|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";
  return (
    <div className="mt-5 d-flex justify-content-center">
      <Button variant="primary" onClick={() => buttonHandler(smallData)}>
        32 rows
      </Button>{" "}
      <Button variant="success ml-2" onClick={() => buttonHandler(bigData)}>
        1000 rows
      </Button>{" "}
    </div>
  );
};
