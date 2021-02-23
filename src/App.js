import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataTable } from "./components/DataTable";

export const App = () => {
  return (
    <div className="container">
      <DataTable />
    </div>
  );
};
