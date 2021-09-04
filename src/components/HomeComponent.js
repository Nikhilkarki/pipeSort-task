import React from "react";
import { Link } from "react-router-dom";
import Title from "./Title";

function HomeComponent(props) {
  return (
    <div className="container">
      <Title />
      <div className="row boxcontainer mt-5">
        <div className="box col-8 col-sm-3">
          <Link to="/form">
            <h3>Form</h3>
          </Link>
        </div>
        <div className=" box col-8 col-sm-3">
          <Link to="/ecommerce">
            <h3>E-Commerce</h3>
          </Link>
        </div>
        <div className=" box col-8 col-sm-3">
          <Link to="/list">
            <h3>List</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
