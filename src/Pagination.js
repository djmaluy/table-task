import React, { useState } from "react";
import { Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { Loader } from "./components/Loader";
import { TableHead } from "./components/TableHead";
import "./styles.css";

export const Paginate = ({
  contactData,
  fieldSortData,
  fieldData,
  Arrows,
  isFetching,
  onHandleClick,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const PER_PAGE = 50;
  const offset = currentPage * PER_PAGE;
  const currentPageData = contactData.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(contactData.length / PER_PAGE);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return (
    <div>
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <Table bordered hover className="mt-4">
            <TableHead
              fieldSortData={fieldSortData}
              fieldData={fieldData}
              Arrows={Arrows}
            />
            <tbody>
              {currentPageData.map((i) => (
                <tr
                  key={i.address.zip + i.phone}
                  onClick={() => onHandleClick(i)}
                >
                  <td>{i.firstName}</td>
                  <td>{i.lastName}</td>
                  <td>{i.email}</td>
                  <td>{i.phone}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <ReactPaginate
            previousLabel={"← Previous"}
            nextLabel={"Next →"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        </>
      )}
    </div>
  );
};
