import React, { useState } from "react";
import Loader from "./Loader";
import "../css/layout.css";

const Layout = (props) => {
  const { data, callApi, isLoaded } = props;
  const [startDate, setStartDate] = useState(null);
  return (
    <div className="container-fluid">
      <div className="mainDiv">
        <h1 className="text-center header">NASA IMAGE GALLERY</h1>
        <div className="d-flex justify-content-center">
          <input
            onChange={(date) => setStartDate(date.target.value)}
            placeholder="Select a Date"
            type="date"
          />
          <button
            onClick={(e) => {
              startDate !== null && callApi(startDate);
            }}
            type="button"
            // className="btn btn-light"
          >
            VIEW IMAGE
          </button>
        </div>
        {!isLoaded ? (
          <Loader />
        ) : (
          <div className="container-fluid result">
            <h3 className="text-center text-uppercase">Image With Details</h3>
            <img
              src={data.url}
              className="rounded mx-auto d-block"
              alt="..."
            ></img>
            <div className="name">
              <h5>Name: {data.title}</h5>
              <p className="pb-2">
                Date: <b> {data.date}</b>
              </p>
            </div>
            <p className="details">{data.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
