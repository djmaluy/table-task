import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { ArrowDown } from "./ArrowDown";
import { ArrowUp } from "./ArrowUp";
import { Loader } from "./Loader";

export const DataTable = () => {
  const [contactData, setContactData] = useState([]);
  const [isFetcjing, setIsFetching] = useState(true);
  const [directionSort, setDirectionSort] = useState(true);
  const [fieldData, setFieldData] = useState("");
  const baseUrl =
    "http://www.filltext.com/?rows=32&id={...%E2%80%8B|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}";

  useEffect(() => {
    const getData = async () => {
      setIsFetching(true);
      try {
        const response = await fetch(baseUrl);
        const myData = await response.json();
        setContactData(myData);
      } catch (e) {
        console.log("some error");
      } finally {
        setIsFetching(false);
      }
    };
    getData();
  }, []);

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
  return (
    <div className="mt-4">
      {isFetcjing ? (
        <Loader />
      ) : (
        <Table striped bordered hover>
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
          <tbody>
            {contactData.map((item) => (
              <tr key={item.address.zip + item.phone}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};
