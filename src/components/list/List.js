import React from "react";
import Back from "../Back";

function List(props) {
  return (
    <div className="container">
      <div className="row">
        <h1 className="col-12 text-center title">Fetched List</h1>
      </div>
      <div className="row">
        <Back />
      </div>
      <div className="row">
        {props.dataList.map((item) => {
          const { id, name, username, email, address, website } = item;
          return (
            <div key={id}>
              <div
                className="card bg-light ml-3 mb-3"
                style={{ width: "16rem", height: "20rem" }}
              >
                <div className="card-header">
                  <strong> {name}</strong>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    <b>UserName: </b> {username}
                  </p>
                  <p className="card-text">
                    <b>Email:</b> {email}
                  </p>
                  <p className="card-text">
                    <b>City:</b> {address.city}
                  </p>
                  <p className="card-text">
                    <b>Website:</b> {website}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
