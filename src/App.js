import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switcher } from "./components/Switcher";
import { useServerData } from "./components/useServerData";
import { ArrowDown } from "./components/ArrowDown";
import { ArrowUp } from "./components/ArrowUp";
import { DetailItem } from "./components/DetailItem";
import { Paginate } from "./Pagination";
import { InputSearch } from "./components/InputSearch";

export const App = () => {
  const [url, setUrl] = useState("");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [directionSort, setDirectionSort] = useState(true);
  const [fieldData, setFieldData] = useState("");
  const [detailRow, setDetailRow] = useState("");
  const [isRowClicked, setIsRowClicked] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [{ contactData, isFetching, setContactData }] = useServerData({
    url,
    isButtonClicked,
  });

  // ******  Sorted  data   **********
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

  //  *********  Detail  description  clicked row *********
  const buttonHandler = (url) => {
    setUrl(url);
    setIsButtonClicked(true);
    setIsRowClicked(false);
  };

  const onHandleClick = (row) => {
    setIsRowClicked(true);
    setDetailRow(row);
  };

  //  ******** SearchInput  ***********

  const handleValueSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const onSearchClick = () => {
    console.log(searchValue);
    setSearchValue("");
  };

  const getFilteredData = () => {
    if (!searchValue) {
      return contactData;
    }
    contactData.filter((i) => {
      return (
        i["firstName"].toLowerCase().includes(searchValue.toLowerCase()) ||
        i["lastName"].toLowerCase().includes(searchValue.toLowerCase()) ||
        i["email"].toLowerCase().includes(searchValue.toLowerCase())
      );
    });
  };
  const filteredData = getFilteredData();

  return (
    <div className="container">
      <Switcher buttonHandler={buttonHandler} />
      {isButtonClicked ? (
        <>
          <InputSearch
            handleValueSearch={handleValueSearch}
            onSearchClick={onSearchClick}
            searchValue={searchValue}
          />
          <Paginate
            filteredData={filteredData}
            Arrows={Arrows}
            fieldSortData={fieldSortData}
            fieldData={fieldData}
            isFetching={isFetching}
            onHandleClick={onHandleClick}
          />
        </>
      ) : null}
      {isRowClicked ? <DetailItem detailItem={detailRow} /> : null}
    </div>
  );
};
