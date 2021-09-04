import React from "react";

function Products(props) {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {props.data.map((item) => {
        const { _id, image, title, availableSizes, price } = item;
        return (
          <div key={_id}>
            <div
              className="card ml-3 mb-3"
              style={{ width: "19rem", height: "auto" }}
            >
              <img
                src={image}
                className="card-img-top img-fluid "
                style={{ width: "19rem" }}
                alt={_id}
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  <strong>Available Size:</strong>{" "}
                  {availableSizes.map((size) => size).join(",")}
                </p>
                <p className="card-text">
                  <strong>Price:</strong> {price}$
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
