import React, { useState } from "react";
import Back from "../Back";
import products from "../../data.json";
import SortandFilter from "./SortandFilter";
import Products from "./Products";
function Ecommerce(props) {
  const [data, setData] = useState(products.products);

  const [size, setSize] = useState("All");
  const [price, setPrice] = useState("All");
  const [sort, setSort] = useState("Latest");
  // handle filters

  function handleSizeChangeFilter(e) {
    const change = e.target.value;
    setSize(change);
    if (change) {
      const newData = data.filter(
        (item) => item.availableSizes.indexOf(change) >= 0
      );
      setData(newData);
    } else {
      setData(products.products);
    }
  }

  function handlePriceChangeFilter(e) {
    const change = e.target.value;
    setPrice(change);
    console.log(change);
    if (change === "Less than 20$") {
      const newData = data.filter((item) => item.price < 20);
      setData(newData);
    } else if (change === "20$-40$") {
      const newData = data.filter(
        (item) => item.price >= 20 && item.price <= 40
      );
      setData(newData);
    } else if (change === "More than 40$") {
      const newData = data.filter((item) => item.price > 40);
      setData(newData);
    } else {
      setData(products.products);
    }
  }

  // handle sorts

  function handleSort(e) {
    const change = e.target.value;
    setSort(change);
    if (change === "Increasing") {
      const newData = data.sort((a, b) => a.price - b.price);
      setData(newData);
    } else if (change === "Decreasing") {
      const newData = data.sort((a, b) => b.price - a.price);
      setData(newData);
    } else if (change === "Latest") {
      setData(products.products);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <h1 className="col-12 text-center title">Ecommerce</h1>
      </div>
      <div className="row">
        <Back setShowHome={props.setShowHome} />
      </div>
      <div className="row mb-3 ml-3">
        <SortandFilter
          sort={sort}
          handleSort={handleSort}
          size={size}
          handleSizeChangeFilter={handleSizeChangeFilter}
          price={price}
          handlePriceChangeFilter={handlePriceChangeFilter}
        />
      </div>
      <div className="row">
        <Products data={data} />
      </div>
    </div>
  );
}

export default Ecommerce;
