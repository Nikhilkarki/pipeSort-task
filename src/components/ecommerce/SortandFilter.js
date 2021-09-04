import React from "react";

function SortandFilter(props) {
  return (
    <div className="col-12 d-flex">
      <h4 className="ml-auto mr-2">Sort By |</h4>
      <h4 className="">Order: </h4>
      <select className="ml-1" value={props.sort} onChange={props.handleSort}>
        <option value="Latest">Latest</option>
        <option value="Increasing">Increasing</option>
        <option value="Decreasing">Decreasing</option>
      </select>
      <h4 className="ml-auto mr-2">Filter By |</h4>
      <h4 className="">Size: </h4>
      <select
        className="ml-1"
        value={props.size}
        onChange={props.handleSizeChangeFilter}
      >
        <option value="">All</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="X">X</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>
      <h4 className="ml-2 ">Price:</h4>
      <select
        className="mr-5 ml-1"
        value={props.price}
        onChange={props.handlePriceChangeFilter}
      >
        <option value="">All</option>
        <option value="Less than 20$">Less than 20$</option>
        <option value="20$-40$">20$-40$</option>
        <option value="More than 40$">More than 40$</option>
      </select>
    </div>
  );
}

export default SortandFilter;
