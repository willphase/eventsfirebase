import React from "react";
import DataEvents from "./DataEvents";
import { Link } from "react-router-dom";

const DataEventList = () => {
  return (
    <div className="event-list section">
      <DataEvents />
    </div>
  );
};

export default DataEventList;
