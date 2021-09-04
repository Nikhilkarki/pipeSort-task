import React from "react";

function PaymentDetails({
  step,
  previous,
  cardNumber,
  setCardNumber,
  cardName,
  setCardName,
  validThru,
  setValidThru,
  cvv,
  setCvv,
  handleSubmit,
}) {
  return (
    <div className="col-12 d-flex justify-content-center">
      <div>
        <form className="" style={{ width: "20rem" }} onSubmit={handleSubmit}>
          <h4>Step/{step}: Payment Details</h4>
          <div className="form-group mt-1">
            <label>Card Number</label>
            <input
              type="number"
              className="form-control"
              placeholder="XXXX XXXX XXXX"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name on card"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label>Valid Thru</label>
            <input
              type="month"
              className="form-control"
              value={validThru}
              min={new Date()}
              onChange={(e) => setValidThru(e.target.value)}
            ></input>
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input
              type="number"
              className="form-control"
              placeholder="000"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            ></input>
          </div>
          <div className="d-flex ">
            <button
              className="btn btn-success mr-1"
              style={{ width: "50%" }}
              onClick={previous}
            >
              PREVIOUS
            </button>
            <button
              className="btn btn-primary"
              style={{ width: "50%" }}
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaymentDetails;
