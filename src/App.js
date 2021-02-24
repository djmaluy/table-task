import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataTable } from "./components/DataTable";
import { Switcher } from "./components/Switcher";
import { useServerData } from "./components/useServerData";
import { ArrowDown } from "./components/ArrowDown";
import { ArrowUp } from "./components/ArrowUp";
import { DetailItem } from "./components/DetailItem";

export const App = () => {
  const [url, setUrl] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [{ contactData, isFetching, setContactData }] = useServerData({
    url,
    isButtonClicked,
  });
  const [directionSort, setDirectionSort] = useState(true);
  const [fieldData, setFieldData] = useState("");
  const [detailRow, setDetailRow] = useState("");
  const [isRowClicked, setIsRowClicked] = useState(false);

  const handleClick = (field) => {
    const copyData = contactData.concat();
    let sortData;

    if (directionSort) {
      sortData = copyData.sort((a, b) => {
        return a[field] > b[field] ? 1 : -1;
      });
    }
    sortData = copyData.reverse((a, b) => {
      return a[field] > b[field] ? 1 : -1;
    });
    setContactData(sortData);
    setDirectionSort(!directionSort);
  };

  const fieldSortData = (field) => {
    handleClick(field);
    setFieldData(field);
  };

  const Arrows = () => {
    return directionSort ? <ArrowDown /> : <ArrowUp />;
  };

  const buttonHandler = (url) => {
    setUrl(url);
    setIsButtonClicked(true);
    setIsRowClicked(false);
  };

  const onHandleClick = (row) => {
    setIsRowClicked(true);
    setDetailRow(row);
  };
  return (
    <div className="container">
      <Switcher buttonHandler={buttonHandler} />

      {isButtonClicked ? (
        <DataTable
          Arrows={Arrows}
          isFetching={isFetching}
          contactData={contactData}
          fieldSortData={fieldSortData}
          fieldData={fieldData}
          onHandleClick={onHandleClick}
        />
      ) : null}
      {isRowClicked ? <DetailItem detailItem={detailRow} /> : null}
    </div>
  );
};
