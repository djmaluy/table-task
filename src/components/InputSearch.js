import React from "react";
import { Button, FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

export const InputSearch = ({
  handleValueSearch,
  onSearchClick,
  searchValue,
}) => {
  return (
    <InputGroup className="mt-2">
      <FormControl
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        value={searchValue}
        onChange={handleValueSearch}
      />
      <InputGroup.Append>
        <Button
          variant="outline-secondary"
          onClick={() => onSearchClick(searchValue)}
        >
          Find
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
};
